import HeroSection from "@/components/HeroSection";
import LetterSection from "@/components/LetterSection";
import QualitiesSection from "@/components/QualitiesSection";
import GallerySection from "@/components/GallerySection";
import CelebrationSection from "@/components/CelebrationSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <LetterSection />
      <QualitiesSection />
      <GallerySection />
      <CelebrationSection />
      {/* Footer */}
      <footer
        className="py-8 text-center font-body text-sm"
        style={{ color: "hsl(var(--muted-foreground))", background: "hsl(var(--petal))" }}
      >
        Made with 💕 to Ngan - my wife, best friend, beauty queen, support and super hero
      </footer>
    </main>
  );
};

export default Index;
