---
title: ТеплоХаб — технічна архітектура
updated: 2026-06-02
---

## Стек

| Шар | Технологія |
|-----|-----------|
| Фреймворк | Next.js 15 (App Router, TypeScript) |
| Стилі | Tailwind CSS v4 + shadcn/ui |
| Хостинг | Firebase App Hosting |
| Auth | Firebase Auth — email/password (тільки для адміна) |
| База даних | Firestore |
| Сховище | Firebase Storage |

## Структура маршрутів

```
app/
  layout.tsx          # шрифти, metadata
  page.tsx            # лендінг (one-page)
  admin/
    page.tsx          # редирект → /admin/login якщо не авторизований
    login/
      page.tsx        # форма входу
    gallery/
      page.tsx        # управління галереєю
```

## Дані в Firebase

### Firestore — колекція `gallery`

```ts
{
  id: string,
  url: string,        // посилання на Firebase Storage
  storagePath: string,
  caption: string,
  order: number,
  createdAt: Timestamp
}
```

### Firestore — колекція `leads` (заявки з форми)

```ts
{
  name: string,
  phone: string,
  service: string,
  message: string,
  createdAt: Timestamp,
  read: boolean
}
```

## Потік галереї

```
Публічний сайт:
  Firestore (gallery, orderBy order) → Next.js → render фото

Адмінка:
  Upload → Firebase Storage → отримати URL → зберегти doc у Firestore
  Delete → видалити doc з Firestore + файл зі Storage
```

## Потік форми заявки

```
Користувач → /api/leads (Route Handler) → Firestore leads → (опц.) email notification
```

## Налаштування Firebase

1. Firebase Console → новий проєкт
2. Увімкнути: Authentication (Email/Password), Firestore, Storage, App Hosting
3. Firestore rules: публічне читання `gallery`, запис тільки auth
4. Storage rules: публічне читання, запис тільки auth
5. Один адмін-акаунт створюється вручну в Firebase Console

## Деплой

```bash
# Спочатку — ініціалізація Firebase App Hosting
firebase init apphosting

# Надалі — автоматично при push в main
git push origin main
```

## Змінні середовища

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```
