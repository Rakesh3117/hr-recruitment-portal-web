import { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Upload, 
  FileText, 
  Building, 
  MapPin,
  User,
  Mail,
  Phone,
  Clock,
  Calendar,
  Building2
} from 'lucide-react';
import { FormField, TextInput, SelectInput, TextArea } from './FormFields';

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
                <FormField id="apply-fullname" label="Full Name" required>
                  <TextInput
                    id="apply-fullname"
                    type="text"
                    required
                    icon={User}
                    variant="primary"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                  />
                </FormField>

                <FormField id="apply-email" label="Email Address" required>
                  <TextInput
                    id="apply-email"
                    type="email"
                    required
                    icon={Mail}
                    variant="primary"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@example.com"
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField id="apply-phone" label="Phone / WhatsApp" required>
                  <TextInput
                    id="apply-phone"
                    type="tel"
                    required
                    icon={Phone}
                    variant="primary"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                  />
                </FormField>

                <FormField id="apply-exp" label="Total Experience" badge="Optional">
                  <TextInput
                    id="apply-exp"
                    type="text"
                    icon={Clock}
                    variant="primary"
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    placeholder="e.g. 7.5 Years"
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField id="apply-company" label="Current Organization" badge="Optional">
                  <TextInput
                    id="apply-company"
                    type="text"
                    icon={Building2}
                    variant="primary"
                    value={formData.currentCompany}
                    onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                    placeholder="Current employer or 'Confidential'"
                  />
                </FormField>

                <FormField id="apply-notice" label="Notice Period">
                  <SelectInput
                    id="apply-notice"
                    icon={Calendar}
                    variant="primary"
                    value={formData.noticePeriod}
                    onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                  >
                    <option value="Immediate">Immediate</option>
                    <option value="15 Days">15 Days</option>
                    <option value="30 Days">30 Days</option>
                    <option value="60 Days">60 Days</option>
                    <option value="90 Days">90 Days</option>
                  </SelectInput>
                </FormField>
              </div>

              {/* Resume Upload Simulation */}
              <FormField id="resume-upload" label="Resume / CV (PDF or DOCX)" required hint="Standard PDF or DOCX format under 5 MB.">
                <div className="border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-primary/50 transition-colors bg-surface-secondary">
                  <input
                    type="file"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer block">
                    <Upload className="w-5 h-5 mx-auto text-primary mb-1.5" />
                    {formData.resumeName ? (
                      <span className="text-xs font-semibold text-navy flex items-center justify-center gap-1.5">
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
              </FormField>

              <FormField id="apply-notes" label="Quick Note to Consultant" badge="Optional">
                <TextArea
                  id="apply-notes"
                  rows={2}
                  icon={FileText}
                  variant="primary"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Key accomplishments, notice flexibility, or preferred interview slots..."
                />
              </FormField>

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
