# Налаштування форми контактів

## Опції для отримання листів:

### 1. Formspree (Рекомендовано - безкоштовно до 50 форм на місяць)

1. Зайдіть на https://formspree.io/
2. Зареєструйтеся та створіть новий проєкт
3. Отримайте URL форми (буде виглядати як `https://formspree.io/f/YOUR_FORM_ID`)
4. Замініть в Contact.jsx рядок:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
   На ваш реальний URL

### 2. EmailJS (Альтернатива)

1. Зайдіть на https://www.emailjs.com/
2. Налаштуйте email service
3. Замініть код відправки на EmailJS SDK

### 3. Netlify Forms (Якщо деплоїте на Netlify)

Просто додайте `netlify` атрибут до форми:
```html
<form netlify onSubmit={handleSubmit}>
```

## Для PDF резюме:

1. Конвертуйте `public/resume.html` в PDF:
   - Відкрийте файл у браузері
   - Ctrl+P (Cmd+P на Mac)
   - "Save as PDF"
   - Збережіть як `public/resume.pdf`

2. Або використайте онлайн конвертер HTML в PDF

## Тестування:

1. Заповніть форму на сайті
2. Перевірте чи приходять листи на ваш email
3. Протестуйте завантаження PDF

## Заміна контактних даних:

У Contact.jsx замініть:
- `your.email@example.com` на ваш реальний email
- `+380 XX XXX XX XX` на ваш номер телефону  
- `@yourusername` на ваш Telegram
- `github.com/yourusername` на ваш GitHub
