import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LetterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "hsl(var(--petal))" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "hsl(var(--blush-light))" }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "hsl(var(--gold-light))" }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="font-body text-xs uppercase tracking-[0.3em] font-bold"
            style={{ color: "hsl(var(--pink))" }}
          >
            ✦ A Love Letter ✦
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 font-semibold" style={{ color: "hsl(var(--rose-red))" }}>
            To My Extraordinary Wife
          </h2>
        </motion.div>

        {/* Letter card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl p-8 md:p-12 relative"
          style={{
            background: "hsl(var(--card))",
            boxShadow: "var(--shadow-card)",
            borderLeft: "4px solid hsl(var(--pink))",
          }}
        >
          {/* Quote mark */}
          <div
            className="font-display text-8xl leading-none absolute -top-4 left-8 opacity-20"
            style={{ color: "hsl(var(--pink))" }}
          >
            "
          </div>

          <div className="space-y-5 font-body text-lg leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>
            <p>
              <span className="font-display italic text-xl text-gradient-rose">My dearest Ngan,</span>
            </p>
            <p>
              On this International Women's Day, I want you to know just how truly extraordinary you are. 
              Every single day, you remind me what it means to love unconditionally — putting others first 
              with a heart so warm, so generous, it makes the world a brighter place.
            </p>
            <p>
              The way you care for our family, the way you show up for everyone around you — selflessly, 
              joyfully, with everything you have — is something I will forever be grateful for. You are 
              not just an amazing wife. You are a <span className="font-display italic" style={{ color: "hsl(var(--blush))" }}>remarkable mother, a gifted teacher, and a beautiful soul.</span>
            </p>
            <p>
              Your English degree speaks to your love of language and learning, but it's your ability to 
              connect with people — to truly see them, understand them, and lift them up — that sets you 
              apart. Your empathy is your superpower.
            </p>
            <p>
              And then there's your humor — the kind that catches you off guard and fills the room with 
              laughter. You light up every room you walk into, Ngan. Every single one.
            </p>
            <p>
              Today and every day, I celebrate you. Thank you for being <em>you</em>.
            </p>
            <p className="pt-4 font-display italic text-xl text-gradient-gold">
              With all my love, always 💛
            </p>
          </div>

          {/* Decorative bottom */}
          <div className="flex justify-center mt-8 gap-3 text-2xl opacity-50">
            <span>🌸</span>
            <span>✦</span>
            <span>🌸</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
