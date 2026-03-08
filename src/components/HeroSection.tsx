import { motion } from "framer-motion";
import heroFloral from "@/assets/hero-floral.jpg";
import floralAccent from "@/assets/floral-accent.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Soft gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Background floral image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={heroFloral}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Floating petal decorations */}
      <FloatingPetals />

      {/* Top floral accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 mb-6"
      >
        <img
          src={floralAccent}
          alt=""
          className="w-64 md:w-80 mx-auto animate-float"
        />
      </motion.div>

      {/* Main text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 text-center px-6"
      >
        {/* Women's Day badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 border"
          style={{
            background: "hsl(var(--pink-light))",
            borderColor: "hsl(var(--pink) / 0.4)",
          }}
        >
          <span className="text-lg">🌸</span>
          <span
            className="text-sm font-body font-bold uppercase tracking-widest"
            style={{ color: "hsl(var(--rose-red))" }}
          >
            International Women's Day · March 8
          </span>
          <span className="text-lg">🌸</span>
        </motion.div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-4">
          <span className="text-gradient-rose">Ngan</span>
          <br />
          <span className="text-gradient-gold italic">Tieu</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-display italic text-xl md:text-2xl mt-4"
          style={{ color: "hsl(var(--rose-red))" }}
        >
          A woman who lights up every room she enters
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <div className="h-px w-16" style={{ background: "hsl(var(--pink) / 0.5)" }} />
          <span className="text-2xl">✦</span>
          <div className="h-px w-16" style={{ background: "hsl(var(--yellow) / 0.5)" }} />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs uppercase tracking-widest" style={{ color: "hsl(var(--muted-foreground))" }}>
          Scroll to celebrate
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ color: "hsl(var(--blush))" }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingPetals() {
  const petals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${8 + Math.random() * 6}s`,
    size: `${12 + Math.random() * 16}px`,
    emoji: ["🌸", "🌺", "✿", "❀"][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute animate-petal-fall"
          style={{
            left: p.left,
            top: "-20px",
            fontSize: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: 0.6,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
