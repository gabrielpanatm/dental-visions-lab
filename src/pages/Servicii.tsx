import { motion } from "framer-motion";
import { ArrowRight, Layers, Diamond, Scan, Box, Crosshair, Palette, Clock, Package } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import portfolioZirconia from "@/assets/portfolio-zirconia.jpg";
import portfolioEmax from "@/assets/portfolio-emax.jpg";
import portfolioDigital from "@/assets/portfolio-digital.jpg";

const ease = [0.2, 0, 0, 1] as const;

const categories = [
  {
    name: "Protetică Fixă",
    desc: "Restaurări de înaltă precizie pentru cazuri estetice și funcționale.",
    services: [
      {
        icon: Diamond,
        title: "Zirconiu Multi-layer",
        desc: "Rezistență maximă și estetică naturală prin tehnologie de frezare în 5 axe. Gradare cromatică pentru transluciditate naturală.",
        time: "5-7 zile",
        materials: "Katana Zirconia, Ivoclar",
        image: portfolioZirconia,
      },
      {
        icon: Layers,
        title: "E-max Press",
        desc: "Ceramică presată cu transluciditate superioară, ideală pentru restaurări anterioare cu cerințe estetice ridicate.",
        time: "5-7 zile",
        materials: "IPS e.max, Ivoclar Vivadent",
        image: portfolioEmax,
      },
      {
        icon: Palette,
        title: "Fațete Feldspatice",
        desc: "Stratificare manuală sub microscop pentru o mimetizare perfectă cu dantura naturală adiacentă.",
        time: "7-10 zile",
        materials: "Vita VM13, VITA",
        image: null,
      },
    ],
  },
  {
    name: "Implantologie",
    desc: "Soluții digitale precise pentru cazuri implantologice complexe.",
    services: [
      {
        icon: Crosshair,
        title: "Ghiduri Chirurgicale",
        desc: "Ghiduri digitale de mare precizie pentru inserția implanturilor cu predictibilitate maximă.",
        time: "3-5 zile",
        materials: "Rezină biocompatibilă",
        image: null,
      },
      {
        icon: Box,
        title: "Bonturi Personalizate",
        desc: "Bonturi individuale din titan sau zirconiu, frezate CAD/CAM pentru un profil de emergență optim.",
        time: "5-7 zile",
        materials: "Ti Grade 5, Zirconiu",
        image: null,
      },
    ],
  },
  {
    name: "Digital Workflow",
    desc: "Flux complet digitalizat de la scan la produs finit.",
    services: [
      {
        icon: Scan,
        title: "Scanare & Design Exocad",
        desc: "Flux complet digital: recepție fișiere STL, design 3D în Exocad, validare virtuală și producție.",
        time: "2-3 zile",
        materials: "Software Exocad",
        image: portfolioDigital,
      },
    ],
  },
];

const Servicii = () => (
  <Layout>
    {/* Page header */}
    <section className="pt-12 pb-20">
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
                Servicii Tehnice
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.05]">
              Soluții protetice
              <br />
              <span className="text-primary">de precizie</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fiecare caz este tratat cu aceeași rigurozitate, indiferent de complexitate.
              Utilizăm exclusiv materiale premium și tehnologii de ultimă generație.
            </p>
            <div className="mt-6 flex gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={16} className="text-primary" />
                <span>Livrare 2-10 zile</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Package size={16} className="text-primary" />
                <span>Materiale certificate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Service categories */}
    {categories.map((category, catIdx) => (
      <section
        key={category.name}
        className={`py-20 ${catIdx % 2 === 1 ? "bg-card" : ""}`}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{category.name}</h2>
              <p className="text-sm text-muted-foreground mt-2">{category.desc}</p>
            </div>
            <div className="hidden md:block text-5xl font-bold text-border">
              {String(catIdx + 1).padStart(2, "0")}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                whileHover={{ y: -6 }}
                className="group relative bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                {/* Image header if available */}
                {service.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <service.icon size={24} strokeWidth={1.5} className="text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.desc}</p>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} className="text-primary" />
                        {service.time}
                      </span>
                      <span className="text-border">|</span>
                      <span>{service.materials}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    Detalii tehnice <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="bg-foreground rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground max-w-xl mx-auto">
              Ai un caz complex? Hai să discutăm.
            </h2>
            <p className="mt-4 text-primary-foreground/50 max-w-md mx-auto">
              Trimite-ne detaliile cazului și primești o evaluare gratuită în 24 de ore.
            </p>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 mt-8 h-14 px-8 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:gap-3"
            >
              Contactează-ne
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Servicii;
