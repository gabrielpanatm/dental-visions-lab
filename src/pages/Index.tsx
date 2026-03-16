import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Microscope, Cpu, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-dental.jpg";

const ease = [0.2, 0, 0, 1] as const;

const partners = [
  "Clinica Dentară Perfecta",
  "SmileCare Center",
  "Pro Dental Studio",
  "Dental Excellence",
  "OralMed Clinic",
  "DentPremium",
];

const stats = [
  { value: "15.000+", label: "Restaurări anuale" },
  { value: "12+", label: "Ani de experiență" },
  { value: "98%", label: "Rata de satisfacție" },
  { value: "200+", label: "Clinici partenere" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Frezare CAD/CAM de precizie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary-foreground/70 mb-4">
              Laborator de Tehnică Dentară
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.1]">
              Sinergia dintre precizia digitală și măiestria analogică
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-lg">
              Nu livrăm doar dinți, livrăm predictibilitate pentru clinica dumneavoastră.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/servicii"
                className="inline-flex items-center gap-2 h-12 px-7 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Devino partener
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/lucrari"
                className="inline-flex items-center gap-2 h-12 px-7 text-sm font-medium rounded-lg border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Vezi portofoliul
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Standardul de aur în restaurările dentare
            </h2>
            <p className="mt-4 text-muted-foreground">
              Combinăm tehnologia de ultimă generație cu expertiza a peste un deceniu
              în tehnica dentară de precizie.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Microscope,
                title: "Precizie Microscopică",
                desc: "Fiecare restaurare este verificată sub magnificare pentru a asigura un fit marginal impecabil.",
              },
              {
                icon: Cpu,
                title: "Flux Digital Complet",
                desc: "De la scanare intraorală la design Exocad și frezare în 5 axe — un workflow 100% digital.",
              },
              {
                icon: ShieldCheck,
                title: "Materiale Certificate",
                desc: "Utilizăm exclusiv materiale de la Ivoclar Vivadent, Vita și Kuraray pentru rezultate previzibile.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                whileHover={{ y: -4 }}
                className="bg-card p-8 rounded-2xl shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div className="text-primary mb-4">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner ticker */}
      <section className="py-12 border-y border-border bg-card overflow-hidden">
        <div className="container mx-auto px-6 mb-6">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground text-center">
            Clinici partenere
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-ticker whitespace-nowrap">
            {[...partners, ...partners].map((name, i) => (
              <span
                key={i}
                className="mx-10 text-lg font-semibold text-muted-foreground/40"
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
