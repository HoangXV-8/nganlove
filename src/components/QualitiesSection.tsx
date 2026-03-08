import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, BookOpen, Users, Baby, ChefHat, Laugh } from "lucide-react";

const qualities = [
  {
    icon: Heart,
    title: "Loving Heart",
    description:
      "She puts others before herself — always. Her love isn't just felt, it's lived every single day in the little things she does.",
    color: "pink",
    emoji: "💕",
  },
  {
    icon: ChefHat,
    title: "Magical Cook",
    description:
      "She turns every meal into an act of love. Food prepared with her hands tastes like home, warmth, and care in every bite.",
    color: "purple",
    emoji: "🍜",
  },
  {
    icon: Users,
    title: "Empathetic Teacher",
    description:
      "Her ability to connect with others and teach with deep empathy is rare. She doesn't just instruct — she transforms.",
    color: "pink",
    emoji: "📚",
  },
  {
    icon: Baby,
    title: "Wonderful Mom",
    description:
      "She pours love, patience, and wisdom into her children every day. Being a mom comes naturally to her — and beautifully so.",
    color: "purple",
    emoji: "👶",
  },
  {
    icon: BookOpen,
    title: "Well-Educated",
    description:
      "A Bachelor's in English — her passion for language, literature, and communication shines in everything she does.",
    color: "pink",
    emoji: "🎓",
  },
  {
    icon: Laugh,
    title: "Infectious Personality",
    description:
      "Her humor and warmth are electric. She lights up every room she enters — people are drawn to her brilliance and joy.",
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
            These are just a few of the countless reasons why Ngan is one in a million.
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
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
        style={{
          background: isPurple ? "hsl(var(--purple-light))" : "hsl(var(--pink-light))",
        }}
      >
        <span>{quality.emoji}</span>
      </div>

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
