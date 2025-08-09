# Portfolio - dev.bushko

Modern, responsive portfolio website built with React and cutting-edge web technologies.

## 🚀 Features

- **Modern React Architecture** - Built with React 18, Vite, and modern hooks
- **Responsive Design** - Optimized for all device sizes
- **Interactive Animations** - Smooth scroll animations and hover effects  
- **Functional Contact Form** - Integrated with Formspree for email delivery
- **Optimized Media** - WebP images and optimized video backgrounds
- **Performance Focused** - Lazy loading, code splitting, and optimized bundles
- **Multilingual Support** - Ukrainian interface with professional content

## 🛠 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: CSS transitions and transforms
- **Forms**: Formspree integration
- **Deployment**: Ready for Vercel, Netlify, GitHub Pages
- **Media**: Optimized WebP images, MP4/WebM videos

## 📁 Project Structure

```
portfolio-react/
├── public/
│   ├── images/
│   │   ├── optimized/          # WebP optimized images
│   │   └── images/             # Original images
│   └── video/
│       ├── optimized/          # Optimized video files
│       └── *.mp4               # Original videos
├── src/
│   ├── components/             # React components
│   │   ├── Contact.jsx         # Contact form with Formspree
│   │   ├── Hero.jsx           # Landing section
│   │   ├── Projects.jsx       # Portfolio projects
│   │   ├── Experience.jsx     # Work experience
│   │   └── ...
│   ├── data/                  # Static data files
│   ├── hooks/                 # Custom React hooks
│   └── utils/                 # Helper functions
└── README.md
```

## 🎯 Key Sections

1. **Hero** - Interactive landing with video background
2. **About** - Professional introduction and skills
3. **Experience** - Work history and achievements  
4. **Projects** - Portfolio showcase with live demos
5. **Tech Stack** - Technologies and tools
6. **Contact** - Functional contact form and information

## 📋 Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/bfmvenom45/portfolio-react.git
cd portfolio-react
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure contact form** (Optional)
   - Visit [Formspree.io](https://formspree.io/)
   - Create account and get your Form ID
   - Update `FORMSPREE_URL` in `src/components/Contact.jsx`

4. **Start development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Custom domain support

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
1. Build project: `npm run build`
2. Push `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📧 Contact Form Setup

The contact form uses Formspree for email delivery:

1. **Create Formspree Account**: [formspree.io](https://formspree.io/)
2. **Get Form ID**: Create new form and copy the ID
3. **Update Contact Component**: Replace `YOUR_FORM_ID` in `Contact.jsx`

Alternative options:
- **Netlify Forms**: Built-in form handling for Netlify deployments
- **EmailJS**: Client-side email service
- **Custom Backend**: Node.js/Express with email service

## 🎨 Customization

### Updating Personal Information
- **Contact Details**: Update `contactMethods` array in `Contact.jsx`
- **Personal Info**: Modify content in respective components
- **Projects**: Update `projects.js` with your portfolio items
- **Experience**: Update experience data in `Experience.jsx`

### Styling
- **Colors**: Modify Tailwind CSS classes
- **Animations**: Adjust transition durations and effects
- **Layout**: Responsive breakpoints and grid layouts

### Images & Media
- **Images**: Add to `public/images/` directory
- **Optimization**: Use `optimize-media.sh` script for WebP conversion
- **Videos**: Add to `public/video/` for background elements

## 📈 Performance Features

- **Image Optimization**: WebP format with fallbacks
- **Lazy Loading**: Components load as needed
- **Code Splitting**: Optimized bundle sizes
- **Responsive Images**: Multiple sizes for different devices
- **Video Optimization**: Compressed video backgrounds

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `optimize-media.sh` - Optimize images and videos

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement for older browsers

## 🤝 Contributing

Feel free to fork this project and adapt it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**dev.bushko**
- 📧 Email: [dev.bushko@gmail.com](mailto:dev.bushko@gmail.com)
- 💬 Telegram: [@sanya.bushko](https://t.me/sanya.bushko)
- 🐙 GitHub: [bfmvenom45](https://github.com/bfmvenom45)
- 📱 Phone: +380 98 860 97 43
- 📍 Location: Chernivtsi, Ukraine

---

⭐ **Star this repository if you found it helpful!**
