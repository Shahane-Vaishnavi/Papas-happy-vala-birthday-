import { Heart, Star, Crown, Sparkles, Music, Coffee, Sun, Moon } from "lucide-react";
import couplePortrait from "@/assets/couple-portrait.jpg";
const qualities = [{
  icon: Star,
  title: "Kind & Caring",
  description: "Guides students and family with endless patience and wisdom"
}, {
  icon: Crown,
  title: "Strong & Protective",
  description: "A pillar of strength who earned respect from everyone in our family"
}, {
  icon: Sparkles,
  title: "Fun & Adventurous",
  description: "Creates wonderful memories and brings people together wherever he goes"
}, {
  icon: Heart,
  title: "Loving & Devoted",
  description: "Dedicated teacher who transforms lives and makes every student successful"
}];
const favorites = [{
  icon: Coffee,
  label: "Morning Coffee",
  value: "Together in bed"
}, {
  icon: Music,
  label: "Our Song",
  value: "The one that plays in our hearts"
}, {
  icon: Sun,
  label: "Best Moments",
  value: "Every moment with you"
}, {
  icon: Moon,
  label: "Night Routine",
  value: "Falling asleep in your arms"
}];
const PapaInfo = () => {
  return <div className="min-h-screen pt-20 pb-24 romantic-gradient">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 opacity-0 animate-fade-in-up" style={{
          animationDelay: '0.1s',
          animationFillMode: 'forwards'
        }}>
            <Heart className="h-4 w-4" fill="currentColor" />
            <span className="text-sm font-medium">The Love of My Life</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up" style={{
          animationDelay: '0.2s',
          animationFillMode: 'forwards'
        }}>
            My Amazing Papa
          </h1>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in-up" style={{
          animationDelay: '0.3s',
          animationFillMode: 'forwards'
        }}>
            The one who holds my heart and makes every day brighter
          </p>
        </div>

        {/* Main Profile Card */}
        <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-medium overflow-hidden mb-16 opacity-0 animate-fade-in-scale" style={{
        animationDelay: '0.3s',
        animationFillMode: 'forwards'
      }}>
          <div className="md:flex">
            {/* Photo */}
            <div className="md:w-2/5 relative group">
              <img alt="My beloved Papa" className="w-full h-64 md:h-full object-cover" src="/lovable-uploads/480ed213-9a8b-47ea-b5f4-bff7ea51e7f0.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Heart className="h-5 w-5 animate-heartbeat" fill="currentColor" />
                  <span className="font-medium">Forever & Always</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="md:w-3/5 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="h-6 w-6 text-gold" />
                <h2 className="font-display text-2xl font-bold text-foreground">About Papa</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">  पप्पा म्हणजे फक्त माझे वडील नाहीत; ते माझे मार्गदर्शक आणि माझी प्रेरणा आहेत.




  पप्पा एक समर्पित शासकीय शाळेचे शिक्षक आहेत. त्यांचे विद्यार्थी त्यांना आदराने भेटतात आणि त्यांच्या मार्गदर्शनाबद्दल आभार मानतात. आमच्या कुटुंबातील ते पहिले व्यक्ती आहेत ज्यांना "पंतप्रधान इंदिरा गांधींनी सर्वोत्तम शिक्षक" पुरस्काराने सन्मानित केले.




  पप्पांनी जवळजवळ संपूर्ण भारत फिरला आहे. प्रत्येक ठिकाणाला त्यांच्याकडे एक कथा असते, प्रत्येक स्मारकाला एक इतिहास. त्यांच्याशिवाय प्रवास करताना मला त्यांची खूप आठवण येते - कारण त्यांच्यासोबत प्रत्येक ठिकाण अविस्मरणीय आठवणी बनतात. 




  आमच्या कुटुंबातील प्रत्येकजण पप्पांचा आदर करतो. त्यांच्या गोष्टी माझा खजिना आहेत आणि त्यांचे प्रेम माझ्या आयुष्यातील सर्वात मोठी देणगी आहे. ते माझे सुरक्षित आश्रयस्थान, माझे घर, माझे सदैव Hero आहेत. 🤗</p>
              
            </div>
          </div>
        </div>

        {/* Qualities Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10 opacity-0 animate-fade-in-up" style={{
          animationDelay: '0.4s',
          animationFillMode: 'forwards'
        }}>
            What Makes Papa Special
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualities.map((quality, index) => {
            const Icon = quality.icon;
            return <div key={quality.title} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center opacity-0 animate-fade-in-up" style={{
              animationDelay: `${0.4 + index * 0.1}s`,
              animationFillMode: 'forwards'
            }}>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{quality.title}</h3>
                  <p className="text-sm text-muted-foreground">{quality.description}</p>
                </div>;
          })}
          </div>
        </div>

        {/* Favorites Section */}
        
      </div>
    </div>;
};
export default PapaInfo;