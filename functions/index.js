const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const logger = require("firebase-functions/logger");

const telegramToken = defineSecret("TELEGRAM_TOKEN");
const telegramChatId = defineSecret("TELEGRAM_CHAT_ID");

const ALLOWED_ORIGINS = new Set([
  "https://termohub.ua",
  "https://www.termohub.ua",
  "https://teplohub.ua",
  "https://www.teplohub.ua",
  "https://teplo-hub.web.app",
  "https://teplo-hub.firebaseapp.com",
]);
const MAX_FIELD_LENGTH = 500;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestsByIp = new Map();

function sanitize(value) {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

function allowRequest(ip) {
  const now = Date.now();
  const recent = (requestsByIp.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT_MAX) return false;
  requestsByIp.set(ip, [...recent, now]);

  if (requestsByIp.size > 1000) {
    for (const [key, timestamps] of requestsByIp) {
      if (!timestamps.some((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)) {
        requestsByIp.delete(key);
      }
    }
  }
  return true;
}

exports.submitLead = onRequest(
  {
    region: "europe-west1",
    maxInstances: 3,
    secrets: [telegramToken, telegramChatId],
  },
  async (req, res) => {
    if (req.method !== "POST") {
      res.set("Allow", "POST");
      return res.status(405).json({ success: false });
    }

    const origin = req.get("origin");
    const isLocal = process.env.NODE_ENV !== "production" &&
      (origin === "http://localhost:4321" || origin === "http://127.0.0.1:4321");
    if (!origin || (!ALLOWED_ORIGINS.has(origin) && !isLocal)) {
      return res.status(403).json({ success: false });
    }

    if (sanitize(req.body?.website)) {
      return res.status(200).json({ success: true });
    }

    const ip = req.ip || "unknown";
    if (!allowRequest(ip)) {
      return res.status(429).json({ success: false });
    }

    const name = sanitize(req.body?.name);
    const phone = sanitize(req.body?.phone);
    const service = sanitize(req.body?.service);
    const message = sanitize(req.body?.message);
    if (!name || !service || !/^\+?[0-9 ()-]{7,20}$/.test(phone)) {
      return res.status(400).json({ success: false });
    }

    const text = [
      "🔥 Нова заявка — ТермоХаб",
      "",
      `👤 Ім'я: ${name}`,
      `📞 Телефон: ${phone}`,
      `🔧 Послуга: ${service}`,
      message ? `💬 Коментар: ${message}` : "",
    ].filter(Boolean).join("\n");

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegramToken.value()}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: telegramChatId.value(), text }),
          signal: AbortSignal.timeout(10000),
        },
      );
      if (!response.ok) throw new Error(`Telegram API ${response.status}`);
      return res.status(200).json({ success: true });
    } catch (error) {
      logger.error("Telegram delivery failed", error);
      return res.status(502).json({ success: false });
    }
  },
);
