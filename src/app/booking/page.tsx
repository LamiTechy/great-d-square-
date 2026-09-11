"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import {
  User,
  BookOpen,
  Calendar,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Car,
} from "lucide-react";

const courses = [
  {
    id: "beginner",
    name: "Beginner Course",
    price: 150000,
    description: "Perfect for first-time drivers",
  },
  {
    id: "intensive",
    name: "Intensive Course",
    price: 250000,
    description: "Fast-track your learning",
  },
  {
    id: "refresher",
    name: "Refresher Course",
    price: 120000,
    description: "Get back behind the wheel",
  },
  {
    id: "defensive",
    name: "Defensive Driving",
    price: 85000,
    description: "Master defensive techniques",
  },
];

const steps = [
  { id: 1, label: "Personal Details", icon: User },
  { id: 2, label: "Course Selection", icon: BookOpen },
  { id: 3, label: "Schedule", icon: Calendar },
  { id: 4, label: "Review", icon: CheckCircle },
];

function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    age: "",
    course: "",
    transmission: "",
    startDate: "",
    timeSlot: "",
    notes: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim())
        newErrors.fullName = "Full name is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
      if (!formData.age.trim()) {
        newErrors.age = "Age is required";
      } else if (Number(formData.age) < 16) {
        newErrors.age = "Must be at least 16 years old";
      }
    }

    if (step === 2) {
      if (!formData.course) newErrors.course = "Please select a course";
    }

    if (step === 3) {
      if (!formData.startDate) newErrors.startDate = "Start date is required";
      if (!formData.timeSlot) newErrors.timeSlot = "Time slot is required";
    }

    if (step === 4) {
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = "You must agree to the terms";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (!validateStep(4)) return;
    setCurrentStep(5);
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const getSelectedCourse = () =>
    courses.find((c) => c.id === formData.course);

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-sm text-primary font-semibold mb-4">
            <Car className="h-4 w-4" />
            Great D-Square Driving School
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center mb-2 text-foreground">
          Enroll in a Driving Course
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Complete the enrollment form to get started
        </p>

        {currentStep < 5 && (
          <div className="flex items-center justify-between mb-10 relative">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted z-0" />
            <div
              className="absolute top-5 left-0 h-0.5 z-0 transition-all duration-500 bg-primary"
              style={{
                width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              }}
            />
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                    currentStep > step.id
                      ? "bg-success text-white"
                      : currentStep === step.id
                        ? "bg-accent text-white"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={`text-xs mt-2 whitespace-nowrap ${
                    currentStep >= step.id ? "font-medium text-primary" : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-primary">
                Personal Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.fullName ? "border-danger" : "border-border"
                    } focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-danger text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone ? "border-danger" : "border-border"
                    } focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                    placeholder="0803 979 8884"
                  />
                  {errors.phone && (
                    <p className="text-danger text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    min="16"
                    value={formData.age}
                    onChange={(e) => updateField("age", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.age ? "border-danger" : "border-border"
                    } focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                    placeholder="21"
                  />
                  {errors.age && (
                    <p className="text-danger text-sm mt-1">{errors.age}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-light transition-colors"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-primary">
                Select Your Course
              </h2>
              <div className="grid gap-4">
                {courses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => updateField("course", course.id)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      formData.course === course.id
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">
                          {course.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          {course.description}
                        </p>
                      </div>
                      <span className="text-2xl font-bold text-accent">
                        ₦{course.price.toLocaleString()}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              {errors.course && (
                <p className="text-danger text-sm mt-2">{errors.course}</p>
              )}

              <div className="mt-6">
                <label className="block text-sm font-medium text-foreground mb-1">
                  Transmission Preference
                </label>
                <select
                  value={formData.transmission}
                  onChange={(e) => updateField("transmission", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="">Select transmission</option>
                  <option value="automatic">Automatic</option>
                  <option value="manual">Manual</option>
                  <option value="both">No preference</option>
                </select>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 border border-border hover:bg-surface font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-light transition-colors"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-primary">
                Schedule
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => updateField("startDate", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.startDate ? "border-danger" : "border-border"
                    } focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                  />
                  {errors.startDate && (
                    <p className="text-danger text-sm mt-1">{errors.startDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => updateField("timeSlot", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.timeSlot ? "border-danger" : "border-border"
                    } focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                  >
                    <option value="">Select a time slot</option>
                    <option value="morning">
                      Morning (8:00 AM - 12:00 PM)
                    </option>
                    <option value="afternoon">
                      Afternoon (12:00 PM - 3:00 PM)
                    </option>
                    <option value="evening">
                      Evening (3:00 PM - 6:00 PM)
                    </option>
                    <option value="sunday">
                      Sunday (12:00 PM - 4:00 PM)
                    </option>
                  </select>
                  {errors.timeSlot && (
                    <p className="text-danger text-sm mt-1">{errors.timeSlot}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Notes / Special Requests
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    placeholder="Any special requirements or questions..."
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 border border-border hover:bg-surface font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-light transition-colors"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-primary">
                Review & Confirm
              </h2>

              <div className="space-y-4 mb-6">
                <div className="bg-surface p-4 rounded-xl">
                  <h3 className="font-medium text-muted-foreground text-sm mb-2">
                    Personal Details
                  </h3>
                  <p className="text-foreground">
                    <span className="font-medium">Name:</span>{" "}
                    {formData.fullName}
                  </p>
                  <p className="text-foreground">
                    <span className="font-medium">Phone:</span>{" "}
                    {formData.phone}
                  </p>
                  <p className="text-foreground">
                    <span className="font-medium">Age:</span> {formData.age}
                  </p>
                </div>

                <div className="bg-surface p-4 rounded-xl">
                  <h3 className="font-medium text-muted-foreground text-sm mb-2">
                    Course
                  </h3>
                  {getSelectedCourse() && (
                    <div>
                      <p className="text-foreground font-medium">
                        {getSelectedCourse()!.name} - ₦
                        {getSelectedCourse()!.price.toLocaleString()}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {getSelectedCourse()!.description}
                      </p>
                      {formData.transmission && (
                        <p className="text-muted-foreground text-sm mt-1">
                          Transmission: {formData.transmission}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="bg-surface p-4 rounded-xl">
                  <h3 className="font-medium text-muted-foreground text-sm mb-2">
                    Schedule
                  </h3>
                  <p className="text-foreground">
                    <span className="font-medium">Start Date:</span>{" "}
                    {formData.startDate}
                  </p>
                  <p className="text-foreground">
                    <span className="font-medium">Time Slot:</span>{" "}
                    {formData.timeSlot === "morning"
                      ? "Morning (8:00 AM - 12:00 PM)"
                      : formData.timeSlot === "afternoon"
                        ? "Afternoon (12:00 PM - 3:00 PM)"
                        : formData.timeSlot === "sunday"
                          ? "Sunday (12:00 PM - 4:00 PM)"
                          : "Evening (3:00 PM - 6:00 PM)"}
                  </p>
                  {formData.notes && (
                    <p className="text-foreground">
                      <span className="font-medium">Notes:</span>{" "}
                      {formData.notes}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 mb-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeToTerms}
                  onChange={(e) =>
                    updateField("agreeToTerms", e.target.checked)
                  }
                  className="mt-1 w-4 h-4 border-gray-300 rounded focus:ring-primary accent-primary"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  I agree to the terms and conditions of Great D-Square Driving School.
                  I understand that submitting this form does not guarantee
                  enrollment and I will be contacted to finalize registration.
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-danger text-sm">{errors.agreeToTerms}</p>
              )}

              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 border border-border hover:bg-surface font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 bg-success hover:bg-success/90 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Submit Enrollment <CheckCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-foreground">
                Enrollment Submitted!
              </h2>
              <p className="text-muted-foreground mb-6">
                We&apos;ll contact you shortly to finalize your registration
                and confirm your course details.
              </p>
              <p className="text-muted-foreground text-sm mb-8">
                You can also reach us directly at{" "}
                <a href="tel:+2348039798884" className="font-medium text-primary">
                  0803 979 8884
                </a>
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-light transition-colors"
                >
                  Back to Home
                </Link>
                <a
                  href="https://wa.me/2348039798884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#20ba5a] transition-colors"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      }
    >
      <BookingForm />
    </Suspense>
  );
}
