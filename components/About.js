"use client";
import React, { useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";

export default function About() {
    const containerRef = useRef(null);
    // 1. Ref to target the small dot specifically
    const innerDotRef = useRef(null);

    // 2. Ref to store technology tags for individual hover effects
    const techRefs = useRef([]);
    techRefs.current = []; // Reset array on render

    const addToTechRefs = (el) => {
        if (el && !techRefs.current.includes(el)) {
            techRefs.current.push(el);
        }
    };

    useGSAP(() => {
        // 1. Staggered Grid Reveal
        const cards = gsap.utils.toArray(".bento-card");
        gsap.from(cards, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });

        // 2. 3D Tilt Effect on Mouse Move
        cards.forEach(card => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -10; // Max -10 to 10 deg
                const rotateY = ((x - centerX) / centerX) * 10;

                gsap.to(card, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformPerspective: 1000,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power2.out" });
            });
        });

        // 3. Counter Animation for Stats
        const stats = gsap.utils.toArray(".stat-number");
        stats.forEach(stat => {
            gsap.from(stat, {
                textContent: 0,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: stat,
                    start: "top 85%"
                }
            });
        });

        // 4. Border Pulse Animation
        gsap.to(cards, {
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2)',
            duration: 1.5,
            repeat: -1, // Loop indefinitely
            yoyo: true, // Go back and forth
            ease: "sine.inOut",
            stagger: 0.2 // Stagger the start times slightly for a more organic look
        });

        // 5. Bumping Dot Animation (ADVANCED ORBITAL EFFECT)
        const dot = innerDotRef.current;
        if (dot) {
            // Use a timeline for a complex, non-linear path (Figure Eight approximation)
            const advancedDotTimeline = gsap.timeline({
                repeat: -1,
                defaults: { duration: 1.5, ease: "power1.inOut" }
            });

            advancedDotTimeline
                .to(dot, { x: 15, y: -10, scale: 1.15 }) // Top Right Drift + Scale Pulse
                .to(dot, { x: 10, y: 15, scale: 1.05 })  // Bottom Right Drift + Scale Pulse
                .to(dot, { x: -15, y: 10, scale: 1.15 }) // Bottom Left Drift + Scale Pulse
                .to(dot, { x: -10, y: -15, scale: 1.05 })// Top Left Drift + Scale Pulse
                .to(dot, { x: 0, y: 0, scale: 1.0 });    // Return to center for seamless loop
        }

        // 6. Technology Tag Hover Effect (using GSAP for smooth color transition)
        techRefs.current.forEach((tag) => {
            tag.addEventListener('mouseenter', () => {
                gsap.to(tag, {
                    backgroundColor: 'rgba(255, 255, 255, 1)', // Change background to white
                    color: '#000',                              // Change text color to black
                    border: '1px solid #fff',
                    duration: 0.2,
                    ease: "power1.inOut"
                });
            });

            tag.addEventListener('mouseleave', () => {
                gsap.to(tag, {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Revert background
                    color: '#ccc',                                  // Revert text color
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    duration: 0.2,
                    ease: "power1.inOut"
                });
            });
        });


    }, { scope: containerRef });

    return (
        <section id="about" ref={containerRef} className="section" style={{ padding: '100px 0', minHeight: '100vh' }}>
            <div className="container" style={{ width: '90%', maxWidth: '1200px' }}>

                <div style={{ marginBottom: '60px' }}>
                    <h4 style={{ color: 'var(--color-accent-cyan)', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '10px' }}>WHO I AM</h4>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                        Minimal Effort <span className="text-gradient">Wins.</span>
                    </h2>
                </div>

                {/* Bento Grid Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gridTemplateRows: 'repeat(2, minmax(300px, auto))',
                    gap: '20px'
                }}>

                    {/* Card 1: Main Description (Large) */}
                    <div className="bento-card glass-panel" style={{
                        gridColumn: 'span 8', // Desktop
                        padding: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(0,0,0,0.8))',
                        // Added base border/box-shadow for the animation
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 0 5px rgba(255, 255, 255, 0.2), inset 0 0 5px rgba(255, 255, 255, 0.1)',
                        transition: 'box-shadow 0.5s ease' // Keep transition for smooth initial state/leave
                    }}>
                        <h3 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontFamily: 'var(--font-display)', marginBottom: '20px' }}>
                            Human-Centered Design.<br />
                            AI-Enhanced Development.
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: '#aaa', lineHeight: 1.6, maxWidth: '600px' }}>
                            I blend creativity, engineering, and AI tools to build smarter, faster, and more polished digital experiences.
                            Using AI to accelerate development—while ensuring every project still has a personal, handcrafted touch that stands out globally.
                        </p>
                    </div>

                    {/* Card 2: Stats (Tall) */}
                    <div className="bento-card glass-panel" style={{
                        gridColumn: 'span 4',
                        padding: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'rgba(0,0,0,0.6)',
                        // Modified border/box-shadow for the animation
                        border: '1px solid var(--color-accent-purple)',
                        boxShadow: '0 0 5px rgba(138, 43, 226, 0.5), inset 0 0 5px rgba(138, 43, 226, 0.3)',
                        transition: 'box-shadow 0.5s ease'
                    }}>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <div style={{ fontSize: '5rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>
                                <span className="stat-number">9</span>+
                            </div>
                            <div style={{ color: '#888', letterSpacing: '2px', fontSize: '0.8rem', marginTop: '10px' }}>PROJECTS</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '5rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-accent-cyan)', lineHeight: 1 }}>
                                <span className="stat-number">100</span>%
                            </div>
                            <div style={{ color: '#888', letterSpacing: '2px', fontSize: '0.8rem', marginTop: '10px' }}>SATISFACTION</div>
                        </div>
                    </div>

                    {/* Card 3: Philosophy / Abstract (Wide) - MODIFIED for Bumping Dot */}
                    <div className="bento-card glass-panel" style={{
                        gridColumn: 'span 7',
                        padding: '40px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        // Added base border/box-shadow for the animation
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 0 5px rgba(255, 255, 255, 0.2), inset 0 0 5px rgba(255, 255, 255, 0.1)',
                        transition: 'box-shadow 0.5s ease'
                    }}>
                        {/* Decorative background text */}
                        <div style={{ position: 'absolute', top: -20, left: 0, fontSize: '8rem', opacity: 0.03, whiteSpace: 'nowrap', fontFamily: 'var(--font-display)' }}>
                            IMMERSIVE
                        </div>

                        <div style={{ zIndex: 1 }}>
                            <h4 style={{ color: '#fff', marginBottom: '15px', fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>The Methodology</h4>
                            <p style={{ color: '#aaa', width: '80%' }}>
                                Combining clean architecture with fluid motion. Every pixel serves a purpose, and every animation tells a story.
                            </p>
                        </div>

                        {/* Dot Container */}
                        <div style={{
                            width: '100px', height: '100px',
                            border: '2px solid rgba(255,255,255,0.1)',
                            borderRadius: '50%',
                            position: 'absolute', right: '40px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            {/* The Dot - Set up for absolute positioning and animation */}
                            <div
                                ref={innerDotRef} // Ref added for GSAP targeting
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    background: '#fff',
                                    borderRadius: '50%',
                                    position: 'absolute', // Important for local translation
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)' // Center using transform
                                }}>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Tech Stack Ticker (Small) */}
                    <div className="bento-card glass-panel" style={{
                        gridColumn: 'span 5',
                        padding: '40px',
                        background: 'linear-gradient(45deg, #000, #111)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // Added base border/box-shadow for the animation
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 0 5px rgba(255, 255, 255, 0.2), inset 0 0 5px rgba(255, 255, 255, 0.1)',
                        transition: 'box-shadow 0.5s ease'
                    }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {['React', 'Next.js', 'GSAP', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Figma', 'Node.js'].map((tech, i) => (
                                <span
                                    key={tech}
                                    ref={el => addToTechRefs(el)} // Add ref for GSAP hover
                                    style={{
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        // Set initial styles for GSAP to target
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        fontSize: '0.9rem',
                                        color: '#ccc',
                                        cursor: 'pointer' // Indicate interactivity
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Mobile Responsive adjustments via inline style override script (simulated for server component simplified) */}
                <style jsx global>{`
            @media (max-width: 968px) {
                .bento-card {
                    grid-column: span 12 !important;
                }
            }
         `}</style>
            </div>
        </section>
    );
}