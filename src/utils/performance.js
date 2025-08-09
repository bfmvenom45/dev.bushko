// Utility для визначення продуктивності пристрою
export function getDevicePerformance() {
  // Перевірка кількості ядер процесора
  const cores = navigator.hardwareConcurrency || 2
  
  // Перевірка пам'яті (якщо доступно)
  const memory = navigator.deviceMemory || 4
  
  // Перевірка типу з'єднання
  const connection = navigator.connection
  const effectiveType = connection?.effectiveType || '4g'
  
  // Визначення рівня продуктивності
  if (cores >= 8 && memory >= 8 && effectiveType === '4g') {
    return 'high'
  } else if (cores >= 4 && memory >= 4) {
    return 'medium'
  } else {
    return 'low'
  }
}

// Налаштування для різних рівнів продуктивності
export const performanceSettings = {
  high: {
    particles: 30,
    animationDelay: 50,
    enableCursor: false, // Відключено кастомний курсор
    enableParticles: true,
    enableFloating: true
  },
  medium: {
    particles: 20,
    animationDelay: 100,
    enableCursor: false, // Відключено кастомний курсор
    enableParticles: true,
    enableFloating: false
  },
  low: {
    particles: 10,
    animationDelay: 200,
    enableCursor: false, // Відключено кастомний курсор
    enableParticles: false,
    enableFloating: false
  }
}

export function getOptimalSettings() {
  const performance = getDevicePerformance()
  return performanceSettings[performance]
}
