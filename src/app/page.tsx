import Footer from '@/components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Page() {
  return (
    <div>
      <Header />
      <main className="flex w-desktop min-h-screen flex-col items-center justify-between p-24">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
