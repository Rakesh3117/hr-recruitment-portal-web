import { useState } from 'react';
import { X, CheckCircle2, Upload, FileText, Building, MapPin } from 'lucide-react';

const ApplyModal = ({ job, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentCompany: '',
    noticePeriod: 'Immediate / 15 Days',
    experienceYears: '',
    resumeName: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen || !job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate instant secure submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log('Candidate Application Submitted:', {
        jobId: job.id,
        jobTitle: job.title,
        applicant: formData,
        timestamp: new Date().toISOString()
      });
    }, 600);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, resumeName: file.name }));
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-modal overflow-y-auto bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-modal overflow-hidden border border-border">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-navy via-navy-muted to-primary p-6 text-white relative">
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close application modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-lavender-light mb-2">
            Direct Client Mandate
          </span>
          <h3 className="text-xl font-bold tracking-tight text-white line-clamp-1">
            {job.title}
          </h3>
          <div className="flex flex-wrap items-center gap-3 text-xs text-lavender-soft/80 mt-1">
            <span className="flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-teal-light" />
              {job.clientType}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-teal-light" />
              {job.location}
            </span>
            <span>•</span>
            <span className="text-teal-light font-semibold">{job.compensation}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-navy">Application Received!</h4>
              <p className="text-sm text-grey max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-navy">{formData.fullName}</span>. Your profile for <span className="font-semibold text-navy">{job.title}</span> has been routed to our specialized recruitment consultant.
              </p>
              <div className="p-4 rounded-xl bg-lavender-light text-left text-xs text-navy space-y-1.5 border border-lavender-soft">
                <div className="font-semibold text-primary">What happens next:</div>
                <div>1. Consultant profile review within 24 business hours.</div>
                <div>2. Direct briefing call regarding team culture & interview stages.</div>
                <div>3. Confidential submission to hiring manager.</div>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@example.com"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1">
                    Total Experience
                  </label>
                  <input
                    type="text"
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    placeholder="e.g. 7.5 Years"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1">
                    Current Organization
                  </label>
                  <input
                    type="text"
                    value={formData.currentCompany}
                    onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                    placeholder="Current employer or 'Confidential'"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1">
                    Notice Period
                  </label>
                  <select
                    value={formData.noticePeriod}
                    onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                  >
                    <option value="Immediate">Immediate</option>
                    <option value="15 Days">15 Days</option>
                    <option value="30 Days">30 Days</option>
                    <option value="60 Days">60 Days</option>
                    <option value="90 Days">90 Days</option>
                  </select>
                </div>
              </div>

              {/* Resume Upload Simulation */}
              <div>
                <label className="block text-xs font-semibold text-navy mb-1">
                  Resume / CV (PDF or DOCX) *
                </label>
                <div className="border-2 border-dashed border-border rounded-xl p-3.5 text-center hover:border-primary/50 transition-colors bg-background">
                  <input
                    type="file"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer block">
                    <Upload className="w-5 h-5 mx-auto text-primary mb-1" />
                    {formData.resumeName ? (
                      <span className="text-xs font-semibold text-navy flex items-center justify-center gap-1">
                        <FileText className="w-3.5 h-3.5 text-teal" />
                        {formData.resumeName}
                      </span>
                    ) : (
                      <span className="text-xs text-grey">
                        <span className="font-semibold text-primary underline">Upload Resume</span> or drag and drop
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy mb-1">
                  Quick Note to Consultant (Optional)
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Key accomplishments or preferred interview slots..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  {submitting ? 'Transmitting Profile...' : 'Submit Confidential Application'}
                </button>
                <p className="text-[11px] text-grey text-center mt-2">
                  🔒 We respect your privacy. Profiles are never shared without explicit consent.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default ApplyModal;
