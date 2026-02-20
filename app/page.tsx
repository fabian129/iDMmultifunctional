import React from 'react';
import Loader from '@/components/ui/Loader';
import NoiseOverlay from '@/components/ui/NoiseOverlay';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Manifesto from '@/components/sections/Manifesto';
import TheGap from '@/components/sections/TheGap';
import MethodStack from '@/components/sections/MethodStack';
import FivePillars from '@/components/sections/FivePillars';
import ValueLadder from '@/components/sections/ValueLadder';
import TheArchitect from '@/components/sections/TheArchitect';
import TrustSignals from '@/components/sections/TrustSignals';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <NoiseOverlay />
      <Loader />
      <Navbar />

      <main className="relative z-10 bg-[var(--c-bg)] min-h-screen overflow-hidden">
        <Hero />
        <Manifesto />
        <TheGap />
        <MethodStack />
        <FivePillars />
        <ValueLadder />
        <TheArchitect />
        <TrustSignals />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
