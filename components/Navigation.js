"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";

export default function Navigation() {
    const navRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const menuItemsRef = useRef([]);
    const hamburgerRef = useRef(null);

    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Initial Animations
    useGSAP(() => {
        // Navbar Reveal
        gsap.from(navRef.current, {
            yPercent: -100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            delay: 0.2
        });

        // Ensure Mobile Menu is hidden initially via GSAP
        // This sets opacity to 1 (visible) but moves it offscreen to the right
        gsap.set(mobileMenuRef.current, { xPercent: 100, opacity: 1 });
    }, { scope: navRef });

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle Mobile Menu
    const toggleMenu = () => {
        if (isMobileMenuOpen) {
            // Close
            setIsMobileMenuOpen(false);
            gsap.to(mobileMenuRef.current, {
                xPercent: 100,
                duration: 0.5,
                ease: "power3.in"
            });
            document.body.style.overflow = 'auto';
        } else {
            // Open
            setIsMobileMenuOpen(true);
            document.body.style.overflow = 'hidden';

            // Slide In
            gsap.to(mobileMenuRef.current, {
                xPercent: 0,
                duration: 0.5,
                ease: "power3.out"
            });

            // Animate Items
            if (menuItemsRef.current.length > 0) {
                gsap.fromTo(menuItemsRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2, ease: "power2.out" }
                );
            }
        }
    };

    // Close on route change
    useEffect(() => {
        if (isMobileMenuOpen) {
            toggleMenu();
        }
    }, [pathname]);


    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <>
            <header
                ref={navRef}
                className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            >
                <div className="nav-container">
                    {/* LOGO */}
                    <Link href="/" className="logo">
                        CODE<span className="logo-accent">X</span>BLAZE
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="desktop-nav">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`nav-link ${isActive ? 'active' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA BUTTON (Desktop) */}
                    <div className="nav-cta">
                        <Link href="/projects" className="cta-button">
                            Projects
                        </Link>
                    </div>

                    {/* MOBILE HAMBURGER */}
                    <button
                        className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                        ref={hamburgerRef}
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* MOBILE MENU OVERLAY */}
            <div
                ref={mobileMenuRef}
                className="mobile-menu"
            // Removed inline visibility style to rely on GSAP positioning
            >
                <div className="mobile-menu-content">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="mobile-link"
                            ref={el => menuItemsRef.current[i] = el}
                            onClick={() => setTimeout(toggleMenu, 100)} // Small delay
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div ref={el => menuItemsRef.current[navLinks.length] = el}>
                        <Link href="/projects" className="mobile-cta" onClick={() => setTimeout(toggleMenu, 100)}>
                            Projects
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* -- NAVBAR STYLES -- */
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding: 1.5rem 0;
                    z-index: 10000; /* Ensuring Navbar is ALWAYS on top */
                    transition: background 0.4s ease, padding 0.4s ease, border-bottom 0.4s ease;
                    border-bottom: 1px solid transparent;
                }

                .navbar.scrolled {
                    padding: 1rem 0;
                    background: rgba(5, 5, 5, 0.9);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                .nav-container {
                    width: 90%;
                    max-width: 1400px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                /* -- LOGO -- */
                .logo {
                    font-size: 1.5rem;
                    font-weight: 800;
                    font-family: var(--font-display);
                    color: #fff;
                    letter-spacing: -1px;
                    text-transform: uppercase;
                    /* Higher Z-Index than mobile menu (though parent navbar is already higher) */
                    position: relative;
                }
                
                .logo-accent {
                    color: var(--color-accent-cyan);
                    font-size: 1.8rem;
                    margin: 0 2px;
                }

                /* -- DESKTOP NAV -- */
                .desktop-nav {
                    display: flex;
                    gap: 2.5rem;
                    align-items: center;
                }

                .nav-link {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.95rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: color 0.3s ease;
                    position: relative;
                }

                .nav-link:hover, .nav-link.active {
                    color: #fff;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0%;
                    height: 2px;
                    background: var(--color-accent-cyan);
                    transition: width 0.3s ease;
                }

                .nav-link:hover::after, .nav-link.active::after {
                    width: 100%;
                }

                /* -- CTA BUTTON -- */
                .cta-button {
                    padding: 12px 28px;
                    background: #fff;
                    color: #000;
                    font-weight: 700;
                    font-size: 0.9rem;
                    border-radius: 50px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: all 0.3s ease;
                }

                .cta-button:hover {
                    background: var(--color-accent-cyan);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 20px rgba(0, 240, 255, 0.3);
                }

                /* -- HAMBURGER -- */
                .hamburger {
                    display: none;
                    flex-direction: column;
                    gap: 6px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 10px;
                    position: relative;
                }

                .hamburger span {
                    display: block;
                    width: 30px;
                    height: 2px;
                    background: #fff;
                    transition: all 0.3s ease;
                }
                
                .hamburger.open span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 6px);
                }
                .hamburger.open span:nth-child(2) {
                    transform: rotate(-45deg) translate(5px, -6px);
                }

                /* -- MOBILE MENU OVERLAY -- */
                .mobile-menu {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: #000;
                    z-index: 9999; /* Just below Navbar (10000) */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    /* Initial hidden state handled by GSAP, but fallback here */
                    /* transform: translateX(100%);  <-- REMOVED to avoid conflict */
                }

                .mobile-menu-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                }

                .mobile-link {
                    font-family: var(--font-display);
                    font-size: 2.5rem;
                    color: rgba(255,255,255,0.8);
                    text-transform: uppercase;
                    font-weight: 700;
                    transition: color 0.3s;
                }

                .mobile-link:hover {
                    color: var(--color-accent-cyan);
                }
                
                .mobile-cta {
                    margin-top: 2rem;
                    padding: 15px 40px;
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 50px;
                    color: #fff;
                    font-size: 1.2rem;
                    text-transform: uppercase;
                }

                /* -- RESPONSIVE -- */
                @media (max-width: 1024px) {
                    .desktop-nav, .nav-cta {
                        display: none;
                    }
                    .hamburger {
                        display: flex;
                    }
                }
            `}</style>
        </>
    );
}