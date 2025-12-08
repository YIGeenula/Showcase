"use client";
import React, { useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";

export default function Skills() {
    const containerRef = useRef(null);

    const skills = [
        {
            id: '01',
            title: 'Frontend Development',
            desc: 'Building pixel-perfect, responsive web applications with semantic HTML, modern CSS, and performant JavaScript.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            )
        },
        {
            id: '02',
            title: 'UI / UX Design',
            desc: 'Crafting intuitive user journeys and high-fidelity prototypes using Figma. Focusing on accessibility and micro-interactions.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                </svg>
            )
        },
        {
            id: '03',
            title: 'React Ecosystem',
            desc: 'Architecting scalable applications with Next.js, React, and Context API. Server-side rendering and static generation mastery.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
            )
        },
        {
            id: '04',
            title: 'Interactive Motion',
            desc: 'Bringing static designs to life with GSAP animations, WebGL shaders, and physics-based interactions.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            )
        }
    ];

    useGSAP(() => {
        // 1. Staggered Reveal
        gsap.from(".skill-row", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        // 2. Line Draw animation
        gsap.from(".divider-line", {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1,
            stagger: 0.15,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%"
            }
        });

        // 3. Hover Interaction per row
        const rows = gsap.utils.toArray(".skill-row");
        rows.forEach(row => {
            const icon = row.querySelector(".skill-icon");

            row.addEventListener("mouseenter", () => {
                gsap.to(row, { backgroundColor: "rgba(255,255,255,0.05)", paddingLeft: "20px", duration: 0.3 });
                gsap.to(icon, { rotate: 90, scale: 1.2, color: "var(--color-accent-cyan)", duration: 0.4 });
            });
            row.addEventListener("mouseleave", () => {
                gsap.to(row, { backgroundColor: "transparent", paddingLeft: "0px", duration: 0.3 });
                gsap.to(icon, { rotate: 0, scale: 1, color: "inherit", duration: 0.4 });
            });
        });

    }, { scope: containerRef });

    return (
        <section id="skills" ref={containerRef} className="section" style={{ minHeight: '100vh', padding: '100px 0', alignItems: 'flex-start' }}>
            <div className="container" style={{ width: '80%', maxWidth: '1200px', margin: '0 auto' }}>

                {/* Section Title - Optional, maybe just keep it clean or minimal */}
                <div style={{ marginBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '20px' }}>
                    <p style={{ color: '#888', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px' }}>Expertise</p>
                </div>

                <div className="skills-list" style={{ width: '100%' }}>
                    {skills.map((skill) => (
                        <div key={skill.id} style={{ overflow: 'hidden' }}>

                            <div className="skill-row" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '30px 0',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                                flexWrap: 'wrap'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '200px' }}>
                                    {/* Number */}
                                    <span style={{
                                        fontSize: '1.2rem',
                                        color: '#666',
                                        fontFamily: 'var(--font-display)',
                                        marginRight: '20px',
                                        minWidth: '30px'
                                    }}>
                                        {skill.id}
                                    </span>

                                    {/* Title */}
                                    <h3 className="skill-title" style={{
                                        fontSize: 'clamp(1.2rem, 3vw, 3rem)',
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 600,
                                        flex: 1,
                                        marginRight: '10px'
                                    }}>
                                        {skill.title}
                                    </h3>
                                </div>

                                {/* Description (Hidden on mobile via CSS) */}
                                <div className="skill-desc" style={{
                                    width: '35%',
                                    fontSize: '0.95rem',
                                    color: '#999',
                                    lineHeight: 1.5,
                                    marginRight: '20px',
                                }}>
                                    {skill.desc}
                                </div>

                                {/* Icon */}
                                <div className="skill-icon" style={{ opacity: 0.5, transition: 'color 0.3s' }}>
                                    {skill.icon}
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="divider-line" style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                /* Default: Hidden on mobile */
                .skill-desc {
                    display: none;
                }
                
                /* Desktop: Visible */
                @media (min-width: 768px) {
                    .skill-desc {
                        display: block !important;
                    }
                }
            `}</style>
        </section>
    );
}
