"use client";

import BannerSection from "./components/BannerSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import MemberSection from "./components/MemberSection";
import OurgymSection from "./components/OurgymSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setShowContent(true);
  };

 

  return (
    <div>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loading" onComplete={handleComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <Cursor />
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <BannerSection />
            <AboutSection />
            <ServiceSection />
            <MemberSection />
            <OurgymSection />

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
