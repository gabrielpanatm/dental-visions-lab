import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Microscope, Cpu, ShieldCheck, Diamond, Layers, Scan, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-dental.jpg";
import portfolioVeneers from "@/assets/portfolio-veneers.jpg";
import portfolioZirconia from "@/assets/portfolio-zirconia.jpg";
import portfolioEmax from "@/assets/portfolio-emax.jpg";
import servicesPreview from "@/assets/services-preview.jpg";

const ease = [0.2, 0, 0, 1] as const;

const partners = [
  "Clinica Dentară Perfecta",
  "SmileCare Center",
  "Pro Dental Studio",
  "Dental Excellence",
  "OralMed Clinic",
  "DentPremium",
  "Clinica Dentară Perfecta",
  "SmileCare Center",
  "Pro Dental Studio",
  "Dental Excellence",
  "OralMed Clinic",
  "DentPremium",
];

const stats = [
  { value: 15000, suffix: "+", label: "Restaurări anuale" },
  { value: 12, suffix: "+", label: "Ani de experiență" },
  { value: 98, suffix: "%", label: "Rata de satisfacție" },
  { value: 200, suffix: "+", label: "Clinici partenere" },
];

const processSteps = [
  { num: "01", title: "Recepție Digitală", desc: "Primim fișierele STL direct de la scanerul intraoral sau de la laborator." },
  { num: "02", title: "Design CAD", desc: "Proiectăm restaurarea în Exocad cu atenție la detalii anatomice și funcționale." },
  { num: "03", title: "Producție CAM", desc: "Frezare în 5 axe din blocuri de zirconiu, e.max sau titan de cea mai înaltă calitate." },
  { num: "04", title: "Finisare & QC", desc: "Stratificare manuală, glazurare și control de calitate sub microscop înainte de livrare." },
];

// Animated counter component
const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-3xl md:text-5xl font-bold text-primary tabular-nums">
      {count.toLocaleString("ro-RO")}{suffix}
    </div>
  );
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <Layout>
      {/* Hero — fullscreen with zoom & parallax */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background image with slow zoom */}
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img
            src={heroImage}
            alt="Frezare CAD/CAM de precizie"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient overlay — more cinematic */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

        {/* Content with parallax */}
        <motion.div className="relative container mx-auto px-6" style={{ opacity: heroOpacity, y: heroY }}>
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-primary-foreground/80">
                Laborator de Tehnică Dentară
              </span>
            </motion.div>

            {/* Headline — staggered animation */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.05]"
              >
                Sinergia dintre
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease }}
                className="text-5xl md:text-7xl font-bold leading-[1.05]"
              >
                <span className="text-primary">precizia digitală</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease }}
                className="text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.05]"
              >
                și măiestria analogică
              </motion.h1>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease }}
              className="mt-8 text-lg md:text-xl text-primary-foreground/70 max-w-lg"
            >
              Nu livrăm doar dinți, livrăm predictibilitate pentru clinica dumneavoastră.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/servicii"
                className="group inline-flex items-center gap-2 h-13 px-8 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:gap-3"
              >
                Devino partener
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/lucrari"
                className="inline-flex items-center gap-2 h-13 px-8 text-sm font-medium rounded-xl border border-primary-foreground/25 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Vezi portofoliul
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-primary-foreground/40 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-primary-foreground/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats — with animated counters */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="text-center"
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <div className="mt-3 text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us — refined cards */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl mb-20"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">De ce noi</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Standardul de aur în restaurările dentare
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Combinăm tehnologia de ultimă generație cu expertiza a peste un deceniu
              în tehnica dentară de precizie.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Microscope,
                title: "Precizie Microscopică",
                desc: "Fiecare restaurare este verificată sub magnificare 25x pentru a asigura un fit marginal sub 50 microni.",
              },
              {
                icon: Cpu,
                title: "Flux Digital Complet",
                desc: "De la scanare intraorală la design Exocad și frezare în 5 axe — un workflow 100% digital, fără compromisuri.",
              },
              {
                icon: ShieldCheck,
                title: "Materiale Certificate",
                desc: "Utilizăm exclusiv materiale de la Ivoclar Vivadent, Vita și Kuraray pentru rezultate previzibile pe termen lung.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                whileHover={{ y: -6 }}
                className="group bg-card p-10 rounded-2xl shadow-card transition-all duration-300 hover:shadow-card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                  <item.icon size={28} strokeWidth={1.5} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview — image + text split */}
      <section className="py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img src={servicesPreview} alt="Laborator DentalLab" className="w-full h-auto object-cover" />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease }}
                className="absolute -bottom-6 -right-4 md:right-8 bg-card p-5 rounded-xl shadow-card-hover"
              >
                <div className="text-2xl font-bold text-primary">5 axe</div>
                <div className="text-xs text-muted-foreground mt-1">Frezare de precizie</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Servicii</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Soluții protetice pentru fiecare caz clinic
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                De la fațete feldspatice realizate sub microscop până la lucrări complexe pe implanturi —
                fiecare restaurare beneficiază de același nivel de rigoare și atenție la detalii.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Diamond, label: "Zirconiu", sub: "Multi-layer" },
                  { icon: Layers, label: "E-max", sub: "Press & CAD" },
                  { icon: Scan, label: "Digital", sub: "Full workflow" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-background"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <s.icon size={20} strokeWidth={1.5} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{s.label}</div>
                      <div className="text-xs text-muted-foreground">{s.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/servicii"
                className="group inline-flex items-center gap-2 mt-8 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
              >
                Explorează toate serviciile
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process — timeline */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Procesul Nostru</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              De la digital la realitate
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Un flux de lucru optimizat pentru rapiditate și precizie maximă.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease }}
                className="relative"
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-border" />
                )}
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <span className="text-sm font-bold text-primary">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-28 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
          >
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Portofoliu</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Lucrări recente
              </h2>
            </div>
            <Link
              to="/lucrari"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
            >
              Vezi toate lucrările
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: portfolioVeneers, title: "Fațete ceramice frontale", material: "Feldspat" },
              { src: portfolioZirconia, title: "Coroane zirconiu full contour", material: "Katana Zirconia" },
              { src: portfolioEmax, title: "Punte E-max anterioară", material: "IPS e.max" },
            ].map((work, i) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card cursor-pointer"
              >
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6">
                    <p className="text-sm font-medium text-primary-foreground">{work.title}</p>
                    <p className="text-xs text-primary-foreground/70 mt-1">{work.material}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="relative bg-foreground rounded-3xl p-12 md:p-20 text-center overflow-hidden"
          >
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground max-w-2xl mx-auto">
                Pregătit să ridici standardul clinicii tale?
              </h2>
              <p className="mt-5 text-lg text-primary-foreground/60 max-w-lg mx-auto">
                Începe un parteneriat bazat pe excelență tehnică și comunicare transparentă.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <Link
                  to="/servicii"
                  className="group inline-flex items-center gap-2 h-13 px-8 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:gap-3"
                >
                  Devino partener
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/echipa"
                  className="inline-flex items-center gap-2 h-13 px-8 text-sm font-medium rounded-xl border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
                >
                  Cunoaște echipa
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner ticker */}
      <section className="py-14 border-t border-border bg-card overflow-hidden">
        <div className="container mx-auto px-6 mb-8">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground text-center">
            Clinici care ne acordă încrederea
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10" />
          <div className="flex animate-ticker whitespace-nowrap">
            {partners.map((name, i) => (
              <span
                key={i}
                className="mx-12 text-lg font-semibold text-muted-foreground/30"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
