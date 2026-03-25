import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Utensils, 
  Castle, 
  Palette, 
  Check, 
  ArrowRight, 
  MessageSquare,
  Instagram,
  MapPin,
  Share2,
  Star
} from 'lucide-react';
import ThreeBackground from './components/ThreeBackground';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <ThreeBackground />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-stone-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className={`text-2xl font-headline italic transition-colors duration-500 ${
            isScrolled ? 'text-stone-900' : 'text-white'
          }`}>
            The Modern Heirloom
          </div>
          
          <div className="hidden md:flex gap-12">
            {['Rooms', 'Weddings', 'Catering', 'Packages'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-headline text-sm tracking-[0.1em] uppercase transition-colors duration-500 ${
                  isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/80 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="silk-gradient text-on-primary px-8 py-3 font-label text-xs tracking-widest uppercase rounded-DEFAULT hover:opacity-90 transition-all active:scale-95">
              Book Now
            </button>
            <button 
              className="md:hidden text-stone-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {['Rooms', 'Weddings', 'Catering', 'Packages'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-headline text-2xl italic text-stone-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <header className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeg5Ml1LRXCi0jpEf6B4pT6xrop643VOe6fP6WLjoxO0CyNsK9byTk5PRd2ovoNc4k0BSLz3XF16j-hjnmbi58Kt0mLKe6DpFtQhjRCcK2nGHqsaOTXt_SWL7Xs0wqv8vENhrg0SA-zWkiPR3ysDPaau6T7YFhHzh79wvNTr25wgsD7VwRHSu8v5UgDGI2ONNxdwUmLAs0ZWBRr3nTUqby-j3GV6pv6nvn2jIHbHmTpb9OjdSm8wGe68aFOG8MAA20AuSbBGR4Av0" 
              alt="Grand Ballroom" 
              className="w-full h-full object-cover brightness-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-900/20"></div>
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-label text-sm tracking-[0.4em] uppercase text-primary-container mb-6 block"
            >
              Established 1894
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-headline text-5xl md:text-8xl text-white mb-8 leading-tight tracking-tight"
            >
              Eternal Echoes: <br />
              <span className="italic font-normal">Your Legacy Begins</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-12"
            >
              Crafting bespoke celebrations that bridge the gap between historic grandeur and modern sophistication.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <button className="silk-gradient text-on-primary px-12 py-5 font-label text-sm tracking-widest uppercase rounded-DEFAULT editorial-shadow hover:scale-105 transition-all">
                Stay With Us
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 font-label text-sm tracking-widest uppercase rounded-DEFAULT hover:bg-white hover:text-stone-900 transition-all">
                Plan Your Wedding
              </button>
            </motion.div>
          </div>
        </header>

        {/* Featured Package */}
        <section id="packages" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7 relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbdNOw6v8exIfG7m9nbgLPYxBSv8FFoogzpRLVeRYBhJDMOd-AbOjM6mfXyOX95RtQ78dvYR_umZYjCJebjhmdy3gWiIeJ9zB_SoRJ4yMSkZcsz63P-jcbmvOTU6NKx35_Ua5mjrkcQfpwSbPWaOuxLa3kR8tmiJKoIyTSlDKepMsLK8DwGmiN6ndaWaufqHjwtyrQ7sRxfiEhjO4shP3I5NQPBvfps0RtmPJts72NaqSpjEH1v4OIHBN3PJ7xUPgQtc7ekVvZGvU" 
                  alt="Grand Celebration Hall" 
                  className="w-full aspect-[4/5] object-cover rounded-sm editorial-shadow"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -right-10 bg-surface-container-lowest p-10 shadow-2xl max-w-sm hidden lg:block">
                  <span className="font-label text-xs tracking-[0.2em] uppercase text-primary mb-3 block">Premium Experience</span>
                  <h3 className="font-headline text-3xl mb-4 italic">Grand Celebration</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-8">A symphony of scale and intimacy for up to 300 guests in our heritage ballroom.</p>
                  <span className="font-headline text-2xl text-primary">From $45,000</span>
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-5 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-label text-xs tracking-[0.2em] uppercase text-secondary mb-4 block">The Flagship Package</span>
                <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">Grand Celebration</h2>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Utensils className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Catering</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Six-course degustation menu curated by our Michelin-starred chef.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Castle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Venue</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Exclusive 48-hour buyout of the Grand Ballroom and Conservatory.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Palette className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Decor</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Bespoke floral architecture and custom silk draping throughout.</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full border border-outline-variant py-5 px-8 font-label text-xs tracking-[0.2em] uppercase hover:bg-surface-container-high transition-colors rounded-DEFAULT">
                  Request Full Prospectus
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bento Grid Packages */}
        <section className="py-32 bg-surface-container-low px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Intimate Vow */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface-container-lowest p-10 flex flex-col justify-between group editorial-shadow rounded-sm"
              >
                <div>
                  <div className="mb-10 overflow-hidden rounded-sm">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfGkEX8cW60C8wsmRmxWkkq_kvgqu3AS7UtTrxzsCbgpiUr-28GC2fBkxmlEc004NJ8Dx-vFocmTUiYe426JC4ENk4NOgcUmCpGjIOC6H4zH7qy2fbpxtS4aSMPGw5W6jETUkGUTjOBly2RD9ajutYsP3ubWSs3ROEb3bSrkrGunpc7s34VMtJZFaUEOhMJXKmCJhtpIt83QHR5uVQlUWPlz7mz_HAhwhnOvAQQBaFM2Nool9lPq3Z0aPYVp2dBVum7Haw4uK3H58" 
                      alt="Intimate Vow" 
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="font-label text-xs tracking-[0.2em] uppercase text-primary mb-3 block">For the Few</span>
                  <h3 className="font-headline text-4xl mb-6 italic">The Intimate Vow</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-10">Designed for gatherings of up to 40 people. Private garden ceremony followed by a candlelight terrace dinner.</p>
                  <ul className="space-y-4 text-sm text-on-surface-variant mb-12">
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary" /> Personal Wedding Concierge
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary" /> Artisan Cake Design
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary" /> Live String Trio (2 Hours)
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-10 border-t border-outline-variant/20">
                  <span className="font-headline text-2xl text-on-surface">From $12,500</span>
                  <button className="text-primary font-label text-xs tracking-widest uppercase flex items-center gap-3 group-hover:gap-5 transition-all">
                    Inquire Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              {/* Pre-wedding Romance */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-surface-container p-10 flex flex-col justify-between group editorial-shadow rounded-sm"
              >
                <div>
                  <div className="mb-10 overflow-hidden rounded-sm">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz-03DJZL9s1mb835GqW_mBqOo17sM5JTtusHojnkcMO3KUkhs03TeL-by8baJUloxYBs9kldYMO86IYaRxAmBK5_aLrLZnipw54byUMXi4SNC0XAYrGOwS0IuWJGuoRtxFVaB8tve_G736P-oL5Ni1lVx4U67YMDyDbf0uP_Lfa25gKVH01YjiwoZ78WS_33pzfIeZJlkNN9GHf9KQ8aTlqaYpzoObVF4FpnhogdmLs-ajSz4eUHZtrZqMytPfrmibUiarTlD6V8" 
                      alt="Pre-wedding Romance" 
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="font-label text-xs tracking-[0.2em] uppercase text-secondary mb-3 block">The Prequel</span>
                  <h3 className="font-headline text-4xl mb-6 italic">Pre-wedding Romance</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-10">A curated three-day retreat focusing on portraiture and relaxation before the main event.</p>
                  <ul className="space-y-4 text-sm text-on-surface-variant mb-12">
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-secondary" /> Fine-art Photography Session
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-secondary" /> Couples Spa & Wellness Journey
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-secondary" /> Private Estate Exploration
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-10 border-t border-outline-variant/20">
                  <span className="font-headline text-2xl text-on-surface">From $8,200</span>
                  <button className="text-secondary font-label text-xs tracking-widest uppercase flex items-center gap-3 group-hover:gap-5 transition-all">
                    Inquire Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-32 px-6 bg-surface">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <h3 className="font-headline text-3xl md:text-5xl italic leading-relaxed text-on-surface mb-12">
              "The Modern Heirloom didn't just host our wedding; they breathed life into our vision. Every staff member treated us like royalty, and the attention to detail was breathtaking."
            </h3>
            <div className="space-y-2">
              <p className="font-label text-sm tracking-[0.3em] uppercase font-bold text-on-surface">— Eleonora & Julian —</p>
              <p className="text-xs tracking-[0.2em] text-primary uppercase">October 2023 Ceremony</p>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="py-32 px-6 bg-surface-container-low">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-primary mb-6 block">Personalization</span>
            <h2 className="font-headline text-4xl md:text-5xl mb-16 italic">Let us weave your story into a reality that transcends time.</h2>
            
            <form className="space-y-10 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    className="block w-full px-0 py-3 border-0 border-b border-outline bg-transparent focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder-transparent peer"
                    placeholder="Full Name"
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-0 -top-4 text-xs text-outline-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-outline peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-xs font-label uppercase tracking-widest"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    className="block w-full px-0 py-3 border-0 border-b border-outline bg-transparent focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder-transparent peer"
                    placeholder="Email Address"
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-0 -top-4 text-xs text-outline-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-outline peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-xs font-label uppercase tracking-widest"
                  >
                    Email Address
                  </label>
                </div>
              </div>
              
              <div className="relative group">
                <select 
                  id="package"
                  className="block w-full px-0 py-3 border-0 border-b border-outline bg-transparent focus:ring-0 focus:border-primary transition-colors text-on-surface font-label uppercase tracking-wider text-sm appearance-none"
                >
                  <option value="">Select Your Vision</option>
                  <option value="grand">The Grand Celebration</option>
                  <option value="intimate">The Intimate Vow</option>
                  <option value="romance">Pre-wedding Romance</option>
                </select>
                <label 
                  htmlFor="package"
                  className="absolute left-0 -top-4 text-xs text-primary font-label uppercase tracking-widest"
                >
                  Desired Package
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  id="message"
                  rows={4}
                  className="block w-full px-0 py-3 border-0 border-b border-outline bg-transparent focus:ring-0 focus:border-primary transition-colors text-on-surface placeholder-transparent peer resize-none"
                  placeholder="Your Vision"
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-0 -top-4 text-xs text-outline-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-outline peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-xs font-label uppercase tracking-widest"
                >
                  Initial Vision & Notes
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full silk-gradient py-6 text-on-primary font-label text-sm tracking-[0.3em] uppercase rounded-DEFAULT shadow-lg hover:opacity-90 transition-all active:scale-[0.98]"
              >
                Request Private Consultation
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Floating Concierge */}
      <div className="fixed bottom-10 right-10 z-[60]">
        <button className="bg-white dark:bg-stone-900 shadow-2xl rounded-full p-5 hover:scale-110 transition-transform duration-300 active:scale-90 flex items-center gap-4 pr-8">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div className="text-left">
            <div className="font-headline text-sm font-bold text-stone-900">Personal Concierge</div>
            <div className="text-[10px] uppercase tracking-widest text-stone-500 font-label">Exquisite Service</div>
          </div>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-stone-100 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
            <div className="font-headline text-2xl italic text-stone-900 mb-8">The Modern Heirloom</div>
            <p className="font-body text-sm text-stone-500 leading-relaxed max-w-[240px]">
              Preserving moments into legacies through impeccable design and service since 1894.
            </p>
          </div>
          
          <div>
            <h5 className="font-label text-xs tracking-widest uppercase text-primary mb-8">Discovery</h5>
            <ul className="space-y-4">
              {['Rooms', 'Weddings', 'Catering', 'Wellness'].map(item => (
                <li key={item}>
                  <a href="#" className="font-label text-xs tracking-widest uppercase text-stone-500 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-label text-xs tracking-widest uppercase text-primary mb-8">Concierge</h5>
            <ul className="space-y-4">
              {['Contact', 'Newsletter', 'Privacy', 'Terms'].map(item => (
                <li key={item}>
                  <a href="#" className="font-label text-xs tracking-widest uppercase text-stone-500 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="font-label text-xs tracking-widest uppercase text-primary mb-8">Connect</h5>
            <div className="flex gap-6">
              <Instagram className="w-5 h-5 text-stone-400 cursor-pointer hover:text-primary transition-colors" />
              <MapPin className="w-5 h-5 text-stone-400 cursor-pointer hover:text-primary transition-colors" />
              <Share2 className="w-5 h-5 text-stone-400 cursor-pointer hover:text-primary transition-colors" />
            </div>
            <p className="text-xs tracking-widest text-stone-400 uppercase">
              © 2024 The Modern Heirloom. <br /> All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
