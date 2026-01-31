"use client";
import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User, Calendar, MapPin } from 'lucide-react';

const ClientReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: "Sada Abdullahi",
      location: "KATSINA STATE, NIGERIA",
      date: "February 2026",
      rating: 4.5,
      review: "Our Hajj journey was made seamless by the exceptional service provided. Every detail was meticulously planned, and the spiritual guidance was invaluable. May Allah reward the team abundantly.",
      image: "sada.jpeg",
      package: "Hajj Package"
    },
    {
      id: 2,
      name: "Fatima Kabir",
      location: "Kano, Nigeria",
      date: "january 2026",
      rating: 5,
      review: "As a first-time Umrah pilgrim, I was nervous, but the caring staff and knowledgeable guides made me feel at ease. The accommodations in Makkah were just steps from the Haram.",
      image: "fatima.jpg",
      package: "Family Umrah Package"
    },
    {
      id: 3,
      name: "Bilal Sada",
      location: "Kano, Nigeria",
      date: "August 2026",
      rating: 5,
      review: "The spiritual journey was transformative. The logistics were handled perfectly, allowing us to focus solely on worship. The educational sessions before departure were particularly helpful.",
      image: "bilal.jpg",
      package: "Hajj Package"
    },
    {
      id: 4,
      name: "Aisha Mohammed",
      location: "katsina, Nigeria",
      date: "April 2026",
      rating: 5,
      review: "Traveling with elderly parents was made easy with wheelchair assistance and special arrangements. The medical team was available 24/7, giving us peace of mind throughout our Umrah.",
      image: "AIsha.jpeg",
      package: "Family Umrah Package"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-slate-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-4">
            <Quote className="w-4 h-4" />
            <span className="text-xs md:text-sm font-semibold">Pilgrim Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            What Our Pilgrims Say
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Experience the journey through the eyes of those who have completed their spiritual pilgrimage with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Review Card */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 to-red-600"></div>
            <div className="absolute top-6 right-6 text-orange-100">
              <Quote className="w-16 h-16 md:w-20 md:h-20" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="relative inline-block">
                  <img 
                    src={reviews[currentReview].image} 
                    alt={reviews[currentReview].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                    {reviews[currentReview].package}
                  </div>
                </div>
                
                <div className="mt-6 md:mt-8">
                  <h4 className="text-lg md:text-xl font-bold text-slate-900">{reviews[currentReview].name}</h4>
                  <div className="flex items-center justify-center md:justify-start space-x-1 mt-1">
                    <MapPin className="w-3 h-3 text-orange-600" />
                    <span className="text-sm text-slate-600">{reviews[currentReview].location}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-1 mt-1">
                    <Calendar className="w-3 h-3 text-orange-600" />
                    <span className="text-sm text-slate-600">{reviews[currentReview].date}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < reviews[currentReview].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-700">
                    {reviews[currentReview].rating}.0/5.0
                  </span>
                </div>
                
                <p className="text-slate-700 text-lg md:text-xl leading-relaxed italic mb-6">
                  "{reviews[currentReview].review}"
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                    </div>
                    <span className="text-sm text-slate-600">
                      {currentReview + 1} of {reviews.length} reviews
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={prevReview}
                      className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center hover:bg-orange-200 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={nextReview}
                      className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center hover:bg-orange-700 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Reviews Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                onClick={() => setCurrentReview(index)}
                className={`p-4 rounded-xl transition-all ${index === currentReview ? 'bg-orange-50 border-2 border-orange-200' : 'bg-white border border-slate-200 hover:border-orange-300'}`}
              >
                <div className="flex items-start space-x-3">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-slate-900 truncate">{review.name}</h4>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-slate-600">{review.rating}.0</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* <div className="text-center mt-12">
          <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all">
            Read All Testimonials
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ClientReviews;