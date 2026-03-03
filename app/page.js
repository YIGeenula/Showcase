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
//import GraphicDesign from '@/components/GraphicDesign';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useGSAP(() => {
    // Only enable ScrollSmoother on non-touch (desktop) devices.
    // On mobile/touch devices, it intercepts native scroll and causes lag.
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    if (!isTouchDevice && (gsap.plugins.scrollSmoother || (ScrollSmoother && ScrollSmoother.version))) {
      try {
        ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.5,
          effects: false,
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
          {/* <GraphicDesign /> */}
          <Contact />

          <Footer />

        </div>
      </div>
    </>
  );
}