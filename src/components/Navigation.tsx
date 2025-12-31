import { Link, useLocation } from "react-router-dom";
import { Heart, Home, User, BookHeart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
const navItems = [{
  path: "/",
  label: "Home",
  icon: Home
}, {
  path: "/papa",
  label: "My Papa",
  icon: User
}, {
  path: "/our-story",
  label: "A Letter to Papa",
  icon: BookHeart
}];
const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Heart className="h-6 w-6 text-primary group-hover:animate-heartbeat transition-transform" fill="currentColor" />
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map(item => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return <Link key={item.path} to={item.path}>
                  <Button variant={isActive ? "romantic" : "nav"} size="default" className="gap-2">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>;
          })}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border/50 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navItems.map(item => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                    <Button variant={isActive ? "romantic" : "nav"} size="lg" className="w-full justify-start gap-3">
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Button>
                  </Link>;
          })}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;
