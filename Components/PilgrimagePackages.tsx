"use client";
import React from 'react';
import { Check, Star, Users, Calendar, MapPin, Shield, Heart } from 'lucide-react';

const PilgrimagePackages = () => {
  const packages = [
  {
    id: 1,
    title: "UMRAH PACKAGE (VIP)",
    description: "Complete luxury experience with 5-star accommodations and VIP services",
    price: "₦0000",
    duration: "4 weeks",
    features: [
      "5-star hotels in Makkah & Madinah",
      "VISA processing assistance",
      "Airport pickup & drop-off",
      "Private guided tours",
      "Daily buffet meals",
      "Medical team on-site",
      "VIP airport transfers"
    ],
    popular: true,
    icon: <Star className="w-6 h-6" />
  },
  {
    id: 2,
    title: "UMRAH PACKAGE (STANDARD)",
    description: "Comfortable pilgrimage with excellent location and services",
    price: "₦0000",
    duration: "2 weeks",
    features: [
      "4-star hotels near Haram",
      "VISA processing assistance",
      "Airport pickup & drop-off",
      "Experienced guide",
      "Breakfast included",
      "Medical support",
      "Group transportation"
    ],
    popular: false,
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 3,
    title: "HAJJ PACKAGE",
    description: "Complete Hajj experience with religious guidance and 24/7 support",
    price: "₦5M +",
    duration: "40 Days",
    features: [
      "Hajj visa processing support",
      "Accommodation in Makkah, Madinah & Mina",
      "Government-certified Hajj guide (Mutawif)",
      "Transportation for all Hajj rites",
      "Daily meals included",
      "Airport pickup & drop-off",
      "Medical support & emergency assistance"
    ],
    popular: false,
    icon: <Users className="w-6 h-6" />
  }
];


  return (
    <section id="packages" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full px-4 py-2 mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-xs md:text-sm font-semibold">Pilgrimage Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Choose Your Spiritual Journey
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Tailored packages for every pilgrim, from luxury to economy, all with the same commitment to your spiritual success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`relative rounded-2xl overflow-hidden border-2 ${pkg.popular ? 'border-orange-500 shadow-2xl' : 'border-slate-200 shadow-lg'} hover:shadow-xl transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${pkg.popular ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-600'}`}>
                  {pkg.icon}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                  {pkg.title}
                </h3>
                
                <p className="text-slate-600 mb-4">
                  {pkg.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">{pkg.price}</div>
                    <div className="text-sm text-slate-600">per person</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{pkg.duration}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${pkg.popular ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                  View Package Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilgrimagePackages;