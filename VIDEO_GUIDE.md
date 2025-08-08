# Робота з відео фонами

## 🎬 Компоненти для відео

### SmartBackground
Основний компонент з автоматичним перемиканням між відео та зображенням:

```jsx
import { SmartBackground } from './SmartBackground';

<SmartBackground 
  videoSrc="/video/bg-hero.mp4"
  imageSrc="/images/images/bg-hero.jpg"
  overlayClasses="bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-800/60"
/>
```

### VideoBackground (розширений)
Компонент з додатковими налаштуваннями:

```jsx
import { VideoBackground } from './VideoBackground';

<VideoBackground 
  videoSrc="/video/bg-hero.mp4"
  imageSrc="/images/images/bg-hero.jpg"
  overlayClasses="bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-800/60"
  autoPlay={true}
  loop={true}
  playOnIntersection={true}
/>
```

## 🎛️ Налаштування прозорості

### Поточні налаштування:
- **Hero section**: `from-slate-900/60 via-slate-900/30 to-slate-800/60` (менше блюру)
- **Experience section**: `from-slate-900/70 via-slate-900/40 to-slate-800/70` (помірний блюр)

### Рівні прозорості:
- `/30` = 30% прозорості (відео добре видно)
- `/40` = 40% прозорості 
- `/50` = 50% прозорості
- `/60` = 60% прозорості
- `/70` = 70% прозорості (більше затемнення)

## 🔧 Особливості

### Автоматичне відтворення:
- ✅ Відео запускається автоматично
- ✅ Зациклене відтворення
- ✅ Вимкнений звук (muted)
- ✅ Оптимізовано для мобільних

### Intersection Observer:
- 📱 Відео паузиться коли не в зоні видимості
- 🔋 Економить батарею
- 🚀 Покращує продуктивність

### Fallback система:
- 🖼️ Автоматичний перехід на зображення при помилці
- ⚡ Показ зображення під час завантаження відео
- 🔄 Перевірка доступності файлів

## 📁 Структура файлів

```
public/
├── video/                    
│   ├── bg-hero.mp4          (31MB → 2.2MB оптимізовано)
│   ├── bg-exp.mp4           (19MB → 1.0MB оптимізовано)
│   └── optimized/           
│       ├── bg-hero-optimized.mp4
│       ├── bg-hero-optimized.webm
│       ├── bg-exp-optimized.mp4
│       └── bg-exp-optimized.webm
```

## 🐛 Діагностика

### Перевірка відео в консолі:
- `✅ Video available: /video/bg-hero.mp4` - відео знайдено
- `📹 Video loaded successfully` - відео завантажено
- `🎬 Video playing` - відео відтворюється
- `❌ Video not found` - файл не знайдено

### Поширені проблеми:
1. **Відео не відтворюється**: Перевірте autoplay політики браузера
2. **Файл не знайдено**: Переконайтесь що файл в правильній папці
3. **Повільне завантаження**: Використовуйте оптимізовані файли

## 🎯 Рекомендації

### Для production:
1. Використовуйте оптимізовані файли з `public/video/optimized/`
2. Додайте WebP зображення для кращої компресії
3. Вимкніть debug інформацію

### Для кращої продуктивності:
```bash
# Оптимізація всіх медіа
./optimize-media.sh

# Або вручну для відео:
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -vf "scale=1920:1080" -an -movflags +faststart output.mp4
```
