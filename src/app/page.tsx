import type { Metadata } from "next";
import Link from "next/link";
import {
  Car,
  Clock,
  Award,
  Users,
  GraduationCap,
  ArrowRight,
  Phone,
  Star,
  MapPin,
  Calendar,
} from "lucide-react";
import { CourseCard, TestimonialCard, StatCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Great D-Square Driving School — Learn to Drive with Confidence in Lagos",
  description:
    "Professional driving instruction in Yaba, Lagos. Beginner, intensive, refresher & defensive driving courses. 4.7 rated with 13 Google reviews. Open 7 days a week. Enroll today!",
};

const featuredCourses = [
  {
    name: "Beginner Course",
    description:
      "Perfect for first-time drivers. Learn fundamental driving skills, traffic rules, and road safety from the ground up.",
    price: 150000,
    features: [
      "30 hours of in-car training",
      "Classroom theory sessions",
      "Practice test preparation",
      "Personalized learning plan",
    ],
  },
  {
    name: "Intensive Course",
    description:
      "Fast-track your driving skills with our concentrated program. Ideal for those who need to get licensed quickly.",
    price: 250000,
    features: [
      "40 hours of in-car training",
      "Daily lessons available",
      "Road test scheduling",
      "Guaranteed readiness",
    ],
  },
  {
    name: "Defensive Driving",
    description:
      "Master advanced safety techniques. Reduce insurance costs and become a more confident, cautious driver.",
    price: 85000,
    features: [
      "8 hours in-car training",
      "Hazard perception skills",
      "Insurance discount eligible",
      "Certificate of completion",
    ],
  },
];

const testimonials = [
  {
    name: "Adaeze O.",
    rating: 5,
    message:
      "I was terrified of driving, but my instructor at Great D-Square made me feel safe and confident. I passed my test on the first try!",
  },
  {
    name: "Tunde K.",
    rating: 5,
    message:
      "The intensive course was exactly what I needed. Professional, structured, and they really know how to prepare you for Lagos roads.",
  },
  {
    name: "Fatima A.",
    rating: 4,
    message:
      "Flexible scheduling made it possible for me to learn around my work hours. The instructors are patient and knowledgeable.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[58vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/85 via-[#0f172a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 via-transparent to-transparent" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10">
          <div className="max-w-lg text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 text-sm text-white/90 mb-8 border border-white/10">
              <Award className="h-4 w-4 text-accent-light" />
              4.7 Rating &middot; Open 7 Days a Week
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Your Road to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
                Freedom
              </span>{" "}
              Starts Here
            </h1>
            <p className="mt-7 text-lg text-white/70 leading-relaxed max-w-lg">
              Professional driving instruction designed to build safe, skilled,
              and confident drivers. Start your journey today with Great D-Square
              Driving School in Yaba, Lagos.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-light text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-primary transition-all duration-300 shadow-xl shadow-primary-light/30 hover:shadow-primary-light/50 hover:-translate-y-0.5"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+2348039798884"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/20 transition-all duration-300 border border-white/15"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>

        {/* Floating rating card */}
        <div className="absolute bottom-12 right-8 hidden xl:block z-10">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/15 shadow-2xl max-w-xs">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                <Star className="h-6 w-6 text-white fill-white" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">4.7 Rating</p>
                <p className="text-white/60 text-xs">13 Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="4.7" label="Google Rating (13 Reviews)" />
            <StatCard value="10+" label="Years in Operation" />
            <StatCard value="2,000+" label="Students Trained" />
            <StatCard value="7 Days" label="Open Every Week" />
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Popular Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Find Your Perfect Course
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Choose from a range of programs designed to fit your schedule and
              skill level.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.name} {...course} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-light transition-colors group"
            >
              View All Courses
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Great D-Square */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Why Choose Great D-Square?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We are committed to delivering the best driving education
              experience in Lagos.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Instructors",
                desc: "Certified instructors with decades of combined experience and a genuine passion for teaching.",
              },
              {
                icon: Calendar,
                title: "Open 7 Days a Week",
                desc: "Including Sunday hours (12–4 PM). Learn on the day that suits your schedule.",
              },
              {
                icon: Car,
                title: "Modern Fleet",
                desc: "Learn in well-maintained, dual-control vehicles equipped with the latest safety features.",
              },
              {
                icon: GraduationCap,
                title: "High Pass Rate",
                desc: "Our structured curriculum and personalized approach lead to outstanding results.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface rounded-2xl p-7 border border-border/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="mt-5 font-bold text-foreground text-lg">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              What Our Students Say
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Real stories from real students who found success with us.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-light transition-colors group"
            >
              Read More Reviews
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Area Served */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-border/40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                  Location
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                  Conveniently Located in Yaba
                </h2>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                  We are located at <strong>Phase 2, 3 Montgomery Road</strong> in
                  Yaba, Lagos. Easy to find and accessible from all parts of Lagos.
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary font-semibold">
                  <MapPin className="h-5 w-5" />
                  Phase 2, 3 Montgomery Rd, Yaba, Lagos 101212
                </div>
                <a
                  href="https://maps.google.com/?q=Phase+2+3+Montgomery+Rd+Yaba+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-primary font-bold hover:text-primary-light transition-colors group"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="rounded-2xl h-72 overflow-hidden border border-border/40">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d3.3896!3d6.5158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b5e5e5e5e5e%3A0x1234567890abcdef!2sMontgomery%20Rd%2C%20Yaba%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Great D-Square Driving School Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Start Driving?
            </h2>
            <p className="mt-5 text-white/70 text-lg max-w-xl mx-auto">
              Join thousands of confident drivers who started their journey with
              Great D-Square. Enroll today and take the first step.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-xl hover:-translate-y-0.5"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+2348039798884"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/15"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
