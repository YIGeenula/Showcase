"use client";
import React, { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";

export default function Navigation() {
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef([]);
    const buttonRef = useRef(null);
    const pathname = usePathname();
    const isHome = pathname === '/';

    // State to track active section (optional, but good for UI)
    const [activeLink, setActiveLink] = useState('Home');

    useGSAP(() => {
        // 1. Initial Reveal
        const tl = gsap.timeline({ delay: 0.2 });

        tl.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(logoRef.current, {
                x: -20,
                opacity: 0,
                duration: 0.5
            }, "-=0.5")
            .from(linksRef.current, {
                y: -20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5
            }, "-=0.3")
            .from(buttonRef.current, {
                x: 20,
                opacity: 0,
                duration: 0.5
            }, "-=0.5");

        // 2. Scroll Effect (Frosted Glass)
        // Only valid if scrolling exists, but ScrollTrigger should handle body safely
        gsap.to(navRef.current, {
            scrollTrigger: {
                trigger: "body",
                start: "top -50", // when scrolled 50px
                end: "top -100",
                toggleActions: "play none none reverse"
            },
            backgroundColor: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "15px",
            paddingBottom: "15px",
            duration: 0.3
        });

        // 3. Hover Effects for Links
        linksRef.current.forEach((link) => {
            if (!link) return;

            // Hover
            link.addEventListener("mouseenter", () => {
                gsap.to(link, { color: "var(--color-accent-cyan)", duration: 0.3 });
                gsap.to(link.querySelector(".dot"), { scale: 1, opacity: 1, duration: 0.3 });
            });

            // Leave
            link.addEventListener("mouseleave", () => {
                gsap.to(link, { color: "#fff", duration: 0.3 });
                gsap.to(link.querySelector(".dot"), { scale: 0, opacity: 0, duration: 0.3 });
            });
        });

    }, { scope: navRef });

    const navLinks = [
        { name: 'HOME', href: '#hero' },
        { name: 'ABOUT', href: '#about' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'WORK', href: '#projects' },
        { name: 'CONTACT', href: '#contact' }
    ];

    const handleSmoothScroll = (e, href) => {
        // If we are not on home, let normal navigation happen to "/"
        if (!isHome) return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            // Use GSAP ScrollTo if available, otherwise native
            if (window.gsap && window.gsap.plugins.scrollTo) {
                window.gsap.to(window, { duration: 1, scrollTo: target, ease: "power3.inOut" });
            } else {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header
            ref={navRef}
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                padding: '30px 50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1000,
                transition: 'padding 0.3s ease',
                width: '100%'
            }}
        >
            {/* LOGO - MODIFIED for larger, bolder 'X' */}
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div ref={logoRef} style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-1px' }}>
                    CODE<span style={{ fontWeight: 'bolder', fontSize: '1.8rem' }}>X</span>BLAZE<span style={{ color: 'var(--color-accent-cyan)' }}>.</span>
                </div>
            </a>

            {/* NAVIGATION LINKS */}
            <nav style={{ display: 'flex', gap: '40px', alignItems: 'center', display: 'none' /* Hidden on small screens normally, but we keep simple */ }}>
                <div className="desktop-nav" style={{ display: 'flex', gap: '40px' }}>
                    {navLinks.map((link, i) => (
                        <a
                            key={link.name}
                            href={isHome ? link.href : `/${link.href}`}
                            onClick={(e) => handleSmoothScroll(e, link.href)}
                            ref={el => linksRef.current[i] = el}
                            style={{
                                color: '#fff',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                letterSpacing: '1px',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                        >
                            {link.name}
                            {/* Hover Dot */}
                            <span className="dot" style={{
                                position: 'absolute',
                                bottom: '-5px',
                                left: '50%',
                                transform: 'translateX(-50%) scale(0)',
                                width: '4px',
                                height: '4px',
                                backgroundColor: 'var(--color-accent-cyan)',
                                borderRadius: '50%',
                                opacity: 0
                            }}></span>
                        </a>
                    ))}
                </div>
            </nav>

            {/* CTA BUTTON */}
            <div ref={buttonRef}>
                <a
                    href="/projects"
                    style={{
                        padding: '12px 25px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '30px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#fff',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        backgroundColor: 'rgba(255,255,255,0.05)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff';
                        e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.color = '#fff';
                    }}
                >
                    PROJECTS
                </a>
            </div>

            {/* Mobile Style Override */}
            <style jsx>{`
            @media (max-width: 768px) {
                .desktop-nav {
                    display: none !important;
                }
            }
        `}</style>

        </header>
    );
}