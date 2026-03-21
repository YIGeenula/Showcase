"use client";
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";
export default function Projects() {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);


    useGSAP(() => {
        let sections = gsap.utils.toArray(".project-panel");

        let mm = gsap.matchMedia();

        // Target all screens with matched media settings for responsiveness
        mm.add("(min-width: 320px)", () => {
            if (sections.length > 0) {
                gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        pin: true,
                        scrub: 1, // 1-second delay for smooth following
                        anticipatePin: 1, // helps avoid jarring jumps on mobile
                        snap: {
                            snapTo: 1 / (sections.length - 1),
                            duration: { min: 0.2, max: 0.6 },
                            delay: 0.1,
                            ease: "power1.inOut"
                        },
                        start: "top top",
                        // Require scrolling down an amount equal to height of all panels combined for smooth 1:1 feel
                        end: () => "+=" + (document.querySelector(".projects-wrapper").offsetWidth || window.innerHeight * sections.length)
                    }
                });
            }
        });
    }, { scope: containerRef });



    const projects = [
        {
            title: 'CODEXFUEL',
            cat: 'SERVICE',
            bg: '/images/projects/proj-07.webp',
            url: 'https://codexfuel.netlify.app'
        },
        {
            title: 'MY NIHONGO PATH',
            cat: 'EDUCATION',
            bg: '/images/projects/proj_01.webp',
            url: 'http://mynihongopath.online'
        },
        {
            title: 'GW PORTFOLIO',
            cat: 'PORTFOLIO',
            bg: '/images/projects/proj_03.webp',
            url: 'https://gesitha.netlify.app'
        },

    ];

    return (
        <>
            <div
                id="projects"
                ref={containerRef}
                className="projects-wrapper"
            >
                {projects.map((p, i) => (
                    <section
                        key={i}
                        className="project-panel"
                    >
                        {/* Background Image — no blur on mobile (CSS handles it) */}
                        <div className="project-bg" style={{
                            backgroundImage: `url(${p.bg})`,
                        }}></div>

                        {/* Gradient Overlay */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                            background: 'linear-gradient(to top, #000 0%, transparent 100%)',
                            zIndex: 1
                        }}></div>

                        <div className="content" style={{ zIndex: 2, textAlign: 'center' }}>
                            <p style={{ fontSize: '1.2rem', letterSpacing: '0.3em', marginBottom: '1rem', color: 'var(--color-accent-lime)' }}>{p.cat}</p>

                            <h2
                                className="project-title"
                                style={{
                                    fontSize: 'clamp(2.5rem, 8vw, 8rem)',
                                    fontFamily: 'var(--font-display)',
                                    lineHeight: 0.9,
                                    cursor: 'pointer',
                                    color: '#fff',
                                    transition: 'color 0.3s ease',
                                    backgroundImage: 'linear-gradient(90deg, var(--color-accent-cyan) 20%, #8A2BE2 100%)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                }}
                                onMouseEnter={(e) => {
                                    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.5, yoyo: true, repeat: 1, ease: "power2.inOut" });
                                    e.currentTarget.style.color = 'transparent';
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
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

                        {/* Decorative number */}
                        <div style={{ position: 'absolute', top: '10%', left: '10%', fontSize: '10rem', opacity: 0.05, fontWeight: 900, color: '#fff' }}>0{i + 1}</div>
                    </section>
                ))}

                {/* "All Projects" link */}
                <div className="projects-cta">
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
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fff'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                    >
                        ALL WEB PROJECTS
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>

            <style jsx>{`
                /* ---- DESKTOP & MOBILE: GSAP-driven horizontal pinned scroll ---- */
                .projects-wrapper {
                    width: ${projects.length * 100}%;
                    height: 100vh;
                    height: 100dvh;
                    display: flex;
                    flex-wrap: nowrap;
                    margin: 0;
                    padding: 0;
                    position: relative;
                }

                .project-panel {
                    width: 100vw;
                    height: 100vh;
                    height: 100dvh;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }

                .project-bg {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background-size: cover;
                    background-position: center;
                    z-index: 0;
                    filter: brightness(0.5) blur(5px);
                    transform: scale(1.05);
                }

                .projects-cta {
                    position: absolute;
                    bottom: 50px;
                    left: 50vw;
                    transform: translateX(-50%);
                    z-index: 100;
                }

                .swipe-dots { display: none; }

                /* ---- MOBILE OPTIMIZATIONS ---- */
                @media (max-width: 768px) {
                    /* No blur on mobile — expensive on GPU */
                    .project-bg {
                        filter: brightness(0.5) !important;
                        transform: none !important;
                    }

                    /* CTA sits inside the first card on mobile — hidden via the
                       absolute overlay approach below, so just keep it positioned */
                    .projects-cta {
                        /* Keep it inside the scroll container, anchored to first card */
                        position: absolute !important;
                        bottom: 28px !important;
                        left: 50vw !important;
                        transform: translateX(-50%) !important;
                        z-index: 100 !important;
                    }
                }
            `}</style>
        </>
    );
}