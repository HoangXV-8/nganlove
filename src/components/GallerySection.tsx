import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import g9 from "@/assets/gallery-9.jpg";
import g10 from "@/assets/gallery-10.jpg";
import g11 from "@/assets/gallery-11.jpg";
import g12 from "@/assets/gallery-12.jpg";
import g13 from "@/assets/gallery-13.jpg";
import g14 from "@/assets/gallery-14.jpg";
import g15 from "@/assets/gallery-15.jpg";
import g16 from "@/assets/gallery-16.jpg";
import g17 from "@/assets/gallery-17.jpg";
import g18 from "@/assets/gallery-18.jpg";

const photos = [
  { src: g1, caption: "Mình đẹp lắm 🌸" },
  { src: g2, caption: "Cánh đồng lúa xanh 🌾" },
  { src: g3, caption: "Ngày trọng đại 👑" },
  { src: g4, caption: "Dưới những chiếc đèn lồng 🏮" },
  { src: g5, caption: "Em tựa vào anh 💕" },
  { src: g6, caption: "Hai con heo 🐷😂" },
  { src: g7, caption: "Bể bóng hạnh phúc ✨" },
  { src: g8, caption: "Nụ hôn ngọt ngào 😘" },
  { src: g9, caption: "Bé lợn & Bé heo 🎂" },
  { src: g10, caption: "Nụ hôn buổi sáng ☀️" },
  { src: g11, caption: "Hai chú lợn con 🐷🐷" },
  { src: g12, caption: "Bể bóng lần 2 😄" },
  { src: g13, caption: "Quán cà phê Nhật 🌿" },
  { src: g14, caption: "Bên hoa giấy 🌺" },
  { src: g15, caption: "Du lịch cùng nhau 🌴" },
  { src: g16, caption: "Nụ cười rạng rỡ 😊" },
  { src: g17, caption: "Cáp treo đôi 🚡" },
  { src: g18, caption: "Nắng vàng miền quê ☀️" },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden" style={{ background: "hsl(var(--petal))" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span
          className="font-body text-xs uppercase tracking-[0.3em] font-bold"
          style={{ color: "hsl(var(--pink))" }}
        >
          ✦ Our Memories ✦
        </span>
        <h2
          className="font-display text-4xl md:text-5xl font-bold mt-3 leading-tight"
          style={{ color: "hsl(var(--rose-red))" }}
        >
          Những Khoảnh Khắc
          <br />
          <span className="text-gradient-gold italic">Của Chúng Mình</span>
        </h2>
      </motion.div>

      {/* Masonry-style grid */}
      <div className="max-w-5xl mx-auto columns-2 md:columns-3 gap-4 space-y-4">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
            style={{ boxShadow: "var(--shadow-card)" }}
            onClick={() => setSelected(i)}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Caption overlay */}
            <div
              className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(to top, hsl(var(--rose-red) / 0.7) 0%, transparent 60%)",
              }}
            >
              <span className="font-body text-sm font-semibold p-4" style={{ color: "hsl(var(--primary-foreground))" }}>
                {photo.caption}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "hsl(0 0% 0% / 0.85)" }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selected].src}
              alt={photos[selected].caption}
              className="w-full rounded-2xl object-contain max-h-[80vh]"
            />
            <p
              className="text-center font-display italic text-lg mt-4"
              style={{ color: "hsl(var(--yellow))" }}
            >
              {photos[selected].caption}
            </p>
            {/* Prev / Next */}
            <div className="absolute inset-y-0 left-0 flex items-center -translate-x-12">
              <button
                className="text-3xl rounded-full w-10 h-10 flex items-center justify-center transition"
                style={{ color: "hsl(var(--primary-foreground))", background: "hsl(var(--pink) / 0.8)" }}
                onClick={() => setSelected((selected - 1 + photos.length) % photos.length)}
              >
                ‹
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center translate-x-12">
              <button
                className="text-3xl rounded-full w-10 h-10 flex items-center justify-center transition"
                style={{ color: "hsl(var(--primary-foreground))", background: "hsl(var(--pink) / 0.8)" }}
                onClick={() => setSelected((selected + 1) % photos.length)}
              >
                ›
              </button>
            </div>
            <button
              className="absolute top-2 right-2 text-xl w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "hsl(var(--rose-red) / 0.8)", color: "hsl(var(--primary-foreground))" }}
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
