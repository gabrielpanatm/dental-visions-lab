import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import portfolioVeneers from "@/assets/portfolio-veneers.jpg";
import portfolioZirconia from "@/assets/portfolio-zirconia.jpg";
import portfolioEmax from "@/assets/portfolio-emax.jpg";
import portfolioImplant from "@/assets/portfolio-implant.jpg";
import portfolioDigital from "@/assets/portfolio-digital.jpg";
import portfolioFeldspat from "@/assets/portfolio-feldspat.jpg";

const ease = [0.2, 0, 0, 1] as const;

type Category = "Toate" | "Fațete" | "Coroane" | "Implanturi" | "Digital";

const works = [
  { src: portfolioVeneers, title: "Fațete ceramice frontale", cat: "Fațete" as const, material: "Feldspat", year: "2025" },
  { src: portfolioZirconia, title: "Coroane zirconiu full contour", cat: "Coroane" as const, material: "Katana Zirconia", year: "2025" },
  { src: portfolioEmax, title: "Punte E-max anterioară", cat: "Coroane" as const, material: "IPS e.max", year: "2024" },
  { src: portfolioImplant, title: "Lucrare pe implant cu bont custom", cat: "Implanturi" as const, material: "Ti Grade 5", year: "2024" },
  { src: portfolioDigital, title: "Design digital Exocad", cat: "Digital" as const, material: "Software Exocad", year: "2025" },
  { src: portfolioFeldspat, title: "Stratificare feldspatică sub microscop", cat: "Fațete" as const, material: "Vita VM13", year: "2024" },
];

const categories: Category[] = ["Toate", "Fațete", "Coroane", "Implanturi", "Digital"];

const Lucrari = () => {
  const [active, setActive] = useState<Category>("Toate");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const filtered = active === "Toate" ? works : works.filter((w) => w.cat === active);

  return (
    <Layout>
      {/* Header */}
      <section className="pt-12 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
                  Portofoliu
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.05]">
                Lucrări
                <br />
                <span className="text-primary">recente</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fotografii macro ale lucrărilor noastre — fiecare detaliu contează.
                Toate restaurările sunt realizate cu materiale certificate și verificate sub magnificare.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-background/90 backdrop-blur-xl border-b border-border/50 py-4">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card text-muted-foreground hover:text-foreground shadow-card"
                }`}
              >
                {cat}
                {active === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-primary rounded-xl -z-10"
                    transition={{ duration: 0.3, ease }}
                  />
                )}
              </button>
            ))}
            <div className="ml-auto hidden md:flex items-center text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "lucrare" : "lucrări"}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((work, idx) => (
                <motion.div
                  key={work.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, ease }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500 cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={work.src}
                      alt={work.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredIdx !== null && hoveredIdx !== idx
                          ? "scale-100 brightness-75"
                          : "group-hover:scale-110"
                      }`}
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <motion.div
                      initial={false}
                      animate={hoveredIdx === idx ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <span className="inline-block text-[10px] font-medium tracking-[0.15em] uppercase text-primary mb-2">
                        {work.cat} — {work.year}
                      </span>
                      <h3 className="text-lg font-semibold text-primary-foreground">{work.title}</h3>
                      <p className="text-xs text-primary-foreground/60 mt-1.5">{work.material}</p>
                    </motion.div>
                  </div>

                  {/* Corner index */}
                  <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-primary-foreground/0 group-hover:text-primary-foreground/40 transition-colors duration-300">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Lucrari;
