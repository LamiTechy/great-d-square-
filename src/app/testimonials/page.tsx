"use client";

import { useState } from "react";
import { Star, MessageSquare, ThumbsUp } from "lucide-react";
import { StarRating } from "@/components/Cards";

const testimonials = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    rating: 5,
    date: "August 2026",
    message:
      "I was terrified of driving before joining Great D-Square. My instructor was incredibly patient and made me feel safe from day one. Passed my test on the first attempt!",
  },
  {
    id: 2,
    name: "Tunde Bakare",
    rating: 5,
    date: "July 2026",
    message:
      "The intensive course was exactly what I needed. Professional, well-structured, and the instructors truly know how to prepare you for Lagos road conditions.",
  },
  {
    id: 3,
    name: "Fatima Abdul-Rahman",
    rating: 4,
    date: "July 2026",
    message:
      "Flexible scheduling allowed me to learn around my work hours. The instructors are knowledgeable and always encouraging. Highly recommend.",
  },
  {
    id: 4,
    name: "Emeka Nwosu",
    rating: 5,
    date: "June 2026",
    message:
      "Best driving school in Yaba. The dual-control vehicles gave me peace of mind, and the instructors explain everything clearly. Worth every naira.",
  },
  {
    id: 5,
    name: "Blessing Eze",
    rating: 5,
    date: "June 2026",
    message:
      "I failed twice before coming to Great D-Square. Their structured approach and practice sessions built my confidence. Finally passed with flying colors!",
  },
  {
    id: 6,
    name: "Yusuf Abdullahi",
    rating: 5,
    date: "May 2026",
    message:
      "The defensive driving course was excellent. I learned hazard perception skills that I use every day on Lagos roads. Highly recommend this school.",
  },
  {
    id: 7,
    name: "Ngozi Obi",
    rating: 4,
    date: "May 2026",
    message:
      "Great experience overall. The classroom sessions complemented the practical lessons perfectly. I feel confident driving in any condition now.",
  },
  {
    id: 8,
    name: "Oluwaseun Adeyemi",
    rating: 5,
    date: "April 2026",
    message:
      "From booking to passing my test, everything was seamless. The instructors are friendly, professional, and truly care about your progress.",
  },
  {
    id: 9,
    name: "Amina Bello",
    rating: 5,
    date: "April 2026",
    message:
      "I had zero driving experience before Great D-Square. The beginner course took me from nervous to confident in just six weeks. Amazing instructors!",
  },
  {
    id: 10,
    name: "Chidi Ibe",
    rating: 5,
    date: "March 2026",
    message:
      "Modern vehicles, patient instructors, and a curriculum that actually prepares you for the road. I recommend Great D-Square to all my friends.",
  },
];

function StarRatingSelector({
  rating,
  onRate,
}: {
  rating: number;
  onRate: (r: number) => void;
}) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRate(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="focus:outline-none"
        >
          <Star
            className={`h-6 w-6 transition-colors ${
              star <= (hover || rating)
                ? "text-accent fill-accent"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

function ReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <ThumbsUp className="h-12 w-12 text-accent mx-auto" />
        <h3 className="mt-4 text-xl font-bold text-primary">
          Thank You for Your Review!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Your feedback helps us improve and helps other students choose
          Great D-Square.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setRating(0);
            setMessage("");
          }}
          className="mt-6 text-primary font-semibold hover:text-primary-light transition-colors"
        >
          Submit Another Review
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-primary mb-1"
        >
          Your Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-primary mb-1">
          Your Rating
        </label>
        <StarRatingSelector rating={rating} onRate={setRating} />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary mb-1"
        >
          Your Review
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
          placeholder="Share your experience at Great D-Square Driving School..."
        />
      </div>
      <button
        type="submit"
        disabled={!name || rating === 0 || !message}
        className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit Review
      </button>
    </form>
  );
}

export default function TestimonialsPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Testimonials & Reviews
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              See what our students have to say about their experience at
              Great D-Square Driving School. Rated 4.7 on Google with 13 reviews.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <span className="text-3xl sm:text-4xl font-bold text-primary">4.7</span>
                <Star className="h-6 w-6 text-accent fill-accent" />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Google Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                13
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Google Reviews
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                2,000+
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Students Trained
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-7 border border-border/60 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <StarRating rating={t.rating} />
                <p className="mt-4 text-muted-foreground leading-relaxed italic">
                  &ldquo;{t.message}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-medium text-sm text-foreground">{t.name}</span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                        <MessageSquare className="h-3 w-3" />
                        {t.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://g.page/r/GreatDSquareDrivingSchool/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-light transition-colors"
            >
              Leave a Review on Google
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="mt-20 max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                Share Your Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-4">
                Submit a Review
              </h2>
              <p className="mt-3 text-muted-foreground">
                Had a great experience? Share your story to help other students.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-border/60">
              <ReviewForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
