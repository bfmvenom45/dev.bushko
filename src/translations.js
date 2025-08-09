export const translations = {
  uk: {
    // Navigation
    nav: {
      home: 'Головна',
      stack: 'Стек',
      experience: 'Досвід',
      projects: 'Проєкти',
      faq: 'FAQ',
      contact: 'Контакти',
      cta: 'Зв\'язатись'
    },
    
    // Hero Section
    hero: {
      badge: 'Frontend • React • JavaScript',
      title: 'Створюю',
      titleHighlight: 'швидкі',
      titleEnd: 'та акуратні інтерфейси',
      subtitle: 'Спеціалізуюся на React та сучасному JavaScript. Створюю зручні веб-інтерфейси з чистим кодом та уважністю до деталей.',
      description: 'Створюю сучасні веб-додатки з React та TypeScript. Поєдную технічні навички з творчим підходом для створення унікальних цифрових рішень.',
      cta: 'Замовити проєкт',
      ctaSecondary: 'Безкоштовна консультація',
      email: 'dev.bushko@gmail.com',
      emailButton: 'Написати листа',
      availableText: 'Доступний для нових проєктів',
      responseTime: 'Відповідь протягом 2-4 годин',
      title1: {
        part1: 'Створюю швидкі',
        part2: 'та акуратні інтерфейси'
      },
      title2: {
        part1: 'Створюю сучасні',
        part2: 'веб-рішення'
      },
      title3: {
        part1: 'Frontend',
        part2: 'розробник'
      },
      contactButton: 'Зв\'язатися',
      scrollDown: 'Прокрутіть вниз'
    },

    // Stack Section  
    stack: {
      badge: 'Технічний стек',
      title: 'Мої',
      titleHighlight: 'навички',
      subtitle: 'Технології розробки та творчі інструменти для створення сучасних веб-додатків і візуального контенту',
      frontend: 'Frontend розробка',
      frontendDesc: 'Сучасні веб-технології',
      aiDesc: 'Штучний інтелект у розробці',
      creative: 'Креативні інструменти',
      creativeDesc: 'Дизайн та креативні інструменти',
      stats: {
        years: 'Роки досвіду',
        projects: 'Проєктів', 
        technologies: 'Технологій',
        satisfaction: 'Задоволення клієнтів'
      },
      skills: {
        react: 'Бібліотека для UI',
        typescript: 'Типізований JavaScript',
        nextjs: 'React фреймворк',
        tailwind: 'Utility-first CSS',
        vite: 'Швидкий збірщик',
        threejs: '3D графіка в браузері',
        chatgpt: 'AI асистент для коду',
        copilot: 'AI програмування',
        midjourney: 'AI генерація зображень',
        claude: 'AI помічник Anthropic',
        sora: 'AI генерація відео',
        runway: 'AI відео редагування',
        figma: 'UI/UX дизайн',
        photoshop: 'Редагування зображень',
        blender: '3D моделювання',
        photography: 'Фотографія'
      }
    },

    // Experience Section
    experience: {
      badge: 'Досвід роботи',
      title: 'Мій',
      titleHighlight: 'досвід',
      subtitle: 'Професійний шлях та ключові досягнення у сфері Frontend розробки',
      stats: {
        frontend: 'Роки у frontend',
        blender: 'Роки 3D/Blender',
        photography: 'Роки фотографії',
        total: 'Років загального досвіду'
      },
      items: [
        { 
          title: 'Frontend Developer (самостійні проєкти)', 
          time: '2024—2025', 
          desc: 'React/TS, TMDB-апка, e-commerce віджети, React Three Fiber, 3D інтерактивні сцени.',
          icon: 'DEV',
          skills: ['React', 'TypeScript', 'Next.js', 'R3F', 'Blender']
        },
        { 
          title: '3D Artist & Blender Developer', 
          time: '2022—2024', 
          desc: '3D моделювання, текстурування, анімація в Blender. Створення GLTF моделей для веб, оптимізація для React Three Fiber.',
          icon: 'UI',
          skills: ['Blender', 'GLTF', '3D Modeling', 'Animation', 'Texturing']
        },
        { 
          title: 'Stock Photographer & Content Creator', 
          time: '2017—2023', 
          desc: 'Професійна фотографія для стокових агентств. Створення високоякісного контенту, робота з освітленням, композицією.',
          icon: 'PHOTO',
          skills: ['Photography', 'Lightroom', 'Photoshop', 'Stock Content', 'Visual Design']
        },
        { 
          title: 'Інженер-дизайнер (Hal-Kran)', 
          time: 'до 2016', 
          desc: 'Львівська політехніка, інженерні системи. Проектування та розрахунок технічних рішень.',
          icon: 'SYS',
          skills: ['Engineering', 'CAD', 'Technical Design', 'Project Management']
        }
      ]
    },

    // Projects Section
    projects: {
      badge: 'Портфоліо',
      title: 'Мої',
      titleHighlight: 'проєкти',
      subtitle: 'Вибрані роботи що демонструють мої навички та підхід до розробки',
      viewProject: 'Переглянути проєкт',
      viewCode: 'Переглянути код',
      viewDemo: 'Переглянути демо',
      liveDemo: 'Демо',
      githubProfile: 'GitHub Profile →',
      viewAllProjects: 'Переглянути всі проєкти на GitHub',
      completed: 'Завершено',
      inProgress: 'В розробці',
      demoAvailable: 'Демо доступно'
    },

    // FAQ Section
    faq: {
      badge: 'Питання',
      title: 'Часті',
      titleHighlight: 'питання',
      subtitle: 'Відповіді на найпоширеніші запитання про співпрацю та технології',
      items: [
        { 
          q: 'Які технології використовую?', 
          a: 'Основний стек: React, JavaScript/TypeScript, Tailwind CSS. Маю досвід з Next.js, Vite, Git/GitHub. Працюю з REST API, вивчаю Three.js для 3D елементів. Постійно розвиваюся та освоюю нові інструменти.' 
        },
        { 
          q: 'Формат співпраці та доступність?', 
          a: 'Працюю віддалено з України (GMT+2). Шукаю Junior/Middle позиції для набуття комерційного досвіду. Комунікую через Telegram, Discord, email. Активний в робочі години, готовий до гнучкого графіку.' 
        },
        { 
          q: 'Чим можу допомогти вашому проєкту?', 
          a: 'Розробляю frontend додатки з нуля, верстаю адаптивні інтерфейси, інтегрую API. Створюю чисті компоненти, слідкую за сучасними практиками. Можу додати інтерактивні елементи та анімації.' 
        },
        { 
          q: 'Скільки часу займає розробка?', 
          a: 'Лендінг: 1-2 тижні. SPA додаток: 3-4 тижні. Складні проєкти: 1-2 місяці. Даю реальні оцінки після аналізу завдання. Працюю ітераційно з регулярними демо та фідбеком.' 
        },
        { 
          q: 'Як організований процес розробки?', 
          a: 'Спочатку аналізую вимоги, створюю план роботи. Розбиваю на етапи по 1-2 тижні. Використовую Git, пишу зрозумілий код, документую зміни. Регулярно показую прогрес та отримую фідбек.' 
        },
        { 
          q: 'Чи надаю підтримку після запуску?', 
          a: 'Так! Надаю документацію та інструкції. Виправляю критичні баги безкоштовно протягом місяця. Можемо домовитись про довгострокову підтримку та розвиток проєкту.' 
        },
        { 
          q: 'Досвід з мобільною розробкою?', 
          a: 'Роблю адаптивні веб-додатки з Mobile-First підходом. Маю досвід з PWA - офлайн режим, швидке завантаження. При потребі готовий вивчити React Native для мобільних додатків.' 
        },
        { 
          q: 'Вартість та умови оплати?', 
          a: 'Погодинна ставка: $10-20/год залежно від складності. Для повних проєктів обговорюємо фіксовану ціну. Оплата частинами або після етапів. Надаю знижки студентам та стартапам.' 
        }
      ]
    },

    // Contact Section
    contact: {
      badge: 'Зв\'язок',
      title: 'Давайте',
      titleHighlight: 'Створимо',
      titleEnd: 'Разом',
      subtitle: 'Frontend Developer з досвідом у React, TypeScript та сучасних веб-технологіях. Відкритий для нових проєктів та співпраці.',
      infoTitle: 'Контактна інформація',
      formTitle: 'Обговорити проєкт',
      formDescription: 'Заповніть форму, і я зв\'яжуся з вами найближчим часом для обговорення деталей вашого проєкту.',
      methods: {
        email: 'Email',
        phone: 'Телефон',
        location: 'Локація',
        timezone: 'Часовий пояс'
      },
      projectDiscussion: 'Обговорити проєкт',
      formDescription: 'Заповніть форму, і я зв\'яжуся з вами найближчим часом для обговорення деталей вашого проєкту.',
      form: {
        name: 'Ім\'я',
        namePlaceholder: 'Ваше ім\'я',
        email: 'Email',
        emailPlaceholder: 'email@example.com',
        message: 'Повідомлення',
        messagePlaceholder: 'Розкажіть про ваш проєкт: тип додатка, технології, терміни, бюджет... Чим детальніше, тим точніше зможу оцінити можливості співпраці.',
        submit: 'Надіслати повідомлення',
        submitting: 'Надсилається...',
        required: 'обов\'язкове',
        errors: {
          nameRequired: 'Ім\'я обов\'язкове',
          nameMinLength: 'Ім\'я має бути мінімум 2 символи',
          emailRequired: 'Email обов\'язковий',
          emailInvalid: 'Введіть коректний email',
          messageRequired: 'Повідомлення обов\'язкове',
          messageMinLength: 'Повідомлення має бути мінімум 10 символів'
        },
        success: 'Повідомлення надіслано успішно! Дякую за звернення. Відповім протягом 24 годин.',
        error: 'Сталася помилка. Спробуйте ще раз або напишіть напряму на email.'
      },
      location: 'Чернівці, Україна',
      contactMethods: {
        email: 'Email',
        phone: 'Телефон',
        telegram: 'Telegram',
        github: 'GitHub',
        location: 'Локація',
        timezone: 'Часовий пояс'
      },
      availability: {
        available: 'Доступний для роботи',
        responseTime: 'Відповідь протягом',
        hours: '2-4 годин',
        schedule: 'Пн-Пт: 9:00-18:00 (UTC+2) • Вихідні: за домовленістю'
      }
    },

    // Footer
    footer: {
      copyright: 'Всі права захищені',
      privacy: 'Політика конфіденційності',
      terms: 'Умови використання'
    },

    // Common
    common: {
      loading: 'Завантаження...',
      error: 'Помилка',
      retry: 'Спробувати знову',
      close: 'Закрити',
      language: 'Мова',
      ukrainian: 'Українська',
      english: 'English',
      playVideo: 'Відтворити відео'
    }
  },

  en: {
    // Navigation
    nav: {
      home: 'Home',
      stack: 'Stack',
      experience: 'Experience',
      projects: 'Projects',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Get in Touch'
    },
    
    // Hero Section
    hero: {
      badge: 'Frontend • React • JavaScript',
      title: 'Creating',
      titleHighlight: 'fast',
      titleEnd: 'and clean interfaces',
      subtitle: 'Specialized in React and modern JavaScript. Building user-friendly web interfaces with clean code and attention to detail.',
      description: 'I create modern web applications with React and TypeScript. Combining technical skills with creative approach to build unique digital solutions.',
      cta: 'Start Project',
      ctaSecondary: 'Free Consultation',
      email: 'dev.bushko@gmail.com',
      emailButton: 'Send Email',
      availableText: 'Available for new projects',
      responseTime: 'Response within 2-4 hours',
      title1: {
        part1: 'Creating fast',
        part2: 'and clean interfaces'
      },
      title2: {
        part1: 'Building modern',
        part2: 'web solutions'
      },
      title3: {
        part1: 'Frontend',
        part2: 'Developer'
      },
      contactButton: 'Get in Touch',
      scrollDown: 'Scroll Down'
    },

    // Stack Section
    stack: {
      badge: 'Tech Stack',
      title: 'My',
      titleHighlight: 'Skills',
      subtitle: 'Development technologies and creative tools for building modern web applications and visual content',
      frontend: 'Frontend Development',
      frontendDesc: 'Modern web technologies',
      aiDesc: 'Artificial Intelligence in Development',
      creative: 'Design & Creative',
      creativeDesc: 'Design and creative tools',
      stats: {
        years: 'Years of experience',
        projects: 'Projects',
        technologies: 'Technologies', 
        satisfaction: 'Client satisfaction'
      },
      skills: {
        react: 'UI Library',
        typescript: 'Typed JavaScript',
        nextjs: 'React Framework',
        tailwind: 'Utility-first CSS',
        vite: 'Fast Build Tool',
        threejs: '3D Graphics in Browser',
        chatgpt: 'AI Code Assistant',
        copilot: 'AI Programming',
        midjourney: 'AI Image Generation',
        claude: 'Anthropic AI Assistant',
        sora: 'AI Video Generation',
        runway: 'AI Video Editing',
        figma: 'UI/UX Design',
        photoshop: 'Image Editing',
        blender: '3D Modeling',
        photography: 'Photography'
      }
    },

    // Experience Section
    experience: {
      badge: 'Work Experience',
      title: 'My',
      titleHighlight: 'experience',
      subtitle: 'Professional journey and key achievements in Frontend development',
      stats: {
        frontend: 'Years in frontend',
        blender: 'Years 3D/Blender',
        photography: 'Years photography',
        total: 'Years total experience'
      },
      items: [
        { 
          title: 'Frontend Developer (Independent Projects)', 
          time: '2024—2025', 
          desc: 'React/TS, TMDB app, e-commerce widgets, React Three Fiber, 3D interactive scenes.',
          icon: 'DEV',
          skills: ['React', 'TypeScript', 'Next.js', 'R3F', 'Blender']
        },
        { 
          title: '3D Artist & Blender Developer', 
          time: '2022—2024', 
          desc: '3D modeling, texturing, animation in Blender. Creating GLTF models for web, optimization for React Three Fiber.',
          icon: 'UI',
          skills: ['Blender', 'GLTF', '3D Modeling', 'Animation', 'Texturing']
        },
        { 
          title: 'Stock Photographer & Content Creator', 
          time: '2017—2023', 
          desc: 'Professional photography for stock agencies. Creating high-quality content, working with lighting, composition.',
          icon: 'PHOTO',
          skills: ['Photography', 'Lightroom', 'Photoshop', 'Stock Content', 'Visual Design']
        },
        { 
          title: 'Design Engineer (Hal-Kran)', 
          time: 'until 2016', 
          desc: 'Lviv Polytechnic, engineering systems. Design and calculation of technical solutions.',
          icon: 'SYS',
          skills: ['Engineering', 'CAD', 'Technical Design', 'Project Management']
        }
      ]
    },

    // Projects Section
    projects: {
      badge: 'Portfolio',
      title: 'My',
      titleHighlight: 'projects',
      subtitle: 'Selected works demonstrating my skills and development approach',
      viewProject: 'View Project',
      viewCode: 'View Code',
      viewDemo: 'View Demo',
      liveDemo: 'Live Demo',
      githubProfile: 'GitHub Profile →',
      viewAllProjects: 'View All Projects on GitHub',
      completed: 'Completed',
      inProgress: 'In Progress',
      demoAvailable: 'Demo Available'
    },

    // FAQ Section
    faq: {
      badge: 'Questions',
      title: 'Frequently Asked',
      titleHighlight: 'Questions',
      subtitle: 'Answers to the most common questions about collaboration and technologies',
      items: [
        { 
          q: 'What technologies do I use?', 
          a: 'Core stack: React, JavaScript/TypeScript, Tailwind CSS. Experience with Next.js, Vite, Git/GitHub. Working with REST APIs, learning Three.js for 3D elements. Constantly developing and mastering new tools.' 
        },
        { 
          q: 'Collaboration format and availability?', 
          a: 'Working remotely from Ukraine (GMT+2). Looking for Junior/Middle positions to gain commercial experience. Communicating via Telegram, Discord, email. Active during business hours, ready for flexible schedule.' 
        },
        { 
          q: 'How can I help your project?', 
          a: 'Developing frontend apps from scratch, creating responsive interfaces, integrating APIs. Building clean components, following modern practices. Can add interactive elements and animations.' 
        },
        { 
          q: 'How long does development take?', 
          a: 'Landing page: 1-2 weeks. SPA app: 3-4 weeks. Complex projects: 1-2 months. Give realistic estimates after task analysis. Working iteratively with regular demos and feedback.' 
        },
        { 
          q: 'How is the development process organized?', 
          a: 'First analyze requirements, create work plan. Break down into 1-2 week stages. Use Git, write clear code, document changes. Regularly show progress and get feedback.' 
        },
        { 
          q: 'Do I provide support after launch?', 
          a: 'Yes! Provide documentation and instructions. Fix critical bugs for free within a month. Can agree on long-term support and project development.' 
        },
        { 
          q: 'Experience with mobile development?', 
          a: 'Creating responsive web apps with Mobile-First approach. Experience with PWA - offline mode, fast loading. Ready to learn React Native for mobile apps if needed.' 
        },
        { 
          q: 'Cost and payment terms?', 
          a: 'Hourly rate: $10-20/hour depending on complexity. For full projects we discuss fixed price. Payment in parts or after stages. Provide discounts for students and startups.' 
        }
      ]
    },

    // Contact Section
    contact: {
      badge: 'Contact',
      title: 'Let\'s',
      titleHighlight: 'Create',
      titleEnd: 'Together',
      subtitle: 'Frontend Developer with experience in React, TypeScript and modern web technologies. Open to new projects and collaboration.',
      infoTitle: 'Contact Information',
      formTitle: 'Discuss Project',
      formDescription: 'Fill out the form and I\'ll get back to you soon to discuss your project details.',
      methods: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        timezone: 'Time Zone'
      },
      projectDiscussion: 'Discuss Project',
      formDescription: 'Fill out the form and I\'ll get back to you soon to discuss your project details.',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'email@example.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project: app type, technologies, timeline, budget... The more details, the more accurate I can assess collaboration possibilities.',
        submit: 'Send Message',
        submitting: 'Sending...',
        required: 'required',
        errors: {
          nameRequired: 'Name is required',
          nameMinLength: 'Name must be at least 2 characters',
          emailRequired: 'Email is required',
          emailInvalid: 'Please enter a valid email',
          messageRequired: 'Message is required',
          messageMinLength: 'Message must be at least 10 characters'
        },
        success: 'Message sent successfully! Thank you for reaching out. I\'ll respond within 24 hours.',
        error: 'An error occurred. Please try again or write directly to email.'
      },
      contactMethods: {
        email: 'Email',
        phone: 'Phone',
        telegram: 'Telegram',
        github: 'GitHub',
        location: 'Location',
        timezone: 'Timezone'
      },
      availability: {
        available: 'Available for work',
        responseTime: 'Response within',
        hours: '2-4 hours',
        schedule: 'Mon-Fri: 9:00-18:00 (UTC+2) • Weekends: by appointment'
      },
      location: 'Chernivtsi, Ukraine'
    },

    // Footer
    footer: {
      copyright: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use'
    },

    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      retry: 'Try Again',
      close: 'Close',
      language: 'Language',
      ukrainian: 'Українська',
      english: 'English',
      playVideo: 'Play Video'
    }
  }
}
