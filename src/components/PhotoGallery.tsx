import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import moment1 from "@/assets/moment-1.jpeg";
import moment2 from "@/assets/moment-2.jpeg";
import moment3 from "@/assets/moment-3.jpeg";

interface PhotoGalleryProps {
  linkTo?: string;
}

const PhotoGallery = ({ linkTo = "/papa" }: PhotoGalleryProps) => {
  const photos = [
    { id: 1, src: moment1, alt: "Beautiful moment with Papa" },
    { id: 2, src: moment2, alt: "Special celebration together" },
    { id: 3, src: moment3, alt: "Precious family time" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {photos.map((photo, index) => (
        <Link
          key={photo.id}
          to={linkTo}
          className={`group relative overflow-hidden rounded-2xl shadow-medium aspect-square cursor-pointer animate-fade-in-up opacity-0`}
          style={{ animationDelay: `${0.2 + index * 0.15}s`, animationFillMode: 'forwards' }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-primary/90 rounded-full p-3 animate-pulse-glow">
              <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-3 left-3 right-3 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm font-medium">Click to explore</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PhotoGallery;
