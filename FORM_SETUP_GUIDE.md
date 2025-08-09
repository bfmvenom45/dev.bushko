# 📧 Повна інструкція налаштування форми

## Варіант 1: Formspree (Рекомендований)

### Крок 1: Реєстрація
1. Відкрийте https://formspree.io/
2. Натисніть "Get Started" (зелена кнопка)
3. Зареєструйтеся з email: `dev.bushko@gmail.com`
4. Підтвердіть email в поштовій скринці

### Крок 2: Створення проєкту
1. Після входу натисніть "Create new project"
2. Назва проєкту: "Portfolio Website"
3. Натисніть "Create"

### Крок 3: Створення форми
1. В проєкті натисніть "New Form"
2. Назва форми: "Contact Form"
3. Email для отримання: `dev.bushko@gmail.com`
4. Натисніть "Create form"

### Крок 4: Отримання Form ID
1. Скопіюйте Form ID (наприклад: `xpzgkdql`)
2. Або скопіюйте повний URL: `https://formspree.io/f/xpzgkdql`

### Крок 5: Оновлення коду
В файлі `src/components/Contact.jsx` знайдіть рядок:
```javascript
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'
```

Замініть на:
```javascript
const FORMSPREE_URL = 'https://formspree.io/f/ВАШ_РЕАЛЬНИЙ_ID'
```

### Крок 6: Тестування
1. Заповніть форму на сайті
2. Натисніть "Надіслати повідомлення"
3. Перевірте email `dev.bushko@gmail.com`

---

## Варіант 2: Швидкий тест (mailto)

Якщо хочете протестувати форму прямо зараз:

1. Відкрийте файл `TEST_FORM_VERSION.js`
2. Скопіюйте код функції `handleSubmit`
3. Замініть існуючу функцію в `Contact.jsx`
4. Форма буде відкривати email клієнт

---

## Варіант 3: Netlify Forms (якщо деплоїте на Netlify)

1. Додайте атрибут `netlify` до форми:
```jsx
<form netlify onSubmit={handleSubmit}>
```

2. Форма автоматично працюватиме на Netlify

---

## 🎯 Рекомендація

**Використовуйте Formspree** - це найкращий варіант для портфоліо:
- ✅ Безкоштовно до 50 форм/місяць
- ✅ Професійний вигляд
- ✅ Захист від спаму
- ✅ Аналітика повідомлень
