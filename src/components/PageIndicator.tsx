import { useLocation, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const pages = [
  { path: "/", label: "Home" },
  { path: "/papa", label: "My Papa" },
  { path: "/our-story", label: "Our Story" },
];

const PageIndicator = () => {
  const location = useLocation();
  const currentIndex = pages.findIndex((p) => p.path === location.pathname);

  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 bg-card/90 backdrop-blur-md rounded-full px-4 py-2 shadow-medium border border-border/50">
      {/* Previous Button */}
      {prevPage ? (
        <Link to={prevPage.path}>
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:text-primary">
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{prevPage.label}</span>
          </Button>
        </Link>
      ) : (
        <div className="w-8" />
      )}

      {/* Page Dots */}
      <div className="flex items-center gap-2">
        {pages.map((page, index) => (
          <Link key={page.path} to={page.path}>
            <div
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-primary/50"
              }`}
            />
          </Link>
        ))}
      </div>

      {/* Next Button */}
      {nextPage ? (
        <Link to={nextPage.path}>
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:text-primary">
            <span className="hidden sm:inline">{nextPage.label}</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <div className="w-8" />
      )}
    </div>
  );
};

export default PageIndicator;
