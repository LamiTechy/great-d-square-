import { Metadata } from "next";
import {
  Shield,
  Heart,
  Award,
  Users,
  Car,
  CheckCircle,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Great D-Square Driving School's mission to create confident, safe drivers in Yaba, Lagos. Licensed, certified, and committed to excellence in driver education.",
};

const instructors = [
  {
    name: "David Square",
    role: "Founder & Lead Instructor",
    experience: "15 years",
    specialty: "Beginner Instruction",
  },
  {
    name: "Chidinma Okafor",
    role: "Senior Instructor",
    experience: "10 years",
    specialty: "Defensive Driving",
  },
  {
    name: "Adebayo Thompson",
    role: "Instructor",
    experience: "8 years",
    specialty: "Intensive Courses",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Instructor",
    experience: "6 years",
    specialty: "Nervous Drivers",
  },
];

const vehicles = [
  {
    name: "Toyota Corolla",
    type: "Automatic & Manual",
    features: ["Dual Control System", "Backup Camera", "Well Maintained"],
  },
  {
    name: "Honda Civic",
    type: "Automatic",
    features: [
      "Dual Control System",
      "Air Conditioning",
      "Modern Safety Features",
    ],
  },
  {
    name: "Hyundai Elantra",
    type: "Manual",
    features: ["Dual Control System", "Fuel Efficient", "Student Friendly"],
  },
];

export default function AboutPage() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Est. 2016
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              About <span className="text-accent">Great D-Square</span> Driving School
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-lg">
              Since 2016, we have been on a mission to create confident, safe
              drivers in Lagos. Licensed and certified, Great D-Square Driving School combines
              experienced instructors with modern vehicles to deliver exceptional
              driver education.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Our Story
            </h2>
            <p className="mt-3 text-muted-foreground">
              Founded with a simple goal: make the roads safer, one driver at a
              time.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-7 border border-border/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-bold text-primary text-lg">
                Safety First
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Every lesson, every course, and every decision we make starts
                with safety. Our dual-control vehicles and structured curriculum
                ensure students learn in a secure environment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-border/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-bold text-primary text-lg">
                Student-Centered
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                We adapt to each student&apos;s learning pace and style. Whether
                you&apos;re a nervous first-timer or looking to refine advanced
                skills, our instructors tailor lessons to your needs.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-border/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-success" />
              </div>
              <h3 className="mt-4 font-bold text-primary text-lg">Excellence</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                With a 4.7 Google rating across 13 reviews and hundreds of graduates, we
                hold ourselves to the highest standards. Our commitment to
                excellence drives everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Meet Our Instructors
            </h2>
            <p className="mt-3 text-muted-foreground">
              Experienced, certified, and passionate about helping you succeed.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor) => (
              <div
                key={instructor.name}
                className="bg-white rounded-2xl p-7 border border-border/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="mx-auto h-20 w-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  {instructor.name.charAt(0)}
                </div>
                <h3 className="mt-4 font-bold text-foreground">
                  {instructor.name}
                </h3>
                <p className="text-sm text-accent font-medium">
                  {instructor.role}
                </p>
                <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-center justify-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5 text-success" />
                    {instructor.experience} experience
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5 text-success" />
                    {instructor.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Our Fleet
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Our Training Vehicles
            </h2>
            <p className="mt-3 text-muted-foreground">
              Modern, well-maintained vehicles equipped with dual controls for
              your safety.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.name}
                className="bg-white rounded-2xl p-7 border border-border/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Car className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-bold text-foreground">{vehicle.name}</h3>
                <p className="text-sm text-accent font-medium mt-1">{vehicle.type}</p>
                <ul className="mt-3 space-y-2">
                  {vehicle.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-success shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Our Location
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Visit Us in Yaba
            </h2>
            <p className="mt-3 text-muted-foreground">
              Conveniently located on Montgomery Road, Yaba, Lagos.
            </p>
          </div>
          <div className="mt-12 bg-white rounded-2xl p-8 border border-border/60 max-w-2xl mx-auto text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto" />
            <h3 className="mt-4 font-bold text-foreground text-lg">
              Phase 2, 3 Montgomery Rd
            </h3>
            <p className="mt-2 text-muted-foreground">
              Yaba, Lagos 101212
            </p>
            <a
              href="https://maps.google.com/?q=Phase+2+3+Montgomery+Rd+Yaba+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-light transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
