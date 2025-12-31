import { Heart, Calendar, MapPin, Star, Sparkles, Gift, Home as HomeIcon, Infinity } from "lucide-react";
import timelineBg from "@/assets/timeline-bg.jpg";
import couplePortrait from "@/assets/couple-portrait.jpg";
const timelineEvents = [{
  date: "The Beginning",
  title: "When We First Met",
  description: "The moment our eyes met, something magical happened. Little did we know that this encounter would change our lives forever.",
  icon: Sparkles,
  highlight: true
}, {
  date: "First Date",
  title: "The Start of Something Beautiful",
  description: "Nervous butterflies, endless conversations, and the realization that we had found something truly special.",
  icon: Heart
}, {
  date: "Falling in Love",
  title: "When I Knew You Were The One",
  description: "Every moment together confirmed what my heart already knew — you were my person, my soulmate, my forever.",
  icon: Star
}, {
  date: "Special Milestone",
  title: "A Promise of Forever",
  description: "A moment that sealed our love and commitment to each other. A promise to love, cherish, and support one another always.",
  icon: Gift
}, {
  date: "Building Our Life",
  title: "Creating Our Home",
  description: "Together, we built more than just a home — we created a sanctuary filled with love, laughter, and countless precious memories.",
  icon: HomeIcon
}, {
  date: "Today & Forever",
  title: "Our Love Continues",
  description: "Every day I fall more in love with you. Our story is still being written, and I can't wait for all the chapters to come.",
  icon: Infinity
}];
const OurStory = () => {
  return <div className="min-h-screen pt-20 pb-24">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            A Letter to Papa
          </h1>
        </div>
      </section>


      {/* Featured Photo */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto opacity-0 animate-fade-in-scale" style={{
          animationDelay: '0.4s',
          animationFillMode: 'forwards'
        }}>
            <div className="relative p-3 bg-gradient-to-br from-primary/20 via-rose-light/30 to-gold/20 rounded-3xl">
              <div className="relative p-1 bg-card rounded-2xl shadow-medium">
                <div className="relative rounded-xl overflow-hidden border-4 border-gold/40 group">
                  <img src={couplePortrait} alt="Us together" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      

      {/* Closing Message */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{
          animationDelay: '0.5s',
          animationFillMode: 'forwards'
        }}>
            <div className="flex justify-center gap-2 mb-6">
              <Heart className="h-8 w-8 text-primary animate-float-heart" fill="currentColor" />
              <Heart className="h-6 w-6 text-rose-medium animate-float-heart animation-delay-200" fill="currentColor" />
              <Heart className="h-8 w-8 text-primary animate-float-heart animation-delay-400" fill="currentColor" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              To My Papa
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-bold text-center font-serif">Thank you, Papa, for being my guide when I was lost and my strength when I felt weak. For teaching me not just from books, but from life itself. For showing me the world through your eyes and filling every journey with meaning. You never asked for anything in return, yet you gave me everything. I am who I am because of you, and no words can truly express my gratitude for your love.</p>
            <p className="font-display text-xl text-primary italic">
              I love you more than words could ever express.
            </p>
            <div className="mt-8">
              
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default OurStory;