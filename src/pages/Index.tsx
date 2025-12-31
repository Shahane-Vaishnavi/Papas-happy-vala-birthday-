import { Link } from "react-router-dom";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhotoGallery from "@/components/PhotoGallery";
import heroImage from "@/assets/hero-birthday.avif";
const Index = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="absolute inset-0 hero-gradient opacity-40" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20 pb-32 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Decorative Hearts */}
            <div className="flex justify-center gap-4 mb-6">
              <Heart className="h-8 w-8 text-primary animate-float-heart opacity-0 animate-fade-in-up" fill="currentColor" style={{
              animationDelay: '0.1s',
              animationFillMode: 'forwards'
            }} />
              <Sparkles className="h-6 w-6 text-gold opacity-0 animate-fade-in-up" style={{
              animationDelay: '0.2s',
              animationFillMode: 'forwards'
            }} />
              <Heart className="h-8 w-8 text-primary animate-float-heart opacity-0 animate-fade-in-up" fill="currentColor" style={{
              animationDelay: '0.3s',
              animationFillMode: 'forwards'
            }} />
            </div>

            {/* Main Title */}
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up" style={{
            animationDelay: '0.2s',
            animationFillMode: 'forwards'
          }}>Happy Birthday Papa</h1>
            

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up" style={{
            animationDelay: '0.4s',
            animationFillMode: 'forwards'
          }}>Welcome to our little corner of the internet where I celebrate the man I admire the most — my incredible Papa.<span className="text-primary font-semibold"> my incredible Papa</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{
            animationDelay: '0.5s',
            animationFillMode: 'forwards'
          }}>
              <Link to="/papa">
                <Button variant="romantic" size="xl" className="gap-2 w-full sm:w-auto">
                  <Heart className="h-5 w-5" fill="currentColor" />
                  Meet My Papa
                </Button>
              </Link>
              <Link to="/our-story">
                <Button variant="romantic-outline" size="xl" className="gap-2 w-full sm:w-auto">
                  A Letter to Papa
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 romantic-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up" style={{
            animationDelay: '0.1s',
            animationFillMode: 'forwards'
          }}>
              Our Beautiful Moments
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto opacity-0 animate-fade-in-up" style={{
            animationDelay: '0.2s',
            animationFillMode: 'forwards'
          }}>Click on any one photo </p>
          </div>

          <PhotoGallery linkTo="/papa" />
        </div>
      </section>

      {/* Love Quote Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{
          animationDelay: '0.1s',
          animationFillMode: 'forwards'
        }}>
            <Heart className="h-12 w-12 text-primary mx-auto mb-6 animate-heartbeat" fill="currentColor" />
            <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed mb-6">"You were my first teacher and my first hero,
the reason I stand strong today.
Your smile feels like pure comfort,
and your presence is my forever support"</blockquote>
            <p className="text-muted-foreground">— Vaishnavi Shahane</p>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;