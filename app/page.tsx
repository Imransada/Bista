"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Calendar, Users, Star, Menu, X, Globe, Mountain, Palmtree } from 'lucide-react';
import ClientReviews from '../Components/ClientReviews';
import ProcessRoadmap from '../Components/ProcessRoadmap';
import ContactSection from '../Components/ContactSection';
import PilgrimagePackages from '../Components/PilgrimagePackages';

export default function TravelAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const destinations = [
  {
    id: 1,
    name: "Makkah, Saudi Arabia (Umrah)",
    image: "umrahimg.jpeg",
    duration: "15 Days",
    rating: 5.0
  },
 
  {
    id: 3,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop",
    duration: "7 Days",
    rating: 4.9
  },
   {
    id: 2,
    name: "Makkah & Madinah, Saudi Arabia (Hajj)",
    image: "hajjimg.jpeg",
    duration: "40 Days",
    rating: 5.0
  },
  {
    id: 6,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    duration: "10 Days",
    rating: 4.7
  }
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
        
        * {
          box-sizing: border-box;
        }

        html, body {
          overflow-x: hidden;
          width: 100%;
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
        }

        .font-display {
          font-family: 'Playfair Display', serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .gradient-text {
          background: linear-gradient(135deg, #f97316 0%, #dc2626 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .destination-card {
          position: relative;
          overflow: hidden;
        }

        .destination-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
          z-index: 1;
        }

        .destination-card img {
          transition: transform 0.6s ease;
        }

        .destination-card:hover img {
          transform: scale(1.1);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fadeIn block ">
              <img src="/logo.png" alt="BilalSADA Logo" className="w-30 h-17 object-contain" />
            </div>

            {/* Desktop Menu */}
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
                className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
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

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 md:w-72 md:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 md:w-72 md:h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm animate-fadeInUp">
                <Palmtree className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-slate-700">Explore the World</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 leading-tight animate-fadeInUp delay-100">
                Your Journey
                <span className="block gradient-text">Starts Here</span>
              </h1>
              
              <p className="text-base md:text-xl text-slate-600 leading-relaxed animate-fadeInUp delay-200">
                Experience a seamless, spiritually uplifting pilgrimage. We provide expert guidance, premium packages, and heartfelt support for your Hajj and Umrah.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-fadeInUp delay-300">
                <a href="https://wa.me/09123734261" target="_blank" rel="noopener noreferrer" className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-2">
                  <span>Contact us</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a href="https://youtu.be/h2a2KGNHlXw?si=IqPxSRcLuvO7Vfox" target="_blank" rel="noopener noreferrer" className="px-6 md:px-8 py-3 md:py-4 bg-white text-slate-900 font-semibold rounded-full hover:shadow-lg transition-all">
                  Watch Video
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-8 animate-fadeInUp delay-400">
                <div className="flex-shrink-0">
                  <div className="text-3xl md:text-4xl font-display font-bold text-slate-900">50K+</div>
                  <div className="text-xs md:text-sm text-slate-600">Happy Travelers</div>
                </div>
                <div className="h-12 w-px bg-slate-300"></div>
                <div className="flex-shrink-0">
                  <div className="text-3xl md:text-4xl font-display font-bold text-slate-900">150+</div>
                  <div className="text-xs md:text-sm text-slate-600">Destinations</div>
                </div>
                <div className="h-12 w-px bg-slate-300"></div>
                <div className="flex-shrink-0">
                  <div className="text-3xl md:text-4xl font-display font-bold text-slate-900">4.9</div>
                  <div className="text-xs md:text-sm text-slate-600">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slideInRight mt-8 md:mt-0">
              <div className="relative z-10 w-full">
                <img 
                  src="emiplane.jpeg" 
                  alt="Travel" 
                  className="rounded-3xl object-contain shadow-2xl w-full h-180 object-cover max-h-[500px] md:max-h-none"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl animate-scaleIn delay-500">
                <div className="flex z-50 items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-display font-bold text-slate-900">4.9/5</div>
                    <div className="text-xs md:text-sm text-slate-600 whitespace-nowrap">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
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
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover"
                  />
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

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="BilalSADA Logo" className="w-30 h-15 md:w-30 md:h-15 object-contain" />
              </div>
              <p className="text-sm md:text-base text-slate-400 mb-4">
                Your trusted partner in creating unforgettable travel experiences around the globe.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm md:text-base text-slate-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#destinations" className="hover:text-orange-500 transition-colors">Destinations</a></li>
                <li><a href="#packages" className="hover:text-orange-500 transition-colors">Tour Packages</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm md:text-base text-slate-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm md:text-base text-slate-400">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span>Liyafa road katsina state</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>+234 9123734261</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>bilalsadatravelandtours@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 md:pt-8 text-center text-sm md:text-base text-slate-400">
            <p>&copy; 2026.All rights reserved.DEVELOPED BY AREWACODE LTD</p>
          </div>
        </div>
      </footer>
    </div>
  );
}