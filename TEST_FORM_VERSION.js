// ШВИДКЕ ТЕСТУВАННЯ БЕЗ FORMSPREE
// Замініть функцію handleSubmit в Contact.jsx на цю для тестування

const handleSubmit = async (e) => {
  e.preventDefault()
  
  // Валідація перед відправкою
  const errors = validateForm()
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors)
    return
  }
  
  setIsSubmitting(true)
  setFormErrors({})

  try {
    // ТЕСТОВА ВЕРСІЯ - відправляє email через mailto
    const subject = encodeURIComponent(`Новий запит з портфоліо від ${formData.name}`)
    const body = encodeURIComponent(
      `Ім'я: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Повідомлення:\n${formData.message}\n\n` +
      `Відправлено з портфоліо сайту`
    )
    
    // Відкриває email клієнт
    window.location.href = `mailto:dev.bushko@gmail.com?subject=${subject}&body=${body}`
    
    setSubmitStatus('success')
    setFormData({ name: '', email: '', message: '' })
    
    // Показуємо успішне повідомлення на 5 секунд
    setTimeout(() => setSubmitStatus(null), 5000)
    
  } catch (error) {
    console.error('Form submission error:', error)
    setSubmitStatus('error')
    
    // Приховуємо помилку через 5 секунд
    setTimeout(() => setSubmitStatus(null), 5000)
  } finally {
    setIsSubmitting(false)
  }
}

// ПЕРЕВАГИ ТЕСТОВОЇ ВЕРСІЇ:
// ✅ Працює відразу без реєстрації
// ✅ Відкриває email клієнт користувача
// ✅ Всі дані потрапляють в email

// НЕДОЛІКИ:
// ❌ Потребує email клієнт на пристрої
// ❌ Менш професійно виглядає
// ❌ Користувач бачить всі дані в URL
