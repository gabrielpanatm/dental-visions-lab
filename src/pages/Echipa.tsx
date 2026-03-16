import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Zap, Target, Users } from "lucide-react";
import Layout from "@/components/Layout";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const ease = [0.2, 0, 0, 1] as const;

const team = [
  {
    image: team1,
    name: "Dr. Andrei Popescu",
    title: "Master Technician",
    specialization: "Ceramist — Protetică Fixă",
    experience: "18 ani experiență",
    quote: "Precizia nu este un obiectiv, ci un obicei.",
  },
  {
    image: team2,
    name: "Elena Dumitrescu",
    title: "Senior Ceramist",
    specialization: "Stratificare Feldspatică & E-max",
    experience: "12 ani experiență",
    quote: "Fiecare fațetă spune o poveste a naturalului.",
  },
  {
    image: team3,
    name: "Mihai Ionescu",
    title: "CAD/CAM Designer",
    specialization: "Design Digital Exocad",
    experience: "8 ani experiență",
    quote: "Digitalul amplifică mâna, nu o înlocuiește.",
  },
  {
    image: team4,
    name: "Dr. Maria Stanescu",
    title: "Director Tehnic",
    specialization: "Implantologie & Ghiduri Chirurgicale",
    experience: "22 ani experiență",
    quote: "Standardul nostru este excelența predictibilă.",
  },
];

const values = [
  { icon: Target, title: "Precizie", desc: "Fiecare restaurare sub 50 microni marginal." },
  { icon: Award, title: "Excelență", desc: "Certificări internaționale și formare continuă." },
  { icon: Zap, title: "Inovație", desc: "Tehnologii CAD/CAM de ultimă generație." },
  { icon: Users, title: "Parteneriat", desc: "Comunicare transparentă cu fiecare clinică." },
];

const Echipa = () => (
  <Layout>
    {/* Header */}
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
                Echipa Noastră
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.05]">
              Maeștrii din spatele
              <br />
              <span className="text-primary">fiecărui zâmbet</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              O echipă de tehnicieni certificați cu zeci de mii de restaurări realizate.
              Fiecare specialist aduce experiență unică și pasiune pentru excelență.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Team members — large staggered cards */}
    <section className="pb-28">
      <div className="container mx-auto px-6">
        <div className="space-y-20">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
              style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}
            >
              {/* Portrait */}
              <div className="relative" style={{ direction: "ltr" }}>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card-hover">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* Index badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-xl font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center" style={{ direction: "ltr" }}>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4">
                  {member.title}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {member.name}
                </h2>
                <p className="text-lg text-muted-foreground mt-2">{member.specialization}</p>
                <p className="text-sm text-muted-foreground mt-1">{member.experience}</p>

                {/* Quote */}
                <blockquote className="mt-8 pl-6 border-l-2 border-primary/30">
                  <p className="text-lg text-foreground/80 italic leading-relaxed">
                    „{member.quote}"
                  </p>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Valorile noastre</h2>
          <p className="mt-4 text-muted-foreground">
            Principiile care ghidează fiecare decizie tehnică.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              whileHover={{ y: -6 }}
              className="bg-background p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <val.icon size={28} strokeWidth={1.5} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{val.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="bg-foreground rounded-3xl p-12 md:p-16 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "4", label: "Tehnicieni specializați" },
              { value: "60+", label: "Certificări obținute" },
              { value: "15.000+", label: "Elemente realizate anual" },
              { value: "100%", label: "Materiale premium" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm text-primary-foreground/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="pb-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Vrei să lucrezi cu noi?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Suntem mereu deschiși către noi parteneriate bazate pe excelență și încredere.
          </p>
          <Link
            to="/servicii"
            className="group inline-flex items-center gap-2 mt-8 h-14 px-8 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:gap-3"
          >
            Începe un parteneriat
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Echipa;
