import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${15 + Math.random() * 10}s`,
    size: 12 + Math.random() * 16,
    opacity: 0.3 + Math.random() * 0.4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-primary animate-float-up"
          style={{
            left: heart.left,
            bottom: '-50px',
            width: heart.size,
            height: heart.size,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            opacity: heart.opacity,
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
