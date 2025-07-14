import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-950">
      <section className="relative z-10">
        {/* Hero Section with animated header and parallax */}
        <HeroSection />
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Questions</h2>
        <LatestQuestions />
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Top Contributors</h2>
        <div className="flex justify-center">
          <TopContributers />
        </div>
      </section>
      <Footer />
    </main>
  );
}
