# 📝 Інструкція по заміні контактних даних

## Швидка заміна контактів

### 1. У файлі `src/components/Contact.jsx` знайдіть секцію `contactMethods` і замініть:

```javascript
// Замініть ці значення на свої реальні дані:
{
  value: 'ваш.email@gmail.com',           // → your.email@gmail.com
  href: 'mailto:ваш.email@gmail.com',     // → mailto:your.email@gmail.com
}

{
  value: '+380 XX XXX XX XX',             // → +380 50 123 45 67
  href: 'tel:+380XXXXXXXXX',              // → tel:+380501234567
}

{
  value: '@ваш_username',                 // → @your_telegram
  href: 'https://t.me/ваш_username',      // → https://t.me/your_telegram
}

{
  value: 'github.com/ваш-username',       // → github.com/your-github
  href: 'https://github.com/ваш-username', // → https://github.com/your-github
}

{
  value: 'Ваше місто, Україна',           // → Київ, Україна
  href: 'https://maps.google.com/?q=ВашеМісто,Ukraine', // → https://maps.google.com/?q=Kyiv,Ukraine
}
```

### 2. Налаштування форми зв'язку:

1. Зайдіть на https://formspree.io/
2. Створіть безкоштовний акаунт
3. Створіть новий проєкт та отримайте Form ID
4. У файлі `Contact.jsx` знайдіть рядок:
   ```javascript
   const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'
   ```
5. Замініть `YOUR_FORM_ID` на ваш реальний ID

### 3. Додаткові налаштування (за бажанням):

- Змініть кількість років досвіду в описі
- Оновіть робочі години в call-to-action
- Додайте/приберіть контактні методи з масиву

### 4. Тестування:

1. Заповніть форму на сайті
2. Перевірте чи приходять листи на ваш email
3. Протестуйте всі посилання контактів

---

**Примітка:** Всі дані в коді зараз є placeholder'ами і не належать нікому. Це безпечно використовувати як шаблон.
