export default function Contact() {
  return (
    <section 
      id="contact" 
      className="section relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/images/bg-contact.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Main gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-800/90"></div>
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-green-300 uppercase tracking-wider">Зв'язок</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Давайте <span className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">співпрацювати</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Готовий до нових викликів та цікавих проєктів
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="relative">
            <div className="relative p-0.5 rounded-3xl bg-gradient-to-r from-green-500/30 via-cyan-500/30 to-blue-500/30">
              <div className="relative p-8 rounded-3xl bg-slate-900/90 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-8">Контактна інформація</h3>
                
                {/* Contact methods */}
                <div className="space-y-6">
                  {[
                    { 
                      icon: 'MAIL', 
                      label: 'Email', 
                      value: 'sanya.bushko@gmail.com',
                      href: 'mailto:sanya.bushko@gmail.com'
                    },
                    { 
                      icon: '�', 
                      label: 'Телефон', 
                      value: '+380 98 860 97 43',
                      href: 'tel:+380988609743'
                    },
                    { 
                      icon: '�', 
                      label: 'Telegram', 
                      value: '@oleksandrbushko',
                      href: 'https://t.me/sanyabushko'
                    },
                    { 
                      icon: '�', 
                      label: 'GitHub', 
                      value: 'github.com/oleksandrbushko',
                      href: 'https://github.com/bfmvenom45'
                    }
                  ].map((contact, index) => (
                    <div key={index} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center text-2xl">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-400">{contact.label}</div>
                        <a 
                          href={contact.href}
                          className="text-white group-hover:text-cyan-300 transition-colors duration-300 font-medium"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Download resume */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl"></div>
                    <a 
                      href="#" 
                      download
                      className="relative block w-full p-4 bg-slate-800/80 backdrop-blur-sm rounded-xl text-center text-cyan-400 font-semibold border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-slate-700/80"
                    >
                      PDF Завантажити резюме
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="relative">
            <div className="relative p-0.5 rounded-3xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30">
              <div className="relative p-8 rounded-3xl bg-slate-900/90 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-8">Написати повідомлення</h3>
                
                <form onSubmit={(e) => { e.preventDefault(); alert('Дякую! (демо)') }} className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Ім'я *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="Ваше ім'я"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input 
                      type="email"
                      required
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Повідомлення *
                    </label>
                    <textarea 
                      rows="6"
                      required
                      placeholder="Опишіть ваш проєкт або питання..."
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <button 
                      type="submit"
                      className="relative w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300"
                    >
                      Надіслати повідомлення
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
