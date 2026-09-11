"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { hours } from "@/lib/config";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    transmission: "",
    schedule: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.course.trim()) newErrors.course = "Please select a course";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <>
      <section className="bg-gradient-to-r from-[#0f172a]/90 to-[#0f172a]/70 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Contact & <span className="text-accent">Enroll</span>
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Ready to start driving? Fill out the enrollment form below or
              reach us directly via phone or WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-border/60">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">
                    Enroll Now
                  </h2>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mx-auto">
                      <Send className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-primary">
                      Enrollment Submitted!
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for your interest! We&apos;ll contact you within 24 hours
                      to confirm your enrollment and course details.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          course: "",
                          transmission: "",
                          schedule: "",
                          notes: "",
                        });
                      }}
                      className="mt-6 text-primary font-semibold hover:text-primary-light transition-colors"
                    >
                      Submit Another Enrollment
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          className={`w-full rounded-xl border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                            errors.name ? "border-danger" : "border-border"
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-danger text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className={`w-full rounded-xl border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                            errors.phone ? "border-danger" : "border-border"
                          }`}
                          placeholder="0803 979 8884"
                        />
                        {errors.phone && (
                          <p className="text-danger text-xs mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1">
                          Preferred Course *
                        </label>
                        <select
                          value={formData.course}
                          onChange={(e) =>
                            updateField("course", e.target.value)
                          }
                          className={`w-full rounded-xl border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                            errors.course ? "border-danger" : "border-border"
                          }`}
                        >
                          <option value="">Select a course</option>
                          <option value="Beginner Course">
                            Beginner Course — ₦150,000
                          </option>
                          <option value="Intensive Course">
                            Intensive Course — ₦250,000
                          </option>
                          <option value="Refresher Course">
                            Refresher Course — ₦120,000
                          </option>
                          <option value="Defensive Driving">
                            Defensive Driving — ₦85,000
                          </option>
                        </select>
                        {errors.course && (
                          <p className="text-danger text-xs mt-1">
                            {errors.course}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-1">
                          Transmission Type
                        </label>
                        <select
                          value={formData.transmission}
                          onChange={(e) =>
                            updateField("transmission", e.target.value)
                          }
                          className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          <option value="">Select transmission</option>
                          <option value="automatic">Automatic</option>
                          <option value="manual">Manual</option>
                          <option value="both">Both</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        Preferred Schedule
                      </label>
                      <select
                        value={formData.schedule}
                        onChange={(e) =>
                          updateField("schedule", e.target.value)
                        }
                        className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="">Select a time slot</option>
                        <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                        <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                        <option value="evening">Evening (3:00 PM - 6:00 PM)</option>
                        <option value="sunday">Sunday (12:00 PM - 4:00 PM)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        Notes / Special Requests
                      </label>
                      <textarea
                        rows={4}
                        value={formData.notes}
                        onChange={(e) =>
                          updateField("notes", e.target.value)
                        }
                        className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                        placeholder="Any special requirements or questions..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-light transition-colors disabled:opacity-50"
                    >
                      {loading ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Submit Enrollment
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-border/60">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Phone
                      </p>
                      <a
                        href="tel:+2348039798884"
                        className="text-primary font-semibold hover:text-primary-light transition-colors"
                      >
                        0803 979 8884
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                      <svg className="h-5 w-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/2348039798884"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] font-semibold hover:underline"
                      >
                        Chat with us
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Address
                      </p>
                      <p className="text-primary font-semibold">
                        Phase 2, 3 Montgomery Rd, Yaba, Lagos 101212
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-border/60">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">
                    Operating Hours
                  </h2>
                </div>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between py-2 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">
                        {h.day}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          h.day === "Sunday"
                            ? "text-accent"
                            : "text-primary"
                        }`}
                      >
                        {h.open} – {h.close}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface rounded-2xl overflow-hidden">
                <div className="h-48 bg-muted flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
                  <div className="text-center relative z-10">
                    <MapPin className="h-12 w-12 text-primary/30 mx-auto" />
                    <p className="mt-2 text-sm font-medium text-primary/60">
                      Yaba, Lagos
                    </p>
                    <a
                      href="https://maps.google.com/?q=Phase+2+3+Montgomery+Rd+Yaba+Lagos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs text-primary underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
