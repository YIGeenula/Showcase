"use client";
import React from 'react';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useGSAP(() => {
    // Attempt to initialize ScrollSmoother
    // Note: ScrollSmoother is a Club GSAP plugin. If the file is present but authentication fails, it might not work.
    // However, based on the file listing, it is present in dist.

    // We check if ScrollSmoother is registered
    if (gsap.plugins.scrollSmoother || (ScrollSmoother && ScrollSmoother.version)) {
      try {
        ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.5,
          effects: true,
          smoothTouch: 0.1
        });
      } catch (error) {
        console.log("ScrollSmoother initialization skipped:", error);
      }
    }
  });

  return (
    <>
      <Navigation />

      {/* ScrollSmoother Wrapper */}
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />

          <Footer />

        </div>
      </div>
    </>
  );
}
