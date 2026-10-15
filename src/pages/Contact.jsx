import { useState } from 'react';
import {  
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  User, 
} from 'lucide-react';
import statsData from '../data/stats.mocks.js';

const Contact = () => {
  const { contactInfo } = statsData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Employer / Hiring Requirement',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log('Contact Inquiry Submitted:', formData);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Employer / Hiring Requirement',
      subject: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-28 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-lavender-light via-surface to-background py-14 sm:py-20 lg:py-24 border-b border-border/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-surface text-primary border border-border shadow-xs">
              Get In Touch
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-tight">
              Let's Talk About Your <span className="text-primary">Hiring Needs</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-grey leading-relaxed font-normal">
              Whether you're looking for one professional or building an entire team, our recruitment team is ready to understand your requirement.
            </p>

            {/* Quick Contact Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border text-navy font-semibold hover:border-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-teal" />
                <span>{contactInfo.displayPhone}</span>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border text-navy font-semibold hover:border-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-teal" />
                <span>{contactInfo.email}</span>
              </a>

              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal text-white font-semibold hover:bg-teal-hover transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & CONTACT FORM GRID */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info, Address, Google Maps, Business Hours (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border shadow-xs space-y-5">
              <h3 className="text-xl font-bold text-navy">
                Our Office & Communications
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Office Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-lavender-light text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-navy block">Office Address:</span>
                    <p className="text-grey leading-relaxed mt-0.5">
                      {contactInfo.address.line1},<br />
                      {contactInfo.address.line2},<br />
                      {contactInfo.address.city}, {contactInfo.address.state} — {contactInfo.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-subtle text-teal flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-navy block">Call Us:</span>
                    <a href={`tel:${contactInfo.phone}`} className="text-primary font-semibold hover:underline">
                      {contactInfo.displayPhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-background-secondary text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-navy block">Email Us:</span>
                    <a href={`mailto:${contactInfo.email}`} className="text-primary font-semibold hover:underline">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3 pt-2 border-t border-border/70">
                  <div className="w-9 h-9 rounded-xl bg-lavender-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-navy block">Business Hours:</span>
                    <div className="space-y-0.5 text-grey mt-0.5">
                      {contactInfo.businessHours?.map((item, idx) => (
                        <div key={idx} className="flex justify-between gap-4">
                          <span>{item.days}:</span>
                          <span className="font-medium text-navy">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start a WhatsApp Conversation</span>
                </a>
              </div>

            </div>

            {/* Google Maps Embed / Card */}
            <div className="bg-surface rounded-3xl p-4 border border-border shadow-xs overflow-hidden">
              <div className="text-xs font-bold uppercase tracking-wider text-navy mb-2 px-2 flex items-center justify-between">
                <span>Location Map</span>
                <span className="text-[11px] text-teal font-normal">{contactInfo.address.city}</span>
              </div>
              <div className="rounded-2xl overflow-hidden h-52 sm:h-60 w-full border border-border">
                <iframe
                  title="Office Location Map"
                  src={contactInfo.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-surface rounded-3xl p-6 sm:p-10 border border-border shadow-card">
            
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-teal-subtle text-teal flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-sm text-grey leading-relaxed">
                    Thank you, <span className="font-semibold text-navy">{formData.name}</span>. Our recruitment consulting team has received your message and will get back to you promptly.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold text-primary bg-lavender-light hover:bg-lavender-soft transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-navy">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-grey mt-1">
                    Fill out the form below and we will connect you with the appropriate practice consultant.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                      Your Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary text-navy placeholder:text-grey-light outline-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                      Your Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary text-navy placeholder:text-grey-light outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary text-navy placeholder:text-grey-light outline-none"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                      I am an... *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary text-navy outline-none"
                    >
                      <option value="Employer / Hiring Requirement">Employer (Hiring Talent)</option>
                      <option value="Candidate / Job Seeker">Candidate (Job Seeker)</option>
                      <option value="General Inquiry">General Partnership Inquiry</option>
                    </select>
                  </div>

                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief description of your inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary text-navy placeholder:text-grey-light outline-none"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                    Message / Requirement *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the roles, workforce needs, or questions you have..."
                    className="w-full p-3.5 rounded-xl text-sm bg-surface border border-border focus:border-primary text-navy placeholder:text-grey-light outline-none leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg transition-all duration-fast disabled:opacity-70 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-primary-light" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
