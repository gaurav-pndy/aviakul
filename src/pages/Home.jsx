// src/pages/Home.jsx
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import HeroSection from "../components/Home/HeroSection";
import BusinessesSection from "../components/Home/BusinessesSection";
import CorePhilosophy from "../components/Home/CorePhilosophy";
import FooterTeaser from "../components/Home/FooterTeaser";

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <HeroSection />
      <BusinessesSection />
      <CorePhilosophy />
      <FooterTeaser />
    </main>
  );
}
