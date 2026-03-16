import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const ease = [0.2, 0, 0, 1];

const team = [
  {
    image: team1,
    name: "Dr. Andrei Popescu",
    title: "Master Technician",
    specialization: "Ceramist — Protetică Fixă",
    experience: "18 ani experiență",
  },
  {
    image: team2,
    name: "Elena Dumitrescu",
    title: "Senior Ceramist",
    specialization: "Stratificare Feldspatică & E-max",
    experience: "12 ani experiență",
  },
  {
    image: team3,
    name: "Mihai Ionescu",
    title: "CAD/CAM Designer",
    specialization: "Design Digital Exocad",
    experience: "8 ani experiență",
  },
  {
    image: team4,
    name: "Dr. Maria Stanescu",
    title: "Director Tehnic",
    specialization: "Implantologie & Ghiduri Chirurgicale",
    experience: "22 ani experiență",
  },
];

const Echipa = () => (
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
            Echipa Noastră
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Maeștrii din spatele fiecărui zâmbet
          </h1>
          <p className="mt-4 text-muted-foreground">
            O echipă de tehnicieni certificați cu zeci de mii de restaurări realizate.
            Fiecare specialist aduce experiență unică în laboratorul nostru.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm font-medium text-primary mt-0.5">{member.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{member.specialization}</p>
              <p className="text-xs text-muted-foreground mt-1">{member.experience}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-20 bg-card rounded-2xl shadow-card p-10 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "4", label: "Tehnicieni specializați" },
            { value: "60+", label: "Certificări obținute" },
            { value: "15.000+", label: "Elemente realizate anual" },
            { value: "100%", label: "Materiale premium" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Echipa;
