import Hero from './_components/Hero';
import Testimonials from './_components/Testimonials';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden p-24">
      <Hero />
      <Testimonials />
    </main>
  );
}
