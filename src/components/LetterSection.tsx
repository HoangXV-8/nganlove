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
            To my heo đẹp
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
              <span className="font-display italic text-xl text-gradient-rose">For Ngan — My Piggy Pot Pie,</span>
            </p>
            <p>
              Từ lần đầu tiên anh nhắn với em, không có một ngày nào anh ngừng nghĩ về em được.
            </p>
            <p>
              Trước khi gặp em, anh thật sự không hiểu hạnh phúc là như thế nào.
            </p>
            <p>
              Em không chỉ cho anh tình thương của em, mà còn cho anh cảm giác được gia đình em đón nhận.
            </p>
            <p>
              Em là ánh sáng rực rỡ của cuộc đời anh, mang đến cho anh hy vọng mà trước đây anh chưa từng có.
            </p>
            <p>
              Nhờ em, anh mới hiểu thế nào là được quan tâm thật lòng, được yêu thương vô điều kiện.
            </p>
            <p>
              Trước khi gặp em, anh chỉ biết sống kiểu "sống thì sống, chết thì chết", không mục đích, không định hướng.
            </p>
            <p>
              Từ ngày lấy em, anh luôn dõi theo em và con.
            </p>
            <p>
              Anh cố gắng từng ngày vì hai mẹ con, vì em và con chính là ý nghĩa trong cuộc sống của anh.
            </p>
            <p>
              Nhân ngày Quốc tế Phụ nữ, anh chúc em được bình an và hạnh phúc.
            </p>
            <p>
              Anh thật sự may mắn khi có em và Minh Hợi trong đời.
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
