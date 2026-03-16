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
  { src: portfolioVeneers, title: "Fațete ceramice frontale", cat: "Fațete" as const, material: "Feldspat" },
  { src: portfolioZirconia, title: "Coroane zirconiu full contour", cat: "Coroane" as const, material: "Katana Zirconia" },
  { src: portfolioEmax, title: "Punte E-max anterioară", cat: "Coroane" as const, material: "IPS e.max" },
  { src: portfolioImplant, title: "Lucrare pe implant cu bont custom", cat: "Implanturi" as const, material: "Ti Grade 5" },
  { src: portfolioDigital, title: "Design digital Exocad", cat: "Digital" as const, material: "Software" },
  { src: portfolioFeldspat, title: "Stratificare feldspatică sub microscop", cat: "Fațete" as const, material: "Vita VM13" },
];

const categories: Category[] = ["Toate", "Fațete", "Coroane", "Implanturi", "Digital"];

const Lucrari = () => {
  const [active, setActive] = useState<Category>("Toate");
  const filtered = active === "Toate" ? works : works.filter((w) => w.cat === active);

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-xl mb-12"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Portofoliu
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Lucrări recente
            </h1>
            <p className="mt-4 text-muted-foreground">
              Fotografii macro ale lucrărilor noastre — fiecare detaliu contează.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((work) => (
                <motion.div
                  key={work.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card cursor-pointer"
                >
                  <img
                    src={work.src}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-end">
                    <div className="p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-sm font-medium text-primary-foreground">{work.title}</p>
                      <p className="text-xs text-primary-foreground/70 mt-1">{work.material}</p>
                    </div>
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
