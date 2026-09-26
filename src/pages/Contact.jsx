import { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Users, 
  Clock 
} from 'lucide-react';
import statsData from '../data/stats.json';

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
      <section className="bg-gradient-to-b from-lavender-light via-lavender-soft/30 to-background py-16 lg:py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-white text-primary border border-lavender-soft mb-4">
            Connect With Our Teams
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight">
            We're Here to Support Your Growth
          </h1>
          <p className="mt-4 text-base sm:text-lg text-grey leading-relaxed">
            Whether you are an enterprise client looking to scale critical headcount or an executive exploring your next leadership challenge, we're ready to talk.
          </p>
        </div>
      </section>

      {/* Main Two-Column Layout (Spec Section 9) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Corporate Office & Regional Hubs (Spec Section 9) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Headquarters Card */}
            <div className="bg-navy text-white rounded-3xl p-8 shadow-xl space-y-6 border border-navy-muted">
              <div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal text-white">
                  Corporate Headquarters
                </span>
                <h3 className="text-2xl font-bold text-white mt-3">
                  Acuity Talent Partners
                </h3>
              </div>

              <div className="space-y-4 text-sm text-grey-light">
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
                    <a href="mailto:info@acuitytalent.com" className="hover:text-white transition-colors text-xs text-teal-light">
                      info@acuitytalent.com
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

            {/* Regional Delivery Hubs */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-card space-y-6">
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
                  <div key={office.city} className="p-3.5 rounded-xl bg-background border border-border/60">
                    <div className="font-bold text-navy mb-1">{office.city}</div>
                    <p className="text-[11px] text-grey line-clamp-2 mb-2">
                      {office.address}
                    </p>
                    <div className="text-[11px] font-medium text-teal">
                      {office.phone}
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
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Mehta"
                        className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1.5">
                        Subject / Practice Area
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Leadership Mandate in Bengaluru"
                        className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirement or career inquiry..."
                      className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

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
