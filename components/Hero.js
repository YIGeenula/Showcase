"use client";
import React, { useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";

export default function Hero() {
    const containerRef = useRef(null);
    const bgTextRef = useRef(null);
    const fgContentRef = useRef(null);

    useGSAP(() => {
        // 1. Background Text - Disappears on scroll
        gsap.to(bgTextRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: -150,
            opacity: 0,
            scale: 1.1
        });

        // 2. Foreground Elements - Parallax/Fade
        gsap.fromTo(fgContentRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.5
            }
        );

    }, { scope: containerRef });

    return (
        <section
            id="hero"
            ref={containerRef}
            className="section"
            style={{
                height: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            {/* Background Text (Behind) */}
            <div
                ref={bgTextRef}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    textAlign: 'center',
                    zIndex: 0,
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none'
                }}
            >
                <h1 style={{
                    fontSize: 'clamp(2rem, 18vw, 18rem)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    color: 'rgba(255, 255, 255, 0.03)',
                    lineHeight: 0.8,
                    letterSpacing: '-0.0em'
                }}>
                    CODE<span style={{ fontWeight: 900, color: 'rgba(255, 255, 255, 0.05)', fontSize: '1.2em' }}>X</span>BLAZE
                </h1>
            </div>

            {/* Foreground Content */}
            <div
                ref={fgContentRef}
                className="container"
                style={{
                    zIndex: 1,
                    position: 'relative',
                    textAlign: 'center',
                    maxWidth: '1000px'
                }}
            >
                <h4 style={{
                    color: 'var(--color-accent-cyan)',
                    letterSpacing: '3px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginBottom: '20px',
                    textTransform: 'uppercase'
                }}>
                    {/* MODIFIED: Increased font size to 1.8rem for the 'X' */}
                    CODE<span style={{ fontWeight: 800, color: '#fff', fontSize: '1.8rem' }}>X</span>BLAZE
                </h4>

                <h2 style={{
                    fontSize: 'clamp(3rem, 7vw, 6rem)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    marginBottom: '30px',
                    color: '#fff'
                }}>
                    Crafting Digital <br />
                    <span style={{ color: '#aaa' }}>Destinations.</span>
                </h2>

                <p style={{
                    fontSize: '1.1rem',
                    color: '#888',
                    maxWidth: '600px',
                    margin: '0 auto 50px',
                    lineHeight: 1.6
                }}>
                    Build modern, high-quality digital products by combining AI-assisted development with real design thinking, clean code, and smooth animations.
                </p>
            </div>
        </section>
    );
}