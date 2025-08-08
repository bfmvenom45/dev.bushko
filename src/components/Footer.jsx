export default function Footer(){
  return (
    <footer className="relative bg-slate-900 border-t border-slate-700">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-b from-cyan-500/5 to-transparent blur-xl"></div>
      
      <div className="container relative z-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl border border-cyan-500/30">
                <span className="font-black text-lg bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Олександр Бушко
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Всі права захищені
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { name: 'GitHub', icon: 'GIT', href: 'https://github.com/bfmvenom45' },
              { name: 'Telegram', icon: 'TG', href: 'https://t.me/sanyabushko' },
              { name: 'Phone', icon: '�', href: 'tel:+380988609743' },
              { name: 'Email', icon: 'MAIL', href: 'mailto:sanya.bushko@gmail.com' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.name === 'Email' || social.name === 'Phone' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-xl bg-slate-800 border border-slate-600 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-xl group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Політика конфіденційності
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Умови використання
            </a>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-8 flex justify-center">
          <div className="w-64 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        </div>
      </div>
    </footer>
  )
}
