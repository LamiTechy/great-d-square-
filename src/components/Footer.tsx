import Link from "next/link";
import { Car, Phone, MapPin, ArrowUpRight, Clock } from "lucide-react";
import { hours } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="bg-primary-light rounded-xl p-2 shadow-lg shadow-primary-light/30">
                <Car className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold">Great D-Square</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-light">
                  Driving School
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Building confident, safe drivers in Yaba, Lagos. Professional
              instruction with a personal touch. Open 7 days a week.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className={`h-4 w-4 ${s <= 4 ? "text-accent fill-accent" : "text-accent/40"}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/60">4.7 &middot; 13 Google Reviews</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/courses", label: "Our Courses" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About Us" },
                { href: "/testimonials", label: "Reviews" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Enroll Now" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-accent-light transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Courses
            </h3>
            <ul className="space-y-3 text-sm">
              {["Beginner Course", "Intensive Course", "Refresher Course", "Defensive Driving"].map(
                (course) => (
                  <li key={course}>
                    <span className="text-white/50">{course}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-white/50">
                <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="h-3.5 w-3.5 text-accent-light" />
                </div>
                <a href="tel:+2348039798884" className="hover:text-white transition-colors">
                  0803 979 8884
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50">
                <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-3.5 w-3.5 text-accent-light" />
                </div>
                <span>Phase 2, 3 Montgomery Rd, Yaba, Lagos 101212</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                <Clock className="h-4 w-4 text-accent-light" />
                Hours
              </h4>
              <div className="space-y-1.5 text-sm">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-white/50">
                    <span>{h.day}</span>
                    <span className={h.day === "Sunday" ? "text-accent-light font-medium" : ""}>
                      {h.open} – {h.close}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/30">
          <p>&copy; {new Date().getFullYear()} Great D-Square Driving School. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/faq" className="hover:text-white/50 transition-colors">
              Privacy
            </Link>
            <Link href="/faq" className="hover:text-white/50 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
