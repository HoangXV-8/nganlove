import HeroSection from "@/components/HeroSection";
import LetterSection from "@/components/LetterSection";
import QualitiesSection from "@/components/QualitiesSection";
import CelebrationSection from "@/components/CelebrationSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <LetterSection />
      <QualitiesSection />
      <CelebrationSection />
      {/* Footer */}
      <footer
        className="py-8 text-center font-body text-sm"
        style={{ color: "hsl(var(--muted-foreground))", background: "hsl(var(--petal))" }}
      >
        Made with 💕 for Ngan Tieu · International Women's Day 2025
      </footer>
    </main>
  );
};

export default Index;
