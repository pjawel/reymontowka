import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { 
  Phone, 
  MapPin, 
  Facebook, 
  Calendar, 
  Users, 
  Music, 
  Heart,
  ChevronRight,
  Star,
  Quote,
  Menu,
  X
} from "lucide-react";

const IMAGES = [
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/493018248_1199525738634841_9120058841316556812_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=dw90g20Us8UQ7kNvwHcGezH&_nc_oc=AdoNX0haJ7n0qR24-wCf2mqvHU9npFpqWfcihiIGnPxRXxR1yoEPclxlcekff-2pV6Q&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=jY-zZBNTddwIyIRfA17bqw&_nc_ss=7a3a8&oh=00_Af2kMWENYkg27sI60ZeVxQVMGqS8E0qpY6aFnhZq5RyLjA&oe=69EE53ED",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/494988308_1199525718634843_5272149566499113597_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=QQVLcrjpwjEQ7kNvwHsbIVS&_nc_oc=AdoJ9gMHj3j20kj_hJ8EKvWrftJW8cz_8JXoMiIgq8VZ3EWkjX-eE1vhJMkuOd723DU&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=26kxLUe17dqLdhupa-hPtA&_nc_ss=7a3a8&oh=00_Af0Pmd_Vyn_DwJ6lX1V8CQY3fbgC4mXnqk73E4R52lmGOQ&oe=69EE6E19",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/494194592_1199525908634824_6083051558304619387_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=kp0XsooYxAgQ7kNvwGum9Fp&_nc_oc=AdrKWQDtGbNCSkLs_CZU-7TuxZoZfmx0GWHNDzc8kzRl-rTRjq1u3aVSkRHS2foATbA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=0C6XAM88WHfquF6vE6nqDA&_nc_ss=7a3a8&oh=00_Af3CkA3Xyj8sC_1Qz5cSOKiJdnuqEfuyKiwpit9WtKUx8Q&oe=69EE59A9",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/492469604_1192168209370594_8105528032951588434_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=NaHLfALDTGEQ7kNvwFwkYKK&_nc_oc=Adqn4WLpXUh4--_VX9JH_zxLf4yEdHWZai7A4PCSGTBU303AYoESh9x0Epz2a4P15qE&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=EnUAOeAvs5UiJjjoQxDVfg&_nc_ss=7a3a8&oh=00_Af20WGpHYOtzTitMSC7Z_PTh7QIoXYOgQkTxuz-E2aiO2g&oe=69EE6F10",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/494090280_1192168139370601_2941658844389627832_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=c3r0zejlzJ0Q7kNvwGCblRc&_nc_oc=Adpub1ejBbgy6Yfp1oVp4YJpZDagQQ24oy7M-8MapuqjChwzU4tfHoVEAc3uMhek7kc&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=_jzEJj2y_RLlHxds_jrrvQ&_nc_ss=7a3a8&oh=00_Af1P9z2mT3gDFGMSLfQ1hZXDyDWfjq-W6kpEjltZbgCu9Q&oe=69EE6CC2",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/485955142_1162304212356994_9164481647076973941_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=0Ja0B8WG90EQ7kNvwEQuKVC&_nc_oc=AdqKMe_PgoMnWzAaIvk_uzPWatiWJ4A2WuwdglcSbhw3qUs6ZWK4g9hfZ2t58Uec5V8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=gR6Gq1QzSw2FHMwBOF55FQ&_nc_ss=7a3a8&oh=00_Af0up3F_VHbzXk0_17e3QpKbCYS2RS9vDm-KYJzr2RNPew&oe=69EE630B",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/485413648_1162304392356976_6620603728284122183_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=eBGJbqM8qigQ7kNvwHMoQiU&_nc_oc=AdqVI5iQTLUE4LdHBpdGc0G3f2qxKmOJWgpvl_MUw5rtYp1J-xJJ_V_Cib5dW0JApw4&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=hIiy_F0t2idTg5z2NxH8QA&_nc_ss=7a3a8&oh=00_Af3m1CzKR8M3wIblX2FlDbWQKshpgcNqFDCEzzcq4q1F1w&oe=69EE5252",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/485293339_1160774199176662_825949027237920952_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=wXH1lNkCMUcQ7kNvwHH--Ka&_nc_oc=AdoOK0Ju2ziufRg_9R8hDhLoFd4sQD9okAVcoGq88bEniepba6lJX_9K84x4zhIHG6I&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=_AbZas2DhDsKgk4rI4xcZA&_nc_ss=7a3a8&oh=00_Af1FEJWukA43nI-xFxXlmNz_cNp7p1aFToxr1SR5-dZAAg&oe=69EE5ADC",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/484947634_1160773815843367_749444376637511720_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=BQctC8LtnsIQ7kNvwGQAT8G&_nc_oc=AdqV2RQaWJd0OmEw-4W7dlQYCe4nZNwjfhSFQKSi1qEf-K0v9Y_lnvk1R0M_bS-SjA0&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=1FbTgnF6pZwqftExoI_wrg&_nc_ss=7a3a8&oh=00_Af3iph_okl58fkxBGzKsRtjH20RQvGG0pId61NNqbjHf-g&oe=69EE6279",
];

const REELS = [
  "691568974043555",
  "1174339308105437",
  "2123420904850159"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const navLinks = [
    { name: "Galeria", href: "#galeria" },
    { name: "Filmy", href: "#filmy" },
    { name: "Opinie", href: "#opinie" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text-p selection:bg-brand-accent/30">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-brand-bg/90 backdrop-blur-md border-b border-brand-line">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-serif font-medium tracking-tight text-brand-accent">Reymontówka</h1>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-brand-text-s md:flex">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className={`hover:text-brand-accent transition-colors ${link.name === 'Kontakt' ? 'border border-brand-accent/50 px-4 py-2 rounded-sm' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block text-right text-[10px] uppercase tracking-widest text-brand-text-s">
              Zadzwoń: <span className="text-brand-accent block text-sm font-bold">605 309 267</span>
            </div>
            <a 
              href="https://www.facebook.com/reymontowka" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="hidden sm:flex rounded-sm bg-brand-accent p-2 text-brand-bg hover:opacity-90 transition-all shadow-lg"
            >
              <Facebook size={20} />
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-brand-accent p-2 hover:bg-brand-line rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-brand-bg border-b border-brand-line overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-serif italic text-brand-text-p hover:text-brand-accent transition-colors border-b border-brand-line pb-4"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-text-s mb-1">Zadzwoń do nas</p>
                    <a href="tel:605309267" className="text-xl font-bold text-brand-accent">605 309 267</a>
                  </div>
                  <a 
                    href="https://www.facebook.com/reymontowka" 
                    target="_blank" 
                    referrerPolicy="no-referrer"
                    className="rounded-sm bg-brand-accent p-3 text-brand-bg"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative flex h-[95vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES[0]} 
            alt="Sala Weselna" 
            className="h-full w-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/0 via-brand-bg/20 to-brand-bg"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5 }}
            className="mb-6 inline-block py-1 px-4 border-y border-brand-accent/30 text-[11px] uppercase text-brand-accent tracking-[0.5em]"
          >
            Lipce Reymontowskie
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif text-5xl font-light italic tracking-tight md:text-8xl lg:text-9xl mb-8 leading-tight"
          >
            Twoje wyjątkowe wesele
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-brand-text-s text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
          >
            Sala bankietowa Reymontówka to połączenie elegancji, doskonałej kuchni i profesjonalnej obsługi. Tworzymy wspomnienia, które zostają na całe życie.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <a href="#kontakt" className="rounded-sm bg-brand-accent px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-bg hover:scale-105 transition-all shadow-2xl">
              Zarezerwuj Termin
            </a>
            <a href="tel:605309267" className="group flex items-center gap-3 text-sm font-medium tracking-widest text-brand-text-p hover:text-brand-accent transition-all">
              <Phone size={18} className="text-brand-accent" /> 605 309 267
            </a>
          </motion.div>
        </div>
      </header>

      {/* Grid Features */}
      <section className="py-32 px-6 border-y border-brand-line bg-brand-card">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px bg-brand-line sm:grid-cols-2 lg:grid-cols-4">
            <motion.div {...fadeIn} className="bg-brand-card p-12 text-center group hover:bg-brand-bg transition-colors duration-500">
              <Users className="mx-auto mb-8 text-brand-accent opacity-50 group-hover:opacity-100 transition-opacity" size={40} strokeWidth={1} />
              <h3 className="mb-4 font-serif text-xl tracking-wide">Duża Pojemność</h3>
              <p className="text-brand-text-s text-sm leading-relaxed font-light">Ekskluzywna przestrzeń zaprojektowana dla Twojej wygody.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-brand-card p-12 text-center group hover:bg-brand-bg transition-colors duration-500">
              <Music className="mx-auto mb-8 text-brand-accent opacity-50 group-hover:opacity-100 transition-opacity" size={40} strokeWidth={1} />
              <h3 className="mb-4 font-serif text-xl tracking-wide">Doskonała Akustyka</h3>
              <p className="text-brand-text-s text-sm leading-relaxed font-light">Najwyższej jakości brzmienie dla niezapomnianej zabawy.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-brand-card p-12 text-center group hover:bg-brand-bg transition-colors duration-500">
              <Calendar className="mx-auto mb-8 text-brand-accent opacity-50 group-hover:opacity-100 transition-opacity" size={40} strokeWidth={1} />
              <h3 className="mb-4 font-serif text-xl tracking-wide">Planowanie</h3>
              <p className="text-brand-text-s text-sm leading-relaxed font-light">Profesjonalne wsparcie na każdym etapie organizacji.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="bg-brand-card p-12 text-center group hover:bg-brand-bg transition-colors duration-500">
              <Heart className="mx-auto mb-8 text-brand-accent opacity-50 group-hover:opacity-100 transition-opacity" size={40} strokeWidth={1} />
              <h3 className="mb-4 font-serif text-xl tracking-wide">Atmosfera</h3>
              <p className="text-brand-text-s text-sm leading-relaxed font-light">Detale, które tworzą unikalny charakter uroczystości.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="mb-20 text-center">
            <span className="text-brand-accent text-[10px] uppercase tracking-[0.4em] mb-4 block">Esencja stylu</span>
            <h2 className="font-serif text-4xl font-light italic md:text-6xl text-brand-text-p">Wnętrza Reymontówki</h2>
            <div className="mx-auto mt-8 h-px w-32 bg-brand-accent/40"></div>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1 }}
                className="group relative aspect-[4/5] overflow-hidden bg-brand-card border border-brand-line"
              >
                <img 
                  src={img} 
                  alt={`Galeria ${idx + 1}`} 
                  className="h-full w-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-bg/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                   <div className="h-px w-full bg-brand-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Content */}
      <section id="filmy" className="py-32 px-6 border-t border-brand-line bg-brand-card/30">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start">
            <div className="w-full lg:w-1/3">
              <motion.div {...fadeIn} className="sticky top-32">
                <span className="text-brand-accent text-[10px] uppercase tracking-[0.4em] mb-4 block">Filmowe relacje</span>
                <h2 className="font-serif text-4xl font-light italic md:text-5xl text-brand-text-p mb-8 tracking-tight">Poczuj tę energię</h2>
                <p className="text-brand-text-s font-light leading-relaxed mb-8">Uchwycone momenty, które najlepiej oddają klimat zabawy w naszej sali. Zapraszamy do obejrzenia krótkich relacji wideo.</p>
                <div className="h-px w-20 bg-brand-accent/40 mb-8"></div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                    <Music size={16} />
                  </div>
                  <div className="h-10 w-10 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                    <Heart size={16} />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-2/3 grid gap-8 sm:grid-cols-2">
              {REELS.slice(0, 2).map((reelId, idx) => (
                <motion.div 
                  key={reelId}
                  {...fadeIn}
                  transition={{ delay: idx * 0.2 }}
                  className="w-full aspect-[9/16] overflow-hidden shadow-2xl bg-black border border-brand-line grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                >
                  <iframe 
                    src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/${reelId}/&show_text=0&t=0`} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 'none', overflow: 'hidden' }} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    referrerPolicy="no-referrer"
                  ></iframe>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews - Horizontal */}
      <section id="opinie" className="py-24 border-y border-brand-line bg-brand-bg">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 border-l-2 border-brand-accent pl-10">
            <Quote className="text-brand-accent/30 mb-6" size={48} />
            <p className="text-xl italic font-light leading-relaxed text-brand-text-s">
              "Najlepsza sala w okolicy! Jedzenie wyśmienite, a obsługa na najwyższym poziomie. Organizacja wesela przerosła nasze oczekiwania."
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-brand-accent font-bold">Anna i Tomek &bull; Lipiec 2024</p>
          </div>
          <a 
            href="https://www.facebook.com/reymontowka/reviews/?id=100057322785776&sk=reviews" 
            target="_blank" 
            className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent hover:opacity-70 transition-all flex items-center gap-4 whitespace-nowrap"
          >
            Zobacz wszystkie opinie <ChevronRight size={16} />
          </a>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="kontakt" className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px bg-brand-line lg:grid-cols-2 border border-brand-line overflow-hidden">
            <div className="bg-brand-bg p-12 lg:p-20">
              <h2 className="font-serif text-4xl font-light italic md:text-5xl text-brand-text-p mb-12">Kontakt</h2>
              
              <div className="space-y-12">
                <div className="group">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-4 group-hover:translate-x-2 transition-transform">Lokalizacja</h4>
                  <p className="text-xl font-light text-brand-text-p">Targowa 2, 96-127<br />Lipce Reymontowskie</p>
                </div>

                <div className="group">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-4 group-hover:translate-x-2 transition-transform">Telefon</h4>
                  <a href="tel:605309267" className="text-3xl font-serif text-brand-text-p hover:text-brand-accent transition-colors">605 309 267</a>
                </div>

                <div className="group">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mb-4 group-hover:translate-x-2 transition-transform">Online</h4>
                  <a href="https://www.facebook.com/reymontowka" target="_blank" className="text-sm font-medium tracking-widest text-brand-text-s hover:text-brand-text-p transition-colors flex items-center gap-2">
                    <Facebook size={14} /> facebook.com/reymontowka
                  </a>
                </div>
              </div>
            </div>

            <div className="h-[500px] lg:h-auto bg-brand-card">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.7362566844818!2d19.941949012853055!3d51.90227707178856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bd9a2b34906a9%3A0x732626af674e67b2!2sSala%20Bankietowa%20Reymont%C3%B3wka!5e0!3m2!1spl!2spl!4v1776849170390!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-bg border-t border-brand-line text-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-2xl font-serif text-brand-accent/50 mb-6 uppercase tracking-widest">Reymontówka</div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-brand-text-s">
            © {new Date().getFullYear()} Sala Weselna Reymontówka.
          </p>
        </div>
      </footer>
    </div>
  );
}
