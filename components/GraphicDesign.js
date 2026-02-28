"use client";
import React, { useRef, useState } from 'react';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";

export default function GraphicDesign() {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const graphics = [
        {
            id: 'g01',
            title: 'BRAND IDENTITY',
            cat: 'LOGO & BRANDING',
            img: '/images/graphics/graphic_01.jpg',
        },
        {
            id: 'g02',
            title: 'SOCIAL CAMPAIGN',
            cat: 'MARKETING KIT',
            img: '/images/graphics/graphic_02.jpg',
        },
        {
            id: 'g03',
            title: 'FESTIVAL POSTER',
            cat: 'PRINT DESIGN',
            img: '/images/graphics/graphic_03.jpg',
        },
        {
            id: 'g04',
            title: 'LUXE PACKAGING',
            cat: 'PRODUCT DESIGN',
            img: '/images/graphics/graphic_04.jpg',
        }
    ];

    useGSAP(() => {
        // Entrance animation
        gsap.from(".graphic-anim", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%"
            }
        });
    }, { scope: containerRef });

    return (
        <section id="graphic-design" ref={containerRef} style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundColor: '#000'
        }}>
            {/* Immersive Background Images Layer */}
            {graphics.map((item, index) => {
                const isActive = activeIndex === index;
                // We use opacity + transform scales for that slow smooth zoom feel
                return (
                    <div key={`bg-${index}`} style={{
                        position: 'absolute',
                        top: 0, left: 0, width: '100%', height: '100%',
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0,
                        // Crossfade handled here
                        opacity: isActive ? 1 : 0,
                        // Subtle zoom when active
                        transform: isActive ? 'scale(1.05)' : 'scale(1)',
                        // Different durations for opacity (fast) vs transform (slow)
                        transition: 'opacity 0.6s ease-in-out, transform 3s ease-out',
                        filter: 'brightness(0.35) blur(3px)'
                    }}></div>
                );
            })}

            {/* Gradient Overlay to ensure text pops */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'radial-gradient(circle at center, transparent 0%, #000 130%)',
                zIndex: 1
            }}></div>

            {/* Content Layer */}
            <div className="content" style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', pointerEvents: 'none' }}>

                {/* Header Subtitle */}
                <div className="graphic-anim" style={{ marginBottom: '3vh', textAlign: 'center' }}>
                    <p style={{ color: 'var(--color-accent-lime)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1rem', fontWeight: 600 }}>Visual Arts</p>
                </div>

                {/* Interactive Huge Title List */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', width: '100%', pointerEvents: 'auto' }}>
                    {graphics.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={item.id}
                                className="graphic-anim"
                                onMouseEnter={() => setActiveIndex(index)}
                                style={{
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    width: '100%'
                                }}
                            >
                                {/* Immersive typography similar to Projects.js */}
                                <h2 style={{
                                    fontSize: 'clamp(3rem, 7vw, 8rem)',
                                    fontFamily: 'var(--font-display)',
                                    lineHeight: '1.0',
                                    fontWeight: '900',
                                    textTransform: 'uppercase',
                                    margin: 0,
                                    // Make 'active' transparent so the linear-gradient shows behind it!
                                    color: isActive ? 'transparent' : 'rgba(255, 255, 255, 0.4)',
                                    backgroundImage: isActive
                                        ? 'linear-gradient(90deg, var(--color-accent-cyan) 20%, #8A2BE2 100%)'
                                        : 'none',
                                    WebkitBackgroundClip: isActive ? 'text' : 'border-box',
                                    backgroundClip: isActive ? 'text' : 'border-box',
                                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                                    textShadow: isActive ? 'none' : '0px 0px 10px rgba(0,0,0,0.8)',
                                    transition: 'color 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                }}>
                                    {item.title}
                                </h2>

                                {/* Animated Category Description */}
                                <div style={{
                                    height: isActive ? '30px' : '0px',
                                    opacity: isActive ? 1 : 0,
                                    overflow: 'hidden',
                                    transition: 'all 0.4s ease',
                                }}>
                                    <span style={{
                                        color: '#fff',
                                        letterSpacing: '5px',
                                        fontSize: '0.85rem',
                                        fontWeight: '300',
                                        display: 'inline-block',
                                        marginTop: '5px'
                                    }}>
                                        // {item.cat}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Fixed "All Projects" Button Overlay */}
                {/* Positioned relative to viewport width (50vw) so it stays centered even as container scrolls */}
                <div style={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '50vw',
                    transform: 'translateX(-50%)',
                    zIndex: 100
                }}>
                    <a href="/projects" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: '#fff',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        letterSpacing: '2px',
                        borderBottom: '1px solid transparent',
                        transition: 'border-color 0.3s',
                        textShadow: '0 2px 5px rgba(0,0,0,0.5)'
                    }}
                        onMouseEnter={(e) => e.target.style.borderColor = '#fff'}
                        onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}
                    >
                        ALL DESIGNING PROJECTS
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}
