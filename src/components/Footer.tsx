import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            DENTAL<span className="text-primary">LAB</span>
          </h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Sinergia dintre precizia digitală și măiestria analogică. 
            Peste 15.000 de restaurări realizate anual cu cele mai avansate tehnologii CAD/CAM.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Navigare</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Acasă</Link>
            <Link to="/servicii" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Servicii</Link>
            <Link to="/lucrari" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Lucrări</Link>
            <Link to="/echipa" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Echipa</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>+40 721 000 000</span>
            <span>contact@dentallab.ro</span>
            <span>Str. Precisiei nr. 12, București</span>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border text-sm text-muted-foreground">
        © {new Date().getFullYear()} DentalLab. Toate drepturile rezervate.
      </div>
    </div>
  </footer>
);

export default Footer;
