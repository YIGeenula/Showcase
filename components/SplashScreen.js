"use client";
import React, { useRef, useState, useLayoutEffect } from 'react';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";

export default function SplashScreen({ finishLoading }) {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const subTextRef = useRef(null);
    const lineRef = useRef(null);
    const [isMounted, setIsMounted] = useState(true);

    useGSAP(() => {
        // Lock scroll
        document.body.style.overflow = "hidden";

        const tl = gsap.timeline({
            onComplete: () => {
                setIsMounted(false);
                // Unlock scroll
                document.body.style.overflow = "";
                if (finishLoading) finishLoading();
            }
        });

        // Initial states
        gsap.set(containerRef.current, { zIndex: 9999 });
        gsap.set(lineRef.current, { scaleX: 0, opacity: 1 });
        gsap.set(textRef.current, { opacity: 0 });
        gsap.set(subTextRef.current, { opacity: 0, y: 20 });

        // 1. Line draws out
        tl.to(lineRef.current, {
            scaleX: 1,
            duration: 1,
            ease: "power2.inOut",
        });

        // 1.5. Line collapses (disappears)
        tl.to(lineRef.current, {
            scaleX: 0,
            duration: 0.5,
            ease: "power2.inOut",
        });

        // 2. Text appears
        tl.to(textRef.current, {
            opacity: 1,
            duration: 0.1,
        });

        // Scramble text effect
        tl.to(textRef.current, {
            duration: 1.5,
            text: {
                value: "CODEXBLAZE",
                delimiter: "",
                padSpace: true,
            },
            ease: "none",
        });

        // 3. Subtext slides up
        tl.to(subTextRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
        }, "-=0.5");

        // 4. Pause for impact
        tl.to({}, { duration: 0.5 });

        // 5. Exit animation
        // Explode text
        tl.to([textRef.current, subTextRef.current], {
            scale: 2,
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.5,
            ease: "power2.in",
        });

        // Line collapses (removed as it happens earlier now)
        // tl.to(lineRef.current, {
        //     scaleX: 0,
        //     duration: 0.3,
        //     ease: "power2.in",
        // }, "<");

        // Curtains open (using clip-path on the container)
        tl.to(containerRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 0.8,
            ease: "power4.inOut",
        });

    }, { scope: containerRef });

    if (!isMounted) return null;

    // Inline styles for the component
    // Inline styles for the component
    const styles = {
        container: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            zIndex: 9999,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Initial clip path
        },
        line: {
            position: 'absolute',
            width: '80%',
            maxWidth: '600px',
            height: '2px',
            // Gradient background
            background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)', // using cyan hex approximation
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)',
            transformOrigin: 'center',
            transform: 'scaleX(0)', // Start hidden
        },
        title: {
            fontFamily: 'var(--font-display), sans-serif',
            fontSize: 'clamp(2rem, 8vw, 5rem)', // Responsive font size
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            color: 'transparent',
            background: 'linear-gradient(135deg, #ffffff, #e5e7eb, #6b7280)', // White to gray gradient
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            zIndex: 10,
            position: 'relative',
            textAlign: 'center',
            opacity: 0, // Start hidden
        },
        subTitle: {
            fontFamily: 'var(--font-main), sans-serif',
            marginTop: '1rem',
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            letterSpacing: '0.5em',
            color: '#22d3ee', // Cyan
            textTransform: 'uppercase',
            textAlign: 'center',
            opacity: 0, // Start hidden
            transform: 'translateY(20px)', // Start slightly lower
        },
        backgroundDecor: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.2,
            pointerEvents: 'none',
            backgroundImage: `
        linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
      `,
            backgroundSize: '50px 50px',
        }
    };

    return (
        <div ref={containerRef} style={styles.container}>
            {/* The glowing line */}
            <div ref={lineRef} style={styles.line}></div>

            {/* Main Text */}
            <h1 ref={textRef} style={styles.title}>
                ¢0D3X_8L4Z3
            </h1>

            {/* Subtext */}
            <p ref={subTextRef} style={styles.subTitle}>
                Immersive Web Experience
            </p>

            {/* Background Decor */}
            <div style={styles.backgroundDecor}></div>
        </div>
    );
}
