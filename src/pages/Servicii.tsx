import { motion } from "framer-motion";
import { ArrowRight, Layers, Diamond, Scan, Box, Crosshair, Palette } from "lucide-react";
import Layout from "@/components/Layout";

const ease = [0.2, 0, 0, 1] as const;

const services = [
  {
    icon: Diamond,
    category: "Protetică Fixă",
    title: "Zirconiu Multi-layer",
    desc: "Rezistență maximă și estetică naturală prin tehnologie de frezare în 5 axe. Gradare cromatică pentru transluciditate naturală.",
    time: "5-7 zile",
    materials: "Katana Zirconia, Ivoclar",
  },
  {
    icon: Layers,
    category: "Protetică Fixă",
    title: "E-max Press",
    desc: "Ceramică presată cu transluciditate superioară, ideală pentru restaurări anterioare cu cerințe estetice ridicate.",
    time: "5-7 zile",
    materials: "IPS e.max, Ivoclar Vivadent",
  },
  {
    icon: Palette,
    category: "Protetică Fixă",
    title: "Fațete Feldspatice",
    desc: "Stratificare manuală sub microscop pentru o mimetizare perfectă cu dantura naturală adiacentă.",
    time: "7-10 zile",
    materials: "Vita VM13, VITA",
  },
  {
    icon: Crosshair,
    category: "Implantologie",
    title: "Ghiduri Chirurgicale",
    desc: "Ghiduri digitale de mare precizie pentru inserția implanturilor cu predictibilitate maximă.",
    time: "3-5 zile",
    materials: "Rezină biocompatibilă",
  },
  {
    icon: Box,
    category: "Implantologie",
    title: "Bonturi Personalizate",
    desc: "Bonturi individuale din titan sau zirconiu, frezate CAD/CAM pentru un profil de emergență optim.",
    time: "5-7 zile",
    materials: "Ti Grade 5, Zirconiu",
  },
  {
    icon: Scan,
    category: "Digital Workflow",
    title: "Scanare & Design Exocad",
    desc: "Flux complet digital: recepție fișiere STL, design 3D în Exocad, validare virtuală și producție.",
    time: "2-3 zile",
    materials: "Software Exocad",
  },
];

const Servicii = () => (
  <Layout>
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-xl mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Servicii Tehnice
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Soluții protetice de precizie
          </h1>
          <p className="mt-4 text-muted-foreground">
            Fiecare caz este tratat cu aceeași rigurozitate, indiferent de complexitate.
            Utilizăm exclusiv materiale premium și tehnologii de ultimă generație.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              whileHover={{ y: -4 }}
              className="group relative bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.desc}</p>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>⏱ {service.time}</span>
                <span>{service.materials}</span>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Detalii tehnice <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Servicii;
