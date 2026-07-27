"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Calendar, Users, Star, Menu, X, Globe, Mountain, Palmtree, BookOpen, GraduationCap, Award } from 'lucide-react';
import ClientReviews from '../Components/ClientReviews';
import ProcessRoadmap from '../Components/ProcessRoadmap';
import ContactSection from '../Components/ContactSection';
import PilgrimagePackages from '../Components/PilgrimagePackages';
import Footer from '../Components/footer';

export default function TravelAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate tabs every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleTabChange((prev) => (prev + 1) % 2);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeTab]);

  const handleTabChange = (indexOrFn: number | ((prev: number) => number)) => {
    const newIndex = typeof indexOrFn === 'function' ? indexOrFn(activeTab) : indexOrFn;
    if (newIndex === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(newIndex);
      setIsTransitioning(false);
    }, 350);
  };

  const heroSlides = [
    {
      label: "Travel & Pilgrimage",
      icon: <Palmtree className="w-4 h-4 text-orange-600" />,
      badge: "Explore the World",
      headline: ["Your Journey", "Starts Here"],
      description: "Experience a seamless, spiritually uplifting pilgrimage. We provide expert guidance, premium packages, and heartfelt support for your Hajj and Umrah.",
      cta: { label: "Contact Us", href: "https://wa.me/09123734261" },
      secondary: { label: "Watch Video", href: "https://youtu.be/h2a2KGNHlXw?si=IqPxSRcLuvO7Vfox" },
      image: "emiplane.jpeg",
      imageAlt: "Travel",
      stats: [
        { value: "50K+", label: "Happy Travelers" },
        { value: "150+", label: "Destinations" },
        { value: "4.9", label: "Rating" },
      ],
      accentFrom: "from-orange-600",
      accentTo: "to-red-600",
      gradientText: "linear-gradient(135deg, #f97316 0%, #dc2626 100%)",
      blob1: "bg-orange-300",
      blob2: "bg-red-300",
    },
    {
      label: "Education",
      icon: <GraduationCap className="w-4 h-4 text-blue-600" />,
      badge: "Study Abroad",
      headline: ["Give Your Child the", "Study He Deserves"],
      description: "We help students gain admission and secure scholarships in leading international institutions. With personalized counseling and full application support, we turn global education dreams into reality.",
      cta: { label: "Enroll Now", href: "#contact" },
      secondary: { label: "Contact Us", href: "https://wa.me/09123734261"},
      image: "blackstudent.jpeg",
      imageAlt: "Education",
      stats: [
         { value: "2k+", label: "Successful Applicants" },
         { value: "70+", label: "Partner Institutions" },
         { value: "98%", label: "Success Rate" },
      ],
      accentFrom: "from-orange-600",
      accentTo: "to-red-600",
      gradientText: "linear-gradient(135deg, #f97316 0%, #dc2626 100%)",
      blob1: "bg-orange-300",
      blob2: "bg-red-300",
    },
  ];

  const slide = heroSlides[activeTab];

  const destinations = [
    { id: 1, name: "Makkah, Saudi Arabia (Umrah)", image: "umrahimg.jpeg", duration: "15 Days", rating: 5.0 },
    { id: 3, name: "Santorini, Greece", image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop", duration: "7 Days", rating: 4.9 },
    { id: 2, name: "Makkah & Madinah, Saudi Arabia (Hajj)", image: "hajjimg.jpeg", duration: "40 Days", rating: 5.0 },
    { id: 6, name: "Paris, France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop", duration: "10 Days", rating: 4.7 }
  ];

  const features = [
    { icon: <Globe className="w-8 h-8" />, title: "150+ Destinations", desc: "Explore the world with our curated collection" },
    { icon: <Users className="w-8 h-8" />, title: "Expert Guides", desc: "Local professionals for authentic experiences" },
    { icon: <Mountain className="w-8 h-8" />, title: "Adventure Packages", desc: "Thrilling experiences for every traveler" },
    { icon: <Globe className="w-8 h-8" />, title: "Hajj & Umrah Experts", desc: "Decades of experience guiding pilgrims to the holy cities" },
    { icon: <Users className="w-8 h-8" />, title: "Spiritual Guidance", desc: "Scholars and guides to support your religious journey" },
    { icon: <Star className="w-8 h-8" />, title: "Premium Pilgrimage Service", desc: "Comfort, safety, and 24/7 support in Makkah & Madinah" },
    { icon: <Calendar className="w-8 h-8" />, title: "Flexible Packages", desc: "Hajj, Umrah, and custom group packages for all budgets" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        * { box-sizing: border-box; }

        html, body {
          overflow-x: hidden;
          width: 100%;
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
        }

        .font-display { font-family: 'Playfair Display', serif; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes heroSlideIn {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes heroSlideOut {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(-18px) scale(0.98); }
        }
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }

        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }

        .hero-content-enter { animation: heroSlideIn 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        .hero-content-exit { animation: heroSlideOut 0.35s cubic-bezier(0.4,0,1,1) forwards; }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .glass-effect {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .card-hover { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15); }

        .destination-card { position: relative; overflow: hidden; }
        .destination-card::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%);
          z-index: 1;
        }
        .destination-card img { transition: transform 0.6s ease; }
        .destination-card:hover img { transform: scale(1.1); }

        /* Tab pill styles */
        .tab-pill {
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
        }
        .tab-pill-bg {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Progress bar for auto-advance */
        .progress-bar {
          height: 2px;
          border-radius: 2px;
          animation: progressBar 6s linear forwards;
        }

        /* Hero image transition */
        .hero-img-wrap {
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .hero-img-wrap.transitioning {
          opacity: 0;
          transform: scale(0.96) translateX(20px);
        }
        .hero-img-wrap.visible {
          opacity: 1;
          transform: scale(1) translateX(0);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fadeIn block">
              <img src="/logo.png" alt="BilalSADA Logo" className="w-30 h-17 object-contain" />
            </div>

            <div className="hidden md:flex items-center space-x-8 animate-fadeIn delay-200">
              <a href="#home" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Home</a>
              <a href="#destinations" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Destinations</a>
              <a href="#packages" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Packages</a>
              <a href="#about" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
            </div>

            <div className="hidden md:flex items-center space-x-4 animate-fadeIn delay-300">
              <a
                href="https://wa.me/2349123734261?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20trip%20with%20BilalSADA%20Travel%20and%20Tours!"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2.5 bg-gradient-to-r ${slide.accentFrom} ${slide.accentTo} text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center`}
                style={{ transition: 'background 0.4s ease' }}
              >
                Book Now
              </a>
            </div>

            <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 glass-effect rounded-2xl p-4 animate-fadeIn">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Home</a>
                <a href="#destinations" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Destinations</a>
                <a href="#packages" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Packages</a>
                <a href="#" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">About</a>
                <a href="#contact" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
                <a
                  href="https://wa.me/2349123734261?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20trip%20with%20BilalSADA%20Travel%20and%20Tours!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium rounded-full hover:shadow-lg transition-all flex items-center justify-center"
                >
                  Book Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION — TABBED
      ═══════════════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative pt-28 pb-12 px-4 md:px-6 overflow-hidden"
        style={{
          transition: 'background 0.5s ease',
          background: activeTab === 0
            ? 'linear-gradient(135deg, #fff7ed 0%, #fff1f2 100%)'
            : 'linear-gradient(135deg, #eff6ff 0%, #eef2ff 100%)',
        }}
      >
        {/* Animated blobs */}
        <div
          className={`absolute top-20 right-10 w-64 h-64 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float ${slide.blob1}`}
          style={{ transition: 'background-color 0.5s ease' }}
        />
        <div
          className={`absolute bottom-20 left-10 w-64 h-64 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float ${slide.blob2}`}
          style={{ animationDelay: '1s', transition: 'background-color 0.5s ease' }}
        />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* ── TAB SWITCHER ──
          <div className="flex justify-center mb-10">
            <div className="relative flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-lg border border-white/60 gap-1">
             Sliding background pill 
              <div
                className="absolute top-1.5 bottom-1.5 rounded-full shadow-sm"
                style={{
                  left: activeTab === 0 ? '6px' : 'calc(50% + 3px)',
                  width: 'calc(50% - 9px)',
                  background: activeTab === 0
                    ? 'linear-gradient(135deg, #f97316, #dc2626)'
                    : 'linear-gradient(135deg, #2563eb, #4f46e5)',
                  transition: 'left 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s ease',
                }}
              />
              {heroSlides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleTabChange(i)}
                  className="tab-pill relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold z-10 transition-colors duration-300"
                  style={{ color: activeTab === i ? '#fff' : '#64748b' }}
                >
                  <span className={activeTab === i ? 'text-white' : ''} style={{ transition: 'color 0.3s' }}>
                    {React.cloneElement(s.icon, { className: `w-4 h-4 ${activeTab === i ? 'text-white' : ''}` })}
                  </span>
                  {s.label}
                </button>
              ))}
            </div>
          </div> */}

          {/* ── HERO CONTENT ── */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* Left: Text */}
            <div
              key={`text-${activeTab}`}
              className={`space-y-6 md:space-y-8 ${isTransitioning ? 'hero-content-exit' : 'hero-content-enter'}`}
            >
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                {slide.icon}
                <span className="text-sm font-medium text-slate-700">{slide.badge}</span>
              </div>

              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 leading-tight">
                {slide.headline[0]}
                <span
                  className="block"
                  style={{
                    background: slide.gradientText,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transition: 'background 0.4s ease',
                  }}
                >
                  {slide.headline[1]}
                </span>
              </h1>

              <p className="text-base md:text-xl text-slate-600 leading-relaxed">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href={slide.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-3 md:py-4 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-2"
                  style={{ background: slide.gradientText }}
                >
                  <span>{slide.cta.label}</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href={slide.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-3 md:py-4 bg-white text-slate-900 font-semibold rounded-full hover:shadow-lg transition-all text-center"
                >
                  {slide.secondary.label}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-4">
                {slide.stats.map((stat, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="h-12 w-px bg-slate-300" />}
                    <div className="flex-shrink-0">
                      <div className="text-3xl md:text-4xl font-display font-bold text-slate-900">{stat.value}</div>
                      <div className="text-xs md:text-sm text-slate-600">{stat.label}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className={`relative mt-8 md:mt-0 hero-img-wrap ${isTransitioning ? 'transitioning' : 'visible'}`}>
              <div className="relative z-10 w-full">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="rounded-3xl shadow-2xl w-full object-cover max-h-[500px] md:max-h-none"
                  style={{ height: '420px' }}
                />
                {/* Gradient overlay tint matching the slide */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-10 pointer-events-none"
                  style={{ background: slide.gradientText }}
                />
              </div>
              {/* Rating badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl animate-scaleIn delay-500">
                <div className="flex z-50 items-center space-x-3 md:space-x-4">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: slide.gradientText }}
                  >
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-display font-bold text-slate-900">
                      {slide.stats[2].value}
                    </div>
                    <div className="text-xs md:text-sm text-slate-600 whitespace-nowrap">
                      {slide.stats[2].label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── TAB PROGRESS DOTS ── */}
          <div className="flex justify-center gap-3 mt-10">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleTabChange(i)}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: activeTab === i ? '40px' : '12px', background: '#e2e8f0' }}
                aria-label={`Slide ${i + 1}`}
              >
                {activeTab === i && (
                  <div
                    key={`progress-${activeTab}`}
                    className="progress-bar h-full rounded-full"
                    style={{ background: slide.gradientText }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center text-orange-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <span className="text-orange-600 font-semibold text-xs md:text-sm uppercase tracking-wider">Popular Destinations</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 mt-2">Explore Paradise</h2>
            <p className="text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto px-4">
              Visit the most revered sites in Islam: Makkah, Madinah, and the places of Hajj rituals. Our packages ensure a spiritually fulfilling and comfortable pilgrimage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {destinations.map((dest, index) => (
              <div
                key={dest.id}
                className="destination-card bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 md:h-64">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold z-10">
                    {dest.duration}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-semibold text-xs md:text-sm">{dest.rating}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1">{dest.name}</h3>
                    <div className="flex items-center justify-between">
                      <button className="bg-white text-orange-600 p-1.5 md:p-2 rounded-full hover:bg-orange-600 hover:text-white transition-all">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12 animate-fadeInUp delay-500">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all">
              View All Destinations
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden animate-fadeInUp">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-4">
                Ready for Your Next Adventure?
              </h2>
              <p className="text-base md:text-xl text-orange-50 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of happy travelers who discovered their perfect getaway with us
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 md:py-4 rounded-full text-slate-900 font-medium focus:outline-none focus:ring-4 focus:ring-orange-300"
                />
                <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-orange-600 font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientReviews />
      <ProcessRoadmap />
      <PilgrimagePackages />
      <ContactSection />
      <Footer />
    </div>
  );
}