"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ChevronRight } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to send message. Please try again.");
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactPoints = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call us",
      detail: "+234 9123734261",
      subdetail: "24/7 support available",
      href: "tel:+2349123734261"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      detail: "hello@bilalsadatravels.com",
      subdetail: "Response within 24h",
      href: "mailto:hello@bilalsadatravels.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office",
      detail: "liyafa roundAbout, katsina state",
      subdetail: "Near liyafa hotel",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-orange-600"></div>
            <span className="text-sm font-medium text-orange-600 tracking-wider uppercase">Contact</span>
            <div className="w-12 h-px bg-orange-600"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 tracking-tight">
            Ready to begin your journey?
          </h2>
          <p className="text-slate-600 max-w-md mx-auto text-lg">
            Get in touch with our expert team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8">
            <div className="space-y-10">
              {contactPoints.map((point, index) => (
                <a
                  key={index}
                  href={point.href}
                  className="group block"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-100 transition-colors">
                        {point.icon}
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                            {point.title}
                          </div>
                          <div className="text-lg font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                            {point.detail}
                          </div>
                          <div className="text-sm text-slate-500 mt-1">
                            {point.subdetail}
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

         
            <div className="pt-8 border-t border-slate-100">
              <div className="text-sm font-medium text-slate-900 mb-3">
                Emergency assistance
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                </div>
                <div className="text-base font-semibold text-slate-900">
                 Call +234 9123734261
                </div>
              </div>
              <div className="text-sm text-slate-500 mt-2">
                24/7 emergency line for pilgrims
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Message sent
                  </h3>
                  <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                    We'll get back to you shortly to discuss your pilgrimage.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-slate-900">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-slate-900">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-slate-900">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none placeholder:text-slate-400"
                      placeholder="Tell us about your pilgrimage plans..."
                    />
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-medium rounded-lg hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                We respect your privacy. Your information is secure with us.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;