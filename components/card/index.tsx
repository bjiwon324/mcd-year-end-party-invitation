import Info from "./Info";
import ScrollReveal from "./ScrollReveal";

export default function Card() {
  return (
    <section className="relative h-screen">
      <div className="h-[150vh]" />

      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <ScrollReveal delay={0.2}>
          <div className="pointer-events-auto">
            <Info />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
