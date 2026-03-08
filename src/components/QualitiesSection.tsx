import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, BookOpen, Users, Baby, ChefHat, Laugh } from "lucide-react";

const qualities = [
  {
    icon: Heart,
    title: "Loving Heart",
    description:
      "You put others before yourself — always. Your love isn't just felt, it's lived every single day in the little things you do.",
    color: "pink",
    emoji: "💕",
  },
  {
    icon: ChefHat,
    title: "Magical Cook",
    description:
      "You turn every meal into an act of love. Food prepared with your hands tastes like home, warmth, and care in every bite.",
    color: "purple",
    emoji: "🍜",
  },
  {
    icon: Users,
    title: "Empathetic Teacher",
    description:
      "Your ability to connect with others and teach with deep empathy is rare. You don't just instruct — you transform.",
    color: "pink",
    emoji: "📚",
  },
  {
    icon: Baby,
    title: "Wonderful Mom",
    description:
      "You pour love, patience, and wisdom into your children every day. Being a mom comes naturally to you — and beautifully so.",
    color: "purple",
    emoji: "👶",
  },
  {
    icon: BookOpen,
    title: "Well-Educated",
    description:
      "A Bachelor's in English — your passion for language, literature, and communication shines in everything you do.",
    color: "pink",
    emoji: "🎓",
  },
  {
    icon: Laugh,
    title: "Infectious Personality",
    description:
      "Your humor and warmth are electric. You light up my life and everyone whose lives you touched — people are drawn to your brilliance and joy.",
    color: "purple",
    emoji: "✨",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function QualitiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: "var(--gradient-hero)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="font-body text-xs uppercase tracking-[0.3em] font-bold"
            style={{ color: "hsl(var(--pink))" }}
          >
            ✦ What Makes Her Extraordinary ✦
          </span>
          <h2
            className="font-display text-4xl md:text-5xl mt-3 font-semibold"
            style={{ color: "hsl(var(--rose-red))" }}
          >
            The Woman Behind the Magic
          </h2>
          <p
            className="font-body mt-4 text-base max-w-xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            These are my favorite things about you.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualities.map((q, i) => (
            <QualityCard key={q.title} quality={q} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QualityCard({
  quality,
  index,
  inView,
}: {
  quality: (typeof qualities)[0];
  index: number;
  inView: boolean;
}) {
  const isPurple = quality.color === "purple";

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="rounded-3xl p-7 flex flex-col gap-4 group cursor-default"
      style={{
        background: "hsl(var(--card))",
        boxShadow: "var(--shadow-petal)",
        border: `1px solid hsl(var(--${isPurple ? "purple" : "pink"}) / 0.2)`,
      }}
    >
      {/* Icon area */}

      <div>
        <h3
          className="font-display text-xl font-semibold mb-2"
          style={{ color: isPurple ? "hsl(var(--purple))" : "hsl(var(--pink))" }}
        >
          {quality.title}
        </h3>
        <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
          {quality.description}
        </p>
      </div>
    </motion.div>
  );
}
