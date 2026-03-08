import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroFloral from "@/assets/hero-floral.jpg";

export default function CelebrationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroFloral} alt="" className="w-full h-full object-cover opacity-15" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, hsl(340 60% 96% / 0.97) 0%, hsl(42 60% 95% / 0.95) 100%)",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Animated stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl mb-6"
        >
          🌸 🌺 🌸
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
           <span
             className="font-body text-xs uppercase tracking-[0.3em] font-bold"
             style={{ color: "hsl(var(--pink))" }}
           >
             ✦ Celebrating You Today & Always ✦
           </span>

           <h2
             className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight"
             style={{ color: "hsl(var(--rose-red))" }}
           >
             Happy International
             <br />
             <span className="text-gradient-gold italic">Women's Day</span>
           </h2>

           <p
             className="font-body text-lg leading-relaxed mb-10"
             style={{ color: "hsl(var(--muted-foreground))" }}
           >
             To Ngan — a woman of courage, compassion, laughter, and love. 
             The world is richer, warmer, and more beautiful because of you.
             <br />
             <br />
              <span className="font-display italic text-xl" style={{ color: "hsl(var(--rose-red))" }}>
                "Lia thia quen chậu vợ chồng quen hơi"
              </span>
           </p>
         </motion.div>

         {/* Celebration badge */}
         <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={inView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="inline-block"
         >
           <div
             className="px-10 py-5 rounded-full font-display text-xl font-semibold animate-pulse-soft"
             style={{
               background: "linear-gradient(135deg, hsl(var(--pink)), hsl(var(--rose-red)))",
               color: "hsl(var(--primary-foreground))",
               boxShadow: "var(--shadow-glow)",
             }}
           >
             🐷 Con Lợn thương con heo đẹp 🌸
           </div>
        </motion.div>

        {/* Floating hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex justify-center gap-6 text-3xl"
        >
          {["💕", "🌸", "✨", "🌺", "💛", "🌸", "💕"].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2 + i * 0.3,
                delay: i * 0.2,
              }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
