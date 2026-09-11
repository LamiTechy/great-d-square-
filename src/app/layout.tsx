import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Great D-Square Driving School — Learn to Drive with Confidence in Lagos",
    template: "%s | Great D-Square Driving School",
  },
  description:
    "Professional driving instruction in Yaba, Lagos. Beginner, intensive, refresher & defensive driving courses. 4.7 rated with 13 Google reviews. Open 7 days a week. Enroll today!",
  keywords: [
    "driving school Lagos",
    "driving lessons Yaba",
    "learn to drive Lagos",
    "driving instructor Yaba",
    "defensive driving Lagos",
    "driving school Yaba Lagos",
    "Great D-Square Driving School",
    "driving school open Sunday Lagos",
  ],
  openGraph: {
    title: "Great D-Square Driving School — Learn to Drive with Confidence in Lagos",
    description:
      "Professional driving instruction in Yaba, Lagos. Beginner, intensive, refresher & defensive driving courses. 4.7 rated with 13 Google reviews. Open 7 days a week.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: "Great D-Square Driving School",
    image: "",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Phase 2, 3 Montgomery Rd",
      addressLocality: "Yaba",
      addressRegion: "Lagos",
      postalCode: "101212",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.5158",
      longitude: "3.3896",
    },
    telephone: "+2348039798884",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "12:00", closes: "16:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "13",
    },
    priceRange: "₦85,000 - ₦250,000",
    areaServed: {
      "@type": "City",
      name: "Lagos",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
