import { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import { CourseCard } from "@/components/Cards";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses & Pricing",
  description:
    "Explore driving courses at Great D-Square Driving School in Yaba, Lagos. Beginner, intensive, refresher, and defensive driving packages with flexible scheduling and certified instructors.",
};

const courses = [
  {
    name: "Beginner Course",
    description:
      "Perfect for first-time drivers. Learn fundamental driving skills, traffic rules, and road safety from the ground up with patient, certified instructors.",
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
      "Fast-track your driving skills with our concentrated program. Ideal for those who need to get licensed quickly without compromising on quality.",
    price: 250000,
    features: [
      "40 hours of in-car training",
      "Daily lessons available",
      "Road test scheduling",
      "Guaranteed readiness",
    ],
  },
  {
    name: "Refresher Course",
    description:
      "Get back behind the wheel with updated rules and confidence-building exercises. Perfect for drivers who haven't been on the road in a while.",
    price: 120000,
    features: [
      "16 hours of in-car training",
      "Updated rules review",
      "Confidence building",
      "Flexible scheduling",
    ],
  },
  {
    name: "Defensive Driving",
    description:
      "Master advanced safety techniques. Reduce insurance costs and become a more confident, cautious driver with our specialized defensive driving program.",
    price: 85000,
    features: [
      "8 hours of in-car training",
      "Hazard perception skills",
      "Insurance discount eligible",
      "Certificate of completion",
    ],
  },
];

const comparisonFeatures = [
  { feature: "In-Car Training Hours", beginner: "30 hrs", intensive: "40 hrs", refresher: "16 hrs", defensive: "8 hrs" },
  { feature: "Classroom Sessions", beginner: true, intensive: true, refresher: false, defensive: false },
  { feature: "Practice Tests", beginner: true, intensive: true, refresher: false, defensive: false },
  { feature: "Road Test Scheduling", beginner: false, intensive: true, refresher: false, defensive: false },
  { feature: "Hazard Perception", beginner: false, intensive: false, refresher: false, defensive: true },
  { feature: "Confidence Building", beginner: false, intensive: false, refresher: true, defensive: false },
  { feature: "Certificate", beginner: false, intensive: false, refresher: false, defensive: true },
  { feature: "Manual & Automatic", beginner: true, intensive: true, refresher: true, defensive: true },
];

export default function CoursesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#0f172a]/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-6">
              Our Programs
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Courses & Pricing
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Choose the program that fits your needs. All courses include certified instructors,
              modern dual-control vehicles, and flexible scheduling in Yaba, Lagos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.name} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-6">
              Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Compare Our Packages
            </h2>
            <p className="mt-3 text-muted-foreground">
              See what is included in each course so you can pick the right fit.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-border/60">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left py-4 px-6 font-bold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Beginner</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Intensive</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Refresher</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Defensive</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-surface/50"}
                  >
                    <td className="py-4 px-6 text-sm font-medium text-foreground">{row.feature}</td>
                    {(["beginner", "intensive", "refresher", "defensive"] as const).map(
                      (key) => (
                        <td key={key} className="py-4 px-4 text-center text-sm text-muted-foreground">
                          {typeof row[key] === "boolean" ? (
                            row[key] ? (
                              <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                            ) : (
                              <span className="text-border">—</span>
                            )
                          ) : (
                            row[key]
                          )}
                        </td>
                      )
                    )}
                  </tr>
                ))}
                <tr className="border-t border-border/60 bg-surface">
                  <td className="py-4 px-6 font-bold text-foreground">Price</td>
                  {courses.map((c) => (
                    <td key={c.name} className="py-4 px-4 text-center text-lg font-bold text-accent">
                      ₦{c.price.toLocaleString()}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-6">
              Need Help?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Not Sure Which Course to Pick?
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
              Our team is happy to help you choose the right program. Get in touch
              and we will create a plan tailored to your needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/2348039798884"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#20ba5a] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
