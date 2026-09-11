import { Metadata } from "next";
import { Camera, Car, MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See our training vehicles, practice areas, and students at Great D-Square Driving School in Yaba, Lagos.",
};

const galleryCategories = [
  {
    title: "Our Training Vehicles",
    description: "Modern, well-maintained dual-control vehicles for your safety",
    icon: Car,
    images: [
      {
        src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&q=80",
        alt: "Toyota Corolla training vehicle at Great D-Square Driving School",
      },
      {
        src: "https://images.unsplash.com/photo-1606611013016-969c19ba27a5?w=600&q=80",
        alt: "Honda Civic training vehicle at Great D-Square Driving School",
      },
      {
        src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80",
        alt: "Hyundai Elantra training vehicle at Great D-Square Driving School",
      },
    ],
  },
  {
    title: "Training Sessions",
    description: "Students learning practical driving skills with our instructors",
    icon: Users,
    images: [
      {
        src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
        alt: "Student during driving lesson at Great D-Square Driving School",
      },
      {
        src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80",
        alt: "Driving instructor teaching student at Great D-Square Driving School",
      },
      {
        src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80",
        alt: "Practical driving lesson at Great D-Square Driving School",
      },
    ],
  },
  {
    title: "Our Location",
    description: "Located on Montgomery Road, Yaba, Lagos",
    icon: MapPin,
    images: [
      {
        src: "https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=600&q=80",
        alt: "Yaba area in Lagos",
      },
      {
        src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&q=80",
        alt: "Lagos neighborhood near Great D-Square Driving School",
      },
      {
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
        alt: "Lagos cityscape near driving school location",
      },
    ],
  },
];

export default function GalleryPage() {
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
              Gallery
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              See Us in Action
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Take a look at our training vehicles, practice sessions, and our
              location in Yaba, Lagos.
            </p>
          </div>
        </div>
      </section>

      {galleryCategories.map((category) => (
        <section key={category.title} className="py-16 sm:py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {category.title}
                </h2>
              </div>
            </div>
            <p className="mt-2 text-muted-foreground mb-8 ml-[52px]">
              {category.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((image, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Camera className="h-4 w-4" />
                      <span>{image.alt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-surface py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            Visit Us Today
          </h2>
          <p className="mt-3 text-muted-foreground">
            Come see our facilities and meet our instructors. We are located on
            Montgomery Road, Yaba, Lagos.
          </p>
          <a
            href="https://maps.google.com/?q=Phase+2+3+Montgomery+Rd+Yaba+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-light transition-colors"
          >
            <MapPin className="h-4 w-4" />
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
}
