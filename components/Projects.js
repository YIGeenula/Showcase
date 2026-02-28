"use client";
import React, { useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";

export default function Projects() {
    const containerRef = useRef(null);

    useGSAP(() => {
        let sections = gsap.utils.toArray(".project-panel");

        if (sections.length > 0) {
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    start: "top top",
                    end: "+=" + (sections.length * 1000)
                }
            });
        }

        // Removed the GSAP color/glitch hover loop since we are using
        // React's onMouseEnter/onMouseLeave for the gradient effect.

    }, { scope: containerRef });

    const projects = [
        {
            title: 'MY NIHONGO PATH',
            cat: 'EDUCATION',
            bg: '/images/projects/proj_01.webp',
            url: 'http://mynihongopath.online'
        },
        {
            title: 'GTA 6 COUNTDOWN',
            cat: 'ENTERTAINMENT',
            bg: '/images/projects/proj_02.webp',
            url: 'https://gta6release.netlify.app'
        },
        {
            title: 'GW PORTFOLIO',
            cat: 'PORTFOLIO',
            bg: '/images/projects/proj_03.webp',
            url: 'https://gesitha.netlify.app'
        },
    ];

    return (
        <div id="projects" ref={containerRef} style={{ width: `${projects.length * 100}%`, height: '100vh', display: 'flex', flexWrap: 'nowrap', margin: 0, padding: 0 }}>
            {projects.map((p, i) => (
                <section key={i} className="project-panel" style={{ width: '100vw', height: '100vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>

                    {/* Background Image */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, width: '100%', height: '100%',
                        backgroundImage: `url(${p.bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0,
                        filter: 'brightness(0.5) blur(5px)',
                        transform: 'scale(1.0)'
                    }}></div>

                    {/* Gradient Overlay */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        background: 'linear-gradient(to top, #000 0%, transparent 100%)',
                        zIndex: 1
                    }}></div>

                    <div className="content" style={{ zIndex: 2, textAlign: 'center', mixBlendMode: 'normal' }}>
                        <p style={{ fontSize: '1.2rem', letterSpacing: '0.3em', marginBottom: '1rem', color: 'var(--color-accent-lime)' }}>{p.cat}</p>

                        {/* PROJECT TITLE - MODIFIED FOR HOVER GRADIENT */}
                        <h2
                            className="project-title"
                            style={{
                                fontSize: 'clamp(3rem, 8vw, 8rem)',
                                fontFamily: 'var(--font-display)',
                                lineHeight: 0.9,
                                cursor: 'pointer',

                                // NEW DEFAULT STATE: White text
                                color: '#fff',
                                transition: 'color 0.3s ease', // Smooth transition for the color change

                                // STATIC GRADIENT DEFINITION (shows when color is 'transparent')
                                backgroundImage: 'linear-gradient(90deg, var(--color-accent-cyan) 20%, #8A2BE2 100%)', // Cyan to Purple Gradient
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                            }}
                            onMouseEnter={(e) => {
                                // 1. Scale/Glitch animation (GSAP)
                                gsap.to(e.currentTarget, { scale: 1.05, duration: 0.5, yoyo: true, repeat: 1, ease: "power2.inOut" });
                                // 2. Color change to transparent (reveals gradient)
                                e.currentTarget.style.color = 'transparent';
                            }}
                            onMouseLeave={(e) => {
                                // 1. Revert scale (GSAP)
                                gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
                                // 2. Revert color to white (hides gradient)
                                e.currentTarget.style.color = '#fff';
                            }}
                        >
                            {p.title}
                        </h2>

                        <a href={p.url || '#'} target="_blank" rel="noopener noreferrer" style={{
                            marginTop: '2rem',
                            display: 'inline-block',
                            padding: '12px 30px',
                            background: '#fff',
                            color: '#000',
                            borderRadius: '30px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            transition: 'all 0.3s'
                        }}
                            onMouseEnter={(e) => gsap.to(e.target, { scale: 1.1, duration: 0.2 })}
                            onMouseLeave={(e) => gsap.to(e.target, { scale: 1, duration: 0.2 })}
                        >
                            VISIT WEBSITE
                        </a>
                    </div>

                    {/* Decorative floating elements */}
                    <div style={{ position: 'absolute', top: '10%', left: '10%', fontSize: '10rem', opacity: 0.05, fontWeight: 900, color: '#fff' }}>0{i + 1}</div>
                </section>
            ))}

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
                    ALL WEB PROJECTS
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    );
}