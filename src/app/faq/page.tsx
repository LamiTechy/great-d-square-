"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What are the age requirements?",
    answer:
      "You must be at least 16 years old to start driving lessons. For a full driver's license, you need to be at least 18 years old. Parental consent is required for students under 18.",
  },
  {
    question: "What documents do I need to bring?",
    answer:
      "Please bring a valid government-issued photo ID (NIN slip, voter's card, or international passport), proof of residence (utility bill or bank statement), and a passport photograph. A medical certificate may also be required.",
  },
  {
    question: "How many lessons do I need?",
    answer:
      "The number of lessons varies based on your experience and comfort level. Most students complete their training in 20 to 30 hours of in-car instruction. Our instructors will assess your progress and recommend the appropriate number of sessions.",
  },
  {
    question: "Do you offer both manual and automatic transmission?",
    answer:
      "Yes! We offer training in both manual and automatic transmission vehicles. You can choose the transmission type that suits your preference and the vehicle you plan to drive after getting your license.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require at least 24 hours' notice to cancel or reschedule a lesson without penalty. Cancellations made less than 24 hours before the scheduled lesson may be subject to a cancellation fee.",
  },
  {
    question: "Are you open on Sundays?",
    answer:
      "Yes! We are open 7 days a week, including Sundays from 12:00 PM to 4:00 PM. This is perfect for working students who can only train on weekends.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, cash payments, and mobile payments (OPay, PalmPay, etc.). Payment plans are available for our intensive courses. Contact us for details.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. If you cancel your enrollment 7 or more days before your course start date, you will receive a full refund. Cancellations within 7 days of the start date are eligible for a 50% refund. No refunds are issued after the course has begun.",
  },
  {
    question: "How do I get my license after the course?",
    answer:
      "Once you complete your course, we will help you prepare for and schedule your FRSC driving test. We provide a pre-test preparation session to ensure you are fully ready, and our team will guide you through the licensing application process.",
  },
  {
    question: "Do you help with the licensing process?",
    answer:
      "Yes! We guide our students through the entire licensing process, from the medical test to the FRSC driving test. Our intensive course includes road test scheduling and preparation.",
  },
  {
    question: "Can I switch instructors?",
    answer:
      "Absolutely. If you feel that a different instructor would be a better fit for your learning style, simply let us know and we will arrange a switch at no additional cost.",
  },
  {
    question: "Where exactly are you located?",
    answer:
      "We are located at Phase 2, 3 Montgomery Road, Yaba, Lagos 101212. Our location is easily accessible from all parts of Lagos. Look for the Great D-Square Driving School signage.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-[#0f172a]/90 to-[#0f172a]/70 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="h-8 w-8 text-accent" />
            <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
              Support
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl">
            Everything you need to know about our driving courses, policies, and
            enrollment process.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-border/60 overflow-hidden transition-all hover:shadow-md"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-bold text-foreground text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-accent/10 mb-5">
            <MessageCircle className="h-7 w-7 text-accent" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            Still Have Questions?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Our team is happy to help. Reach out to us and we will get back to
            you as soon as possible.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-light transition-colors shadow-lg"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/2348039798884"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#20ba5a] transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
