'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[600px] bg-cover bg-center bg-no-repeat border-0"
      style={{
        backgroundImage: "url('/assets/heronew.png')",
        border: 'none',
        outline: 'none',
      }}
    />
  );
}
