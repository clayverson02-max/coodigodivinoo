export const Footer = () => {
  return (
    <footer className="bg-gradient-primary py-10 text-center text-primary-foreground/70">
      <div className="container space-y-2">
        <p className="font-serif text-2xl font-bold text-gradient-gold">CÓDIGO DIVINO</p>
        <p className="text-sm">© {new Date().getFullYear()} Código Divino — Todos los derechos reservados.</p>
        <p className="text-xs">Este producto no garantiza la obtención de resultados. Cualquier referencia es para fines ilustrativos.</p>
      </div>
    </footer>
  );
};
