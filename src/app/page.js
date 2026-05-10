'use client';
import dynamic from 'next/dynamic';

import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import InstantSetupSection from '@/components/InstantSetupSection';
import CitySection from '@/components/CitySection';
import PackagesSection from '@/components/PackagesSection';
import VenueSection from '@/components/VenueSection';
import VendorDashboard from '@/components/VendorDashboard';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const FloatingParticles = dynamic(() => import('@/components/FloatingParticles'), { ssr: false });
const MouseFollowEffect = dynamic(() => import('@/components/MouseFollowEffect'), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <FloatingParticles />
      <MouseFollowEffect />
      <Navbar />

      <main>
        <HeroSection />
        <div className="section-divider" />
        <ServicesSection />
        <div className="section-divider" />
        <InstantSetupSection />
        <div className="section-divider" />
        <CitySection />
        <div className="section-divider" />
        <PackagesSection />
        <div className="section-divider" />
        <VenueSection />
        <div className="section-divider" />
        <VendorDashboard />
        <div className="section-divider" />
        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
}
