"use client";
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const web = [
    { id: 'w1', type: 'WEB', title: 'MY NIHONGO PATH', cat: 'EDUCATION', bg: '/images/projects/proj_01.webp', url: 'http://mynihongopath.online', desc: 'My Nihongo Path is a comprehensive Japanese learning platform designed to help students master Hiragana, Katakana, and Kanji through interactive lessons and practice tools.', tech: ['HTML', 'CSS', 'JavaScript'] },
    { id: 'w2', type: 'WEB', title: 'GTA 6 COUNTDOWN', cat: 'ENTERTAINMENT', bg: '/images/projects/proj_02.webp', url: 'https://gta6release.netlify.app', desc: 'GTA 6 release countdown website with a live timer, latest news updates, trailer embeds, and featured leaks.', tech: ['HTML', 'CSS', 'JavaScript'] },
    { id: 'w3', type: 'WEB', title: 'GW PORTFOLIO', cat: 'PORTFOLIO', bg: '/images/projects/proj_03.webp', url: 'https://gesitha.netlify.app', desc: 'Professional portfolio website for a graphic designer featuring animated sections, project showcases, and a contact form.', tech: ['HTML', 'CSS', 'JavaScript'] },
    { id: 'w4', type: 'WEB', title: 'GLAMOUR HAVEN', cat: 'LIFESTYLE', bg: '/images/projects/proj-04.webp', url: 'https://glamour-haven.netlify.app/', desc: 'Elegant salon website with online booking system, service catalog, and gallery showcase.', tech: ['HTML', 'CSS', 'JavaScript'] },
    { id: 'w5', type: 'WEB', title: 'QNC E INSTITUTE', cat: 'EDUCATION', bg: '/images/projects/proj-05.webp', url: 'https://qnceinstitute.com/', desc: 'Innovative online platform dedicated to providing students with access to mathematics lecture videos.', tech: ['WordPress'] },
    { id: 'w6', type: 'WEB', title: 'TECKYBUILDS', cat: 'SHOWCASE', bg: '/images/projects/proj-06.webp', url: 'https://teckybuilds.netlify.app/', desc: 'Modern e-commerce website for PC components featuring a custom PC builder, product catalog, and service booking system.', tech: ['HTML', 'CSS', 'JavaScript'] }

];

const graphics = [
    { id: 'g1', type: 'DESIGN', title: 'BRAND IDENTITY', cat: 'LOGO & BRANDING', img: '/images/graphics/graphic_01.jpg', desc: 'Comprehensive brand identity design for Aurora Dynamics, including logo design, business cards, letterhead, and smartphone UI mockups mapping the new visual language.' },
    { id: 'g2', type: 'DESIGN', title: 'SOCIAL CAMPAIGN', cat: 'MARKETING KIT', img: '/images/graphics/graphic_02.jpg', desc: 'A vibrant, high-conversion visual marketing kit designed for creative agencies to highlight key metrics, client success stories, and team spotlights.' },
    { id: 'g3', type: 'DESIGN', title: 'FESTIVAL POSTER', cat: 'PRINT DESIGN', img: '/images/graphics/graphic_03.jpg', desc: 'High-impact, neon typography-driven print and digital poster design for a futuristic music and tech festival called Synthesis.' },
    { id: 'g4', type: 'DESIGN', title: 'LUXE PACKAGING', cat: 'PRODUCT DESIGN', img: '/images/graphics/graphic_04.jpg', desc: 'Minimalist, luxury packaging design concept for LUMINÉRE night repair serum, emphasizing premium materials and sleek silver foiling.' },
    { id: 'w7', type: 'UI/UX', title: 'MESSAGING APP', cat: 'UI/UX', img: '/images/projects/ui-proj-01.webp', desc: 'A modern messaging app simplifies communication, offering helpful features for both individuals and businesses.' },
    { id: 'w8', type: 'UI/UX', title: 'GAMING CLIENT', cat: 'UI/UX', img: '/images/projects/ui-proj-02.webp', desc: 'A gaming platform provides easy access to many fun experiences, giving players lots of options and ensuring everyone has a great time playing games.' },
    { id: 'w9', type: 'UI/UX', title: 'BOOKING WEBSITE', cat: 'UI/UX', img: '/images/projects/ui-proj-03.webp', desc: 'A user-friendly booking website lets you easily reserve what you need, whether it\'s a hotel room, a table at a restaurant, or tickets for an event.' }
];

export default function AllProjects() {
    const mainRef = useRef(null);
    const webSectionRef = useRef(null);
    const webContainerRef = useRef(null);
    const gfxSectionRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            // WEB PROJECTS: Horizontal Scroll Effect
            const webCards = gsap.utils.toArray('.web-card');
            const getScrollAmount = () => {
                let webContainerWidth = webContainerRef.current.scrollWidth;
                return -(webContainerWidth - window.innerWidth + 200); // offset
            };

            gsap.to(webCards, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: webSectionRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => `+=${webContainerRef.current.scrollWidth}`,
                    invalidateOnRefresh: true,
                }
            });

            // Fade out the Digital Realms title as scrolling begins
            gsap.to('.web-sticky-title', {
                opacity: 0,
                x: -100,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: webSectionRef.current,
                    start: "top top",
                    end: "+=600",
                    scrub: true,
                }
            });
            // GRAPHIC DESIGN: Simple Showcase Scroll (No Pinning)
            const gfxRows = gsap.utils.toArray('.gfx-row');

            gfxRows.forEach((row, i) => {
                gsap.from(row, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        });

        mm.add("(max-width: 1023px)", () => {
            // Mobile simple fade up animations
            gsap.utils.toArray('.web-card, .gfx-card').forEach((el) => {
                gsap.from(el, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        });

        return () => mm.revert();
    }, { scope: mainRef });

    return (
        <div ref={mainRef} style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
            {/* INJECTED MOBILE FIX */}
            <style>{`
                .web-card:hover {
                    box-shadow: 0 20px 40px rgba(0,235,255,0.15) !important;
                    border-color: rgba(0,235,255,0.3) !important;
                }
                .web-card:hover img {
                    transform: scale(1.05) !important;
                    filter: brightness(0.9) grayscale(0) !important;
                }

                @media (max-width: 1023px) {
                    .web-section-container {
                        height: auto !important;
                        display: block !important;
                        padding: 100px 5% !important;
                    }
                    .web-sticky-title {
                        position: relative !important;
                        left: 0 !important;
                        top: 0 !important;
                        margin-bottom: 40px !important;
                    }
                    .web-container {
                        padding: 0 !important;
                        flex-direction: column !important;
                        align-items: stretch !important;
                        gap: 30px !important;
                    }
                    .web-card {
                        width: 100% !important;
                        height: clamp(300px, 45vh, 400px) !important;
                    }
                    .gfx-row {
                        grid-template-columns: 1fr !important;
                    }
                }

                @keyframes gasStationFlicker {
                    /* Dead (Outline only) for roughly 5.3 seconds (0% to 88%) */
                    0%, 88% {
                        color: transparent;
                        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
                        text-shadow: none;
                    }
                    /* Random chaotic stuttering for the remaining 0.7s (88% to 100%) */
                    88.5% { color: rgba(255, 255, 255, 0.4); text-shadow: 0 0 5px rgba(255, 255, 255, 0.4); }
                    89% { color: transparent; text-shadow: none; }
                    90% { color: rgba(255, 255, 255, 0.8); text-shadow: 0 0 8px rgba(255, 255, 255, 0.8); }
                    90.5% { color: transparent; text-shadow: none; }
                    91% { color: rgba(255, 255, 255, 0.6); text-shadow: 0 0 5px rgba(255, 255, 255, 0.6); }
                    92% { color: rgba(255, 255, 255, 1); text-shadow: 0 0 10px rgba(255, 255, 255, 1); }
                    93% { color: transparent; text-shadow: none; }
                    94% { color: rgba(255, 255, 255, 1); text-shadow: 0 0 10px rgba(255, 255, 255, 1); }
                    94.5% { color: transparent; text-shadow: none; }
                    95.5% { color: rgba(255, 255, 255, 0.9); text-shadow: 0 0 10px rgba(255, 255, 255, 0.9); }
                    96.5% { color: rgba(255, 255, 255, 0.5); text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
                    98% { color: transparent; text-shadow: none; }
                    99% { color: rgba(255, 255, 255, 0.3); text-shadow: 0 0 2px rgba(255, 255, 255, 0.3); }
                    100% { color: transparent; text-shadow: none; }
                }

                .flicker-text {
                    animation: gasStationFlicker 6s infinite normal;
                }

                .vw-title .word-visual {
                    color: #fff;
                    transition: color 0.3s ease;
                }
                .vw-title .word-works {
                    color: #ff00ff;
                    transition: color 0.3s ease;
                }
                .vw-title:hover .word-visual {
                    color: #ff00ff;
                }
                .vw-title:hover .word-works {
                    color: #fff;
                }
            `}</style>
            {/* Ambient Background Glows */}
            <div style={{ position: 'fixed', top: '10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(0,255,255,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
            <div style={{ position: 'fixed', bottom: '10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(255,0,255,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

            <Navigation />

            {/* Immersive Header */}
            <div style={{
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '100px',
                position: 'relative'
            }}>
                <h1 className="flicker-text" style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(4rem, 12vw, 10rem)',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    margin: 0,
                    lineHeight: 1,
                    textAlign: 'center',
                    WebkitTextStroke: '1px rgba(255,255,255,0.3)',
                    color: 'transparent' /* Default fallback state */
                }}>
                    CREATIVE <br /> ARCHIVE
                </h1>
                <div style={{ transform: 'translateY(-2vw)', display: 'inline-block' }}>
                    <span style={{
                        background: 'var(--color-accent-cyan, #00ebff)',
                        color: '#000',
                        padding: '10px 25px',
                        fontWeight: 'bold',
                        letterSpacing: '4px',
                        fontSize: '0.9rem',
                        transform: 'rotate(-3deg)',
                        display: 'inline-block',
                        boxShadow: '0 10px 30px rgba(0,235,255,0.3)'
                    }}>
                        WEB & GRAPHICS
                    </span>
                </div>
            </div>

            {/* WEB PROJECTS SECTION (Horizontal Scroll) */}
            <section ref={webSectionRef} className="web-section-container" style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#0a0a0a',
                borderTop: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div className="web-sticky-title" style={{
                    position: 'absolute',
                    top: '15%',
                    left: '5%',
                    zIndex: 10,
                    pointerEvents: 'none'
                }}>
                    <h2 className="flicker-text" style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3rem, 6vw, 6rem)',
                        fontWeight: 900,
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)',
                        margin: 0,
                        lineHeight: 1
                    }}>
                        DIGITAL <br /> REALMS
                    </h2>
                    <p style={{
                        color: 'var(--color-accent-cyan, #00ebff)',
                        letterSpacing: '5px',
                        marginTop: '15px',
                        fontWeight: 'bold'
                    }}>WEB PROJECTS</p>
                </div>

                <div ref={webContainerRef} className="web-container" style={{
                    display: 'flex',
                    gap: '40px',
                    paddingLeft: '35vw',
                    paddingRight: '15vw',
                    alignItems: 'center'
                }}>
                    {web.map((project, i) => (
                        <div key={project.id} className="web-card" style={{
                            flexShrink: 0,
                            width: 'clamp(1200px, 50vw, 750px)',
                            height: 'clamp(700px, 35vh, 450px)',
                            position: 'relative',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: '#000',
                            transition: 'box-shadow 0.4s ease, border-color 0.4s ease, transform 0.4s ease'
                        }}>
                            <img src={project.bg} alt={project.title} style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.6) grayscale(50%)',
                                transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                            }} />

                            <div style={{
                                position: 'absolute',
                                bottom: 0, left: 0, right: 0,
                                padding: '30px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                    <div style={{ width: '20px', height: '2px', background: 'var(--color-accent-cyan, #00ebff)' }}></div>
                                    <span style={{ color: '#fff', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>{project.cat}</span>
                                </div>
                                <h3 style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '2rem',
                                    margin: '0 0 15px 0',
                                    textTransform: 'uppercase',
                                    lineHeight: 1.1
                                }}>{project.title}</h3>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '15px' }}>
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} style={{
                                            padding: '4px 10px',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            borderRadius: '30px',
                                            fontSize: '0.7rem',
                                            color: '#ccc'
                                        }}>{t}</span>
                                    ))}
                                </div>

                                {project.url !== '#' ? (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        color: 'var(--color-accent-cyan, #00ebff)',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase'
                                    }}>
                                        Explore <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </a>
                                ) : (
                                    <span style={{ color: '#666', fontSize: '0.8rem', textTransform: 'uppercase' }}>Concept Design</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* GRAPHIC DESIGN SECTION (Stacked Cards) - COMMENTED OUT TEMPORARILY
            <section ref={gfxSectionRef} style={{
                padding: '150px 5%',
                backgroundColor: '#000',
                position: 'relative',
                borderTop: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                    <h2 className="vw-title" style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: 900,
                        margin: 0,
                        textTransform: 'uppercase',
                        cursor: 'default'
                    }}>
                        <span className="word-visual">VISUAL</span> <span className="word-works">WORKS</span>
                    </h2>
                    <p style={{ color: '#aaa', letterSpacing: '4px', marginTop: '15px' }}>BRANDING & EXPERIMENTAL</p>
                </div>

                <div style={{
                    maxWidth: '1600px',
                    margin: '0 auto',
                    position: 'relative',
                    perspective: '1000px',
                    padding: '0 20px'
                }}>
                    {Array.from({ length: Math.ceil(graphics.length / 2) }).map((_, rowIndex) => {
                        const rowCards = graphics.slice(rowIndex * 2, rowIndex * 2 + 2);
                        return (
                            <div key={rowIndex} className="gfx-row" style={{
                                width: '100%',
                                marginBottom: '50px',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                                gap: '30px'
                            }}>
                                {rowCards.map((project, i) => (
                                    <div key={project.id} className="gfx-card" style={{
                                        position: 'relative',
                                        height: 'clamp(400px, 60vh, 600px)',
                                        backgroundColor: '#0c0c0c',
                                        borderRadius: '30px',
                                        overflow: 'hidden',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
                                    }}>

                                        {/* Full Background Image *\/}
                                        <img src={project.img} alt={project.title} style={{
                                            position: 'absolute',
                                            top: 0, left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            filter: 'brightness(0.6) grayscale(30%)'
                                        }} />

                                        {/* Elevated Content Overlay *\/}
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            padding: 'clamp(30px, 5vw, 60px)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                                            zIndex: 2
                                        }}>
                                            <span style={{
                                                color: '#ff00ff',
                                                fontSize: '0.9rem',
                                                letterSpacing: '5px',
                                                textTransform: 'uppercase',
                                                fontWeight: 'bold',
                                                alignSelf: 'flex-start',
                                                background: 'rgba(0,0,0,0.6)',
                                                padding: '10px 25px',
                                                borderRadius: '50px',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255,0,255,0.3)'
                                            }}>
                                                {String(rowIndex * 2 + i + 1).padStart(2, '0')} // {project.cat}
                                            </span>

                                            <div style={{ marginTop: 'auto' }}>
                                                <h3 style={{
                                                    fontFamily: 'var(--font-display)',
                                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                                    margin: '0 0 15px 0',
                                                    lineHeight: 1.1,
                                                    textTransform: 'uppercase',
                                                    color: '#fff',
                                                    textShadow: '0 10px 30px rgba(0,0,0,0.8)'
                                                }}>{project.title}</h3>
                                                <p style={{
                                                    fontSize: '1rem',
                                                    color: '#ddd',
                                                    lineHeight: 1.6,
                                                    margin: 0,
                                                    overflow: 'hidden',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    textShadow: '0 5px 15px rgba(0,0,0,0.8)'
                                                }}>{project.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </section>
            */}

            <Footer />
        </div>
    );
}
