"use client";
import React from 'react';
import { CheckCircle, FileText, Plane, Hotel, Building2, Users, BookOpen, Shield, Heart } from 'lucide-react';

const ProcessRoadmap = () => {
  const steps = [
    {
      step: 1,
      title: "Consultation",
      description: "Personal spiritual consultation to understand your needs and requirements for the pilgrimage",
      icon: <Users className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600",
      borderColor: "border-orange-200",
      details: [
        "One-on-one consultation with our spiritual advisors",
        "Assessment of physical and spiritual readiness",
        "Customized package recommendations"
      ]
    },
    {
      step: 2,
      title: "Documentation",
      description: "Complete assistance with visa processing and all required documentation",
      icon: <FileText className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600",
      borderColor: "border-orange-200",
      details: [
        "Visa application processing",
        "Medical requirements assistance",
        "Travel insurance arrangements"
      ]
    },
    {
      step: 3,
      title: "Preparation",
      description: "Comprehensive pre-travel orientation and educational sessions",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600",
      borderColor: "border-orange-200",
      details: [
        "Spiritual preparation sessions",
        "Rituals education (Hajj/Umrah)",
        "Cultural orientation"
      ]
    },
    {
      step: 4,
      title: "Travel",
      description: "Seamless travel arrangements with dedicated flight services",
      icon: <Plane className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600",
      borderColor: "border-orange-200",
      details: [
        "Direct flights to Jeddah/Medinah",
        "Airport transfers in Saudi Arabia",
        "Luggage handling assistance"
      ]
    },
    {
      step: 5,
      title: "Accommodation",
      description: "Premium accommodations near the Holy Mosques",
      icon: <Hotel className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600",
      borderColor: "border-orange-200",
      details: [
        "5-star hotels near Haram",
        "Daily transportation to Mosques",
        "Complimentary meals"
      ]
    },
    {
      step: 6,
      title: "Pilgrimage",
      description: "Guided rituals with experienced spiritual guides",
      icon: <Building2 className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600",
      borderColor: "border-orange-200",
      details: [
        "Certified Mutawif guides",
        "Group management during rituals",
        "24/7 spiritual support"
      ]
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "Comprehensive safety protocols and emergency medical support"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Comfort & Care",
      description: "Dedicated service team for elderly and special needs pilgrims"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Certified Guides",
      description: "Government-certified Mutawifs with years of experience"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-4">
            <CheckCircle className="w-4 h-4" />
            <span className="text-xs md:text-sm font-semibold">Step-by-Step Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Your Spiritual Journey Made Simple
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            From initial consultation to the completion of your pilgrimage, we guide you through every step
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 to-red-200"></div>
          
          {/* Steps Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-y-12">
            {steps.map((step, index) => (
              <div 
                key={step.step}
                className={`relative ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12 lg:mt-24'}`}
              >
                {/* Step Number */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-orange-500 rounded-full items-center justify-center z-10">
                  <span className="text-lg font-bold text-orange-700">{step.step}</span>
                </div>

                {/* Step Card */}
                <div className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 ${step.borderColor} hover:shadow-xl transition-all duration-300`}>
                  <div className={`inline-flex p-3 rounded-xl ${step.color} mb-4 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Final Step */}
          <div className="mt-12 lg:mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-orange-600 to-red-600 rounded-full p-1 animate-pulse">
              <div className="bg-white rounded-full p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                  Completed Pilgrimage
                </h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Return home with accepted Hajj/Umrah and memories for a lifetime
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 border border-orange-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all">
            Download Complete Guide
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ProcessRoadmap;