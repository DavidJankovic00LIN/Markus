'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[600px] overflow-hidden border-0"
      style={{ border: 'none', outline: 'none' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom"
        style={{ backgroundImage: "url('/assets/heronew.png')" }}
      />
    </section>
  );
}
