"use client";

import React, { createContext, useCallback, useContext, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

const TransitionContext = createContext({ navigateTo: () => {} });

export const usePageTransition = () => useContext(TransitionContext);

export default function TransitionProvider({
  children,
  column = 6,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const colRefs = useRef([]);
  const textRef = useRef(null);
  const isTransitioning = useRef(false);

  useEffect(() => {
    if (!isTransitioning.current) return;

    const cols = colRefs.current;
    const text = textRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        isTransitioning.current = false;
      }
    });

    // Animate text out
    tl.to(text, {
      opacity: 0,
      scale: 1.1,
      y: -20,
      duration: 0.3,
      ease: "power3.in"
    });

    // Move columns up out of the screen
    tl.to(cols, {
      y: "-100%",
      duration: 0.5,
      ease: "power3.inOut",
      stagger: 0.05,
    }, "-=0.1");

  }, [pathname]);

  const navigateTo = useCallback(
    (href) => {
      if (isTransitioning.current) return;
      if (pathname === href) return;

      isTransitioning.current = true;
      const cols = colRefs.current;
      const text = textRef.current;
      
      gsap.set(cols, { y: "100%" });
      gsap.set(text, { opacity: 0, scale: 0.9, y: 20 });

      const tl = gsap.timeline();

      // Move columns up into the screen
      tl.to(cols, {
        y: "0%",
        duration: 0.5,
        ease: "power3.inOut",
        stagger: 0.05,
      });

      // Animate text in
      tl.to(text, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)"
      }, "-=0.2");

      // Hold for a moment, then trigger Next.js router
      tl.to({}, {
        duration: 0.2, // Small delay before routing
        onComplete: () => {
          router.push(href);
        }
      });
    },
    [router, pathname]
  );

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}
      
      {/* Overlay Container */}
      <div 
        className="transition-overlay"
        style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            display: 'flex',
            pointerEvents: 'none'
        }}
      >
        {/* The 6 Transition Columns */}
        {Array.from({ length: column }).map((_, idx) => (
          <div
            key={idx}
            ref={(el) => {
              colRefs.current[idx] = el;
            }}
            className="transition-col"
            style={{ 
                flex: 1,
                width: '100%',
                height: '100%',
                backgroundColor: '#0a0a0a', /* A sleek futuristic dark color */
                borderRight: '1px solid rgba(0, 240, 255, 0.05)', /* Subtle cyan highlight between columns */
                transform: "translateY(100%)" 
            }}
          />
        ))}

        {/* The Transition Brand Text */}
        <div 
          ref={textRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            zIndex: 100000,
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 8vw, 5rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-1px',
            textTransform: 'uppercase',
            textShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          CODE<span style={{ color: 'var(--color-accent-cyan, #00f0ff)', fontSize: '1.2em', margin: '0 4px' }}>X</span>BLAZE
        </div>
      </div>
    </TransitionContext.Provider>
  );
}
