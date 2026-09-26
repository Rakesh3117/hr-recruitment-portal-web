import { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Users, 
  Clock,
  User,
  FileText,
  MessageSquare
} from 'lucide-react';
import statsData from '../data/stats.json';
import { FormField, TextInput, TextArea } from '../components/common/FormFields';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: 'Client', // 'Client' or 'Candidate'
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const hqOffice = statsData.offices.find(o => o.isHeadquarters) || statsData.offices[0];
  const regionalOffices = statsData.offices.filter(o => !o.isHeadquarters);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log('Contact Inquiry Submitted Payload:', {
        ...formData,
        submittedAt: new Date().toISOString()
      });
    }, 500);
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-lavender-light via-lavender-soft/30 to-background py-16 lg:py-24 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-white text-primary border border-lavender-soft shadow-xs">
                Connect With Our Teams
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-tight">
                We're Here to Support<br />
                <span className="text-primary">Your Growth.</span>
              </h1>
              <p className="text-base sm:text-lg text-grey leading-relaxed max-w-2xl">
                Whether you are an enterprise client looking to scale critical headcount or an executive exploring your next leadership challenge, our practice leads are ready to talk.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-navy font-semibold border-t border-border/60">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal" /> 24-Hour Inquiry Response
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-primary" /> Senior Consultant Attention
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-success" /> Pan-India & Global Coverage
                </span>
              </div>
            </div>

            {/* Visual Hero Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-lavender-soft group">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern corporate reception and client consultation lounge"
                  loading="lazy"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-lavender-soft shadow-md flex items-center gap-2 text-xs font-bold text-navy">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse" />
                  <span>Global Client Advisory Desk</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-navy">Corporate HQ & Delivery Hubs</span>
                    <span className="font-extrabold text-primary text-[11px] bg-lavender-light px-2 py-0.5 rounded-md">
                      Pan-India + Global
                    </span>
                  </div>
                  <p className="text-[11px] text-grey leading-tight">
                    Walk in to our headquarters at Senapati Bapat Road, Pune or connect with our metro practice directors.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Two-Column Layout (Spec Section 9) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Corporate Office & Regional Hubs (Spec Section 9) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Headquarters Card with Office Photo Banner */}
            <div className="bg-navy text-white rounded-3xl overflow-hidden shadow-xl border border-navy-muted">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={hqOffice.image}
                  alt="Corporate Headquarters"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal text-white shadow-xs">
                  Corporate Headquarters
                </span>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-xs">
                    HR ANAND
                  </h3>
                </div>
              </div>

              <div className="p-8 pt-4 space-y-4 text-sm text-grey-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Office Location</div>
                    <p className="text-xs leading-relaxed text-grey-light mt-0.5">
                      {hqOffice.address}<br />
                      {hqOffice.city} — {hqOffice.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-xs">Telephone</div>
                    <a href={`tel:${hqOffice.phone}`} className="hover:text-white transition-colors text-xs text-teal-light">
                      {hqOffice.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-xs">Email Desk</div>
                    <a href="mailto:info@hranand.com" className="hover:text-white transition-colors text-xs text-teal-light">
                      info@hranand.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-xs">Operating Hours</div>
                    <span className="text-xs">Monday – Friday: 9:00 AM – 6:30 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Delivery Hubs with Visual Photo Thumbnails */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-card space-y-6">
              <div>
                <h3 className="text-lg font-bold text-navy">
                  Regional Operating Hubs
                </h3>
                <p className="text-xs text-grey mt-1">
                  Local partner consultants available across key metro hubs:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {regionalOffices.map((office) => (
                  <div key={office.city} className="rounded-2xl bg-background border border-border/60 overflow-hidden group hover:border-primary/40 transition-colors">
                    <div className="h-24 overflow-hidden relative">
                      <img
                        src={office.image}
                        alt={`${office.city} Office Hub`}
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                      <span className="absolute bottom-1.5 left-2.5 font-bold text-xs text-white drop-shadow-xs">
                        {office.city}
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-[11px] text-grey line-clamp-2 mb-1.5">
                        {office.address}
                      </p>
                      <div className="text-[11px] font-semibold text-teal">
                        {office.phone}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column — Get in Touch Form (Spec Section 9) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-card">
              
              <div className="mb-8 border-b border-border/80 pb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal">
                  Direct Inquiries
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
                  Get in Touch
                </h2>
                <p className="text-xs sm:text-sm text-grey mt-1">
                  Send a message to our general desk or vertical practice leads.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-teal/10 text-teal flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">
                    Thanks — we'll be in touch shortly.
                  </h3>
                  <p className="text-sm text-grey max-w-sm mx-auto">
                    Your inquiry has been routed to our specialized recruitment consultant for <strong className="text-navy">{formData.userType}</strong> inquiries.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        userType: 'Client',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-teal hover:bg-teal-hover transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* I am a: [ Client / Candidate ] */}
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-2">
                      I am a: *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, userType: 'Client' })}
                        className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          formData.userType === 'Client'
                            ? 'bg-teal text-white border-teal shadow-xs'
                            : 'bg-white text-navy border-border hover:bg-background-secondary'
                        }`}
                      >
                        <Building2 className="w-4 h-4" />
                        <span>MNC Client / Employer</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, userType: 'Candidate' })}
                        className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          formData.userType === 'Candidate'
                            ? 'bg-primary text-white border-primary shadow-xs'
                            : 'bg-white text-navy border-border hover:bg-background-secondary'
                        }`}
                      >
                        <Users className="w-4 h-4" />
                        <span>Candidate / Job Seeker</span>
                      </button>
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField id="contact-name" label="Your Full Name" required>
                      <TextInput
                        id="contact-name"
                        type="text"
                        required
                        icon={User}
                        variant={formData.userType === 'Client' ? 'teal' : 'primary'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Mehta"
                      />
                    </FormField>

                    <FormField id="contact-email" label="Email Address" required>
                      <TextInput
                        id="contact-email"
                        type="email"
                        required
                        icon={Mail}
                        variant={formData.userType === 'Client' ? 'teal' : 'primary'}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@example.com"
                      />
                    </FormField>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField id="contact-phone" label="Phone Number" badge="Optional">
                      <TextInput
                        id="contact-phone"
                        type="tel"
                        icon={Phone}
                        variant={formData.userType === 'Client' ? 'teal' : 'primary'}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                      />
                    </FormField>

                    <FormField id="contact-subject" label="Subject / Practice Area" badge="Optional">
                      <TextInput
                        id="contact-subject"
                        type="text"
                        icon={FileText}
                        variant={formData.userType === 'Client' ? 'teal' : 'primary'}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Leadership Mandate in Bengaluru"
                      />
                    </FormField>
                  </div>

                  {/* Message */}
                  <FormField id="contact-message" label="Your Message" required hint="Provide context on your mandate, team scale, or career inquiry.">
                    <TextArea
                      id="contact-message"
                      rows={4}
                      required
                      icon={MessageSquare}
                      variant={formData.userType === 'Client' ? 'teal' : 'primary'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirement or career inquiry..."
                    />
                  </FormField>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Transmitting...' : 'Send Message'}</span>
                    </button>
                    <p className="text-[11px] text-grey text-center mt-2.5">
                      🔒 Your contact information is never shared or added to marketing newsletters.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
