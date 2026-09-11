"use client";

import Link from "next/link";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
}

export function StarRating({ rating, size = 16 }: StarRatingProps) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "text-accent fill-accent" : "text-stone-300"
          }`}
        />
      ))}
    </div>
  );
}

interface TestimonialCardProps {
  name: string;
  rating: number;
  message: string;
}

export function TestimonialCard({ name, rating, message }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-sm border border-border/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <StarRating rating={rating} />
      <p className="mt-5 text-muted-foreground leading-relaxed italic">
        &ldquo;{message}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div className="h-11 w-11 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md shadow-primary/20">
          {name.charAt(0)}
        </div>
        <div>
          <span className="font-bold text-sm text-foreground">{name}</span>
          <p className="text-xs text-muted-foreground">Verified Student</p>
        </div>
      </div>
    </div>
  );
}

interface CourseCardProps {
  name: string;
  description: string;
  price: number;
  features: string[];
}

export function CourseCard({
  name,
  description,
  price,
  features,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-sm border border-border/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-primary">₦{price.toLocaleString()}</span>
          </div>
        </div>
        <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <ul className="mt-5 space-y-2.5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <svg
                className="h-4 w-4 text-success mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href={`/contact?course=${encodeURIComponent(name)}`}
          className="mt-7 block text-center py-3 px-4 rounded-xl font-semibold text-sm bg-primary text-white hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-primary">{value}</div>
      <div className="mt-1.5 text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
}
