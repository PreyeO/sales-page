import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import TargetAudience from "@/components/TargetAudience";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <TargetAudience />
      <Timeline />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm border-t border-gray-100 bg-gray-50">
        <p>© {new Date().getFullYear()} 2-Day Setup. All rights reserved.</p>
      </footer>
    </main>
  );
}
