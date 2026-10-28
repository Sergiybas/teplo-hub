# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Проєкт

Сайт-візитка для компанії **ТермоХаб** (інженерні системи опалення, водопостачання, каналізація). Багатосторінковий сайт українською мовою з галереєю та формою заявки в Telegram.

HTML-прототип (для референсу дизайну): `prototype/index.html`, `prototype/styles.css`, `prototype/sections.css`.

## Стек

```
Astro 7 (статичний вивід, TypeScript)
Чистий CSS — дизайн-система в src/styles/global.css
Без Tailwind і React; Firebase Hosting + Cloud Functions для форми заявки
```

## Команди

```bash
npm run dev       # dev-сервер → http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview build
```

## Структура src/

```
src/
  layouts/
    Layout.astro        # HTML shell: head, Header, Footer, scripts
  components/
    Header.astro        # nav з active-станом (Astro.url.pathname)
    Footer.astro
  pages/
    index.astro         # Головна: Hero, Послуги, Чому ми, Процес, Статистика, FAQ, CTA
    gallery.astro       # Галерея з lightbox
    contacts.astro      # Контакти + форма → Telegram
  styles/
    global.css          # Вся дизайн-система: CSS-змінні, базові стилі, всі секції
```

## Дизайн-система

Шрифти: **Unbounded** (`--font-display`) · **Onest** (`--font-body`) · **JetBrains Mono** (`--font-mono`). Підключені через Google Fonts у `global.css`.

Палітра OKLCH (CSS-змінні в `src/styles/global.css`):
- `--heat` (помаранчевий) і `--water` (блакитний) — чергуються на непарних/парних елементах
- `--dark` / `--on-dark` — темні секції (Process, CTA)

## Форма → Telegram

`src/pages/contacts.astro` надсилає заявку на same-origin endpoint `/api/lead`.
Firebase Hosting переписує цей шлях на Cloud Function `submitLead`, а вже функція
надсилає повідомлення через Telegram Bot API. Токен і chat ID ніколи не передаються
у браузер і не повинні мати префікс `PUBLIC_`.

Перед першим deploy налаштувати Firebase Secrets:
```
firebase functions:secrets:set TELEGRAM_TOKEN
firebase functions:secrets:set TELEGRAM_CHAT_ID
```

Як отримати: створити бота через @BotFather → написати боту → перейти на `https://api.telegram.org/bot<TOKEN>/getUpdates` → знайти `"chat":{"id":...}`.

## Галерея

Фото кладуться у `public/gallery/`. Масив `photos` у `src/pages/gallery.astro` — розкоментувати і вказати шляхи.
Плейсхолдери Hero та WhyUs: `<div class="img-ph">` → замінити на `<img class="hero-img">` коли клієнт надасть фото.

## Важливо

- Сайт тільки українською мовою
- Не змінювати дизайн-систему без причини — затверджена клієнтом
