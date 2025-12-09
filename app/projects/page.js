"use client";
import React, { useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AllProjects() {
    const mainRef = useRef(null);
    const sectionRef = useRef(null);

    const projects = [
        {
            title: 'MY NIHONGO PATH',
            cat: 'EDUCATION',
            bg: '/images/projects/proj_01.webp',
            url: 'http://mynihongopath.online',
            desc: 'My Nihongo Path is a comprehensive Japanese learning platform designed to help students master Hiragana, Katakana, and Kanji through interactive lessons and practice tools.',
            tech: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'GTA 6 COUNTDOWN',
            cat: 'ENTERTAINMENT',
            bg: '/images/projects/proj_02.webp',
            url: 'https://gta6release.netlify.app',
            desc: 'GTA 6 release countdown website with a live timer, latest news updates, trailer embeds, and featured leaks. Includes fan theories, interactive comment sections, and social sharing for hype-building.',
            tech: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'GW PORTFOLIO',
            cat: 'PORTFOLIO',
            bg: '/images/projects/proj_03.webp',
            url: 'https://gesitha.netlify.app',
            desc: 'Professional portfolio website for a graphic designer featuring animated sections, project showcases, and a contact form. Includes skill progress bars and downloadable CV functionality.',
            tech: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'GLAMOUR HAVEN',
            cat: 'LIFESTYLE',
            bg: '/images/projects/proj-04.webp',
            url: 'https://glamour-haven.netlify.app/',
            desc: 'Elegant salon website with online booking system, service catalog, and gallery showcase. Features testimonials, pricing tables, and integrated contact forms for appointments.',
            tech: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'QNC E INSTITUTE',
            cat: 'EDUCATION',
            bg: '/images/projects/proj-05.webp',
            url: 'https://qnceinstitute.com/',
            desc: 'QNC E Institute is an innovative online platform dedicated to providing students with access to mathematics lecture videos.',
            tech: ['WordPress']
        },
        {
            title: 'TECKYBUILDS',
            cat: 'SHOWCASE',
            bg: '/images/projects/proj-06.webp',
            url: 'https://teckybuilds.netlify.app/',
            desc: 'Modern e-commerce website (Homepage Only) for PC components featuring a custom PC builder, product catalog, and service booking system. Includes responsive design.',
            tech: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'MESSAGING APP',
            cat: 'UI/UX',
            bg: '/images/projects/ui-proj-01.webp',
            url: 'https://www.figma.com/file/XhHQbjLXKEIGqvjNw87IlP/Chat-App?type=design&node-id=0%3A1&mode=design&t=NDdYVf61A7Qnsrup-1',
            desc: 'A modern messaging app simplifies communication, offering helpful features for both individuals and businesses, enabling quick information sharing and smoother collaboration.',
            tech: ['Figma']
        },
        {
            title: 'GAMING CLIENT',
            cat: 'UI/UX',
            bg: '/images/projects/ui-proj-02.webp',
            url: 'https://www.figma.com/file/MpGYe0n2q7QHUSLoJAiFM9/Game-Client?type=design&node-id=0%3A1&mode=design&t=FwTU1SVZpXCMCF6a-1',
            desc: 'A gaming platform provides easy access to many fun experiences, giving players lots of options and ensuring everyone has a great time playing games.',
            tech: ['Figma']
        },
        {
            title: 'BOOKING WEBSITE',
            cat: 'UI/UX',
            bg: '/images/projects/ui-proj-03.webp',
            url: 'https://www.figma.com/file/MpGYe0n2q7QHUSLoJAiFM9/Game-Client?type=design&node-id=0%3A1&mode=design&t=FwTU1SVZpXCMCF6a-1',
            desc: 'A user-friendly booking website lets you easily reserve what you need, whether it\'s a hotel room, a table at a restaurant, or tickets for an event.',
            tech: ['Figma']
        }
    ];

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Initialize ScrollSmoother if available
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

        const panels = gsap.utils.toArray(".project-panel");
        const totalPanels = panels.length;

        // Horizontal Scroll Logic
        // We pin the container and move the panels to the left
        gsap.to(panels, {
            xPercent: -100 * (totalPanels - 1),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                scrub: 1,
                // The scroll duration is based on the number of panels
                end: () => "+=" + (window.innerWidth * totalPanels),
                invalidateOnRefresh: true,
                snap: {
                    snapTo: 1 / (totalPanels - 1),
                    duration: { min: 0.2, max: 0.4 },
                    ease: "power1.inOut"
                }
            }
        });

        // Add parallax effects to inner elements
        panels.forEach((panel) => {
            const bg = panel.querySelector(".panel-bg");
            const content = panel.querySelector(".panel-content");
            const number = panel.querySelector(".panel-number");

            // Parallax background
            if (bg) {
                gsap.to(bg, {
                    backgroundPosition: "60% 50%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: panel,
                        containerAnimation: gsap.getTweensOf(panels)[0],
                        start: "left right",
                        end: "right left",
                        scrub: true
                    }
                });
            }

            // Text reveal
            if (content) {
                gsap.from(content, {
                    y: 50,
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: panel,
                        containerAnimation: gsap.getTweensOf(panels)[0],
                        start: "left center",
                        end: "right center",
                        toggleActions: "play reverse play reverse",
                    }
                });
            }

            // Number Parallax
            if (number) {
                gsap.to(number, {
                    x: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: panel,
                        containerAnimation: gsap.getTweensOf(panels)[0],
                        start: "left right",
                        end: "right left",
                        scrub: 1
                    }
                });
            }
        });

    }, { scope: mainRef });

    return (
        <div ref={mainRef} style={{ backgroundColor: '#000', color: '#fff', overflowX: 'hidden' }}>
            <Navigation />

            <div id="smooth-wrapper">
                <div id="smooth-content">

                    {/* Header Section */}
                    <div style={{
                        height: '70vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 100%)'
                    }}>
                        <h1 className="text-gradient" style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(3rem, 8vw, 8rem)',
                            fontWeight: 'bold',
                            lineHeight: 1,
                            marginBottom: '1rem'
                        }}>
                            SELECTED WORKS
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            color: '#888',
                            maxWidth: '600px',
                            padding: '0 20px',
                            fontFamily: 'var(--font-main)'
                        }}>
                            A gallery of my recent digital experiments and professional projects. Scroll to explore.
                        </p>
                        <div style={{ marginTop: '3rem', animation: 'bounce 2s infinite' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                            </svg>
                        </div>
                    </div>

                    {/* Horizontal Scroll Section */}
                    <div ref={sectionRef} style={{
                        height: '100vh',
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'nowrap',
                        overflow: 'hidden', // Hide overflow to clean up scrollbar
                    }}>
                        {/* Wrapper for panels */}
                        <div style={{ display: 'flex', height: '100vh', width: `${projects.length * 100}%` }}>
                            {projects.map((project, i) => (
                                <div key={i} className="project-panel" style={{
                                    width: '100vw',
                                    height: '100vh',
                                    flexShrink: 0,
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    borderRight: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    {/* Panel Background */}
                                    <div className="panel-bg" style={{
                                        position: 'absolute',
                                        top: 0, left: 0, width: '100%', height: '100%',
                                        backgroundImage: `url(${project.bg})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: '10% 50%', // Start position
                                        filter: 'brightness(0.4) saturate(0)', // Start B&W or dark
                                        transition: 'filter 0.5s',
                                        zIndex: 0
                                    }} />

                                    {/* Hover interaction for color */}
                                    <div
                                        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                                        onMouseEnter={(e) => {
                                            const bg = e.currentTarget.parentElement.querySelector('.panel-bg');
                                            if (bg) bg.style.filter = 'brightness(0.6) saturate(1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            const bg = e.currentTarget.parentElement.querySelector('.panel-bg');
                                            if (bg) bg.style.filter = 'brightness(0.4) saturate(0)';
                                        }}
                                    ></div>

                                    {/* Background Number */}
                                    <div className="panel-number" style={{
                                        position: 'absolute',
                                        bottom: '-5vh',
                                        right: '5vw',
                                        fontSize: '30vh',
                                        fontWeight: '900',
                                        color: 'rgba(255,255,255,0.03)',
                                        fontFamily: 'var(--font-display)',
                                        zIndex: 0,
                                        pointerEvents: 'none'
                                    }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </div>

                                    {/* Content Card */}
                                    <div className="panel-content" style={{
                                        position: 'relative',
                                        zIndex: 10,
                                        width: '85vw',
                                        maxWidth: '1200px',
                                        background: 'rgba(12, 12, 12, 0.8)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '32px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
                                    }}>
                                        {/* Header: Category & Title */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
                                            <div style={{
                                                color: 'var(--color-accent-cyan)',
                                                fontWeight: 'bold',
                                                letterSpacing: '3px',
                                                fontSize: '0.9rem',
                                                textTransform: 'uppercase',
                                                display: 'flex', alignItems: 'center', gap: '10px'
                                            }}>
                                                <span style={{ width: '20px', height: '2px', background: 'var(--color-accent-cyan)' }}></span>
                                                {project.cat}
                                            </div>

                                            <h2 className="project-title" style={{
                                                fontFamily: 'var(--font-display)',
                                                lineHeight: 1,
                                                color: '#fff',
                                                margin: 0,
                                                maxWidth: '100%',
                                                textShadow: '0 5px 15px rgba(0,0,0,0.5)'
                                            }}>
                                                {project.title}
                                            </h2>
                                        </div>

                                        {/* Body: Desc, Tech, Button */}
                                        <div className="content-grid">
                                            {/* Description & Tech */}
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                                <p style={{
                                                    fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                                                    fontFamily: 'var(--font-main)',
                                                    lineHeight: 1.6,
                                                    color: 'rgba(255,255,255,0.8)',
                                                    margin: 0,
                                                    maxWidth: '700px'
                                                }}>
                                                    {project.desc}
                                                </p>

                                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                                    {project.tech.map((t, idx) => (
                                                        <span key={idx} style={{
                                                            padding: '8px 18px',
                                                            border: '1px solid rgba(255,255,255,0.2)',
                                                            borderRadius: '100px',
                                                            fontSize: '0.85rem',
                                                            fontWeight: '500',
                                                            letterSpacing: '1px',
                                                            background: 'rgba(255,255,255,0.05)',
                                                            color: '#fff',
                                                            textTransform: 'uppercase'
                                                        }}>
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <div className="btn-container">
                                                <a href={project.url} target="_blank" className="custom-btn" style={{
                                                    display: 'inline-block',
                                                    padding: '1.2rem 3rem',
                                                    background: '#fff',
                                                    color: '#000',
                                                    textDecoration: 'none',
                                                    borderRadius: '100px',
                                                    fontWeight: 'bold',
                                                    fontSize: '1rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    transition: 'all 0.3s'
                                                }}>
                                                    Live View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                    40% {transform: translateY(-10px);}
                    60% {transform: translateY(-5px);}
                }
                .custom-btn:hover {
                    background: var(--color-accent-cyan) !important;
                    color: #fff !important;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px -5px rgba(0, 255, 255, 0.3);
                }
                .panel-content {
                    padding: 4rem;
                    gap: 2.5rem;
                }
                .project-title {
                    font-size: clamp(3rem, 6vw, 6rem);
                }
                .content-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 4rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    align-items: center; /* Vertically center button with text block */
                }
                .btn-container {
                    display: flex;
                    justify-content: flex-end;
                }
                @media (max-width: 1024px) {
                    .panel-content {
                        padding: 3rem;
                        gap: 2rem;
                        width: 90vw !important;
                    }
                    .project-title {
                        font-size: clamp(2.5rem, 8vw, 5rem);
                    }
                    .content-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                        align-items: start;
                    }
                    .btn-container {
                        justify-content: flex-start;
                    }
                }
                @media (max-width: 768px) {
                    .panel-content {
                        padding: 2rem;
                        gap: 1.5rem;
                        width: 95vw !important; /* Maximizing width usage */
                    }
                    .project-title {
                        font-size: clamp(2rem, 10vw, 3.5rem); /* Smaller on mobile */
                    }
                    .content-grid {
                        padding-top: 1.5rem;
                        gap: 1.5rem;
                    }
                    .custom-btn {
                        width: 100%;
                        text-align: center;
                    }
                }
            `}</style>
        </div>
    );
}