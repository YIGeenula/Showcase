"use client";
import React, { useRef, useState } from 'react';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";
import Navigation from '@/components/Navigation';

export default function ContactPage() {
    const containerRef = useRef(null);
    const formRef = useRef(null);
    const titleRef = useRef(null);

    // Form State
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Mouse Move Parallax
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5);
        const yPos = (clientY / window.innerHeight - 0.5);

        gsap.to(".shape-1", {
            x: xPos * 100,
            y: yPos * 100,
            duration: 1,
            ease: "power2.out"
        });
        gsap.to(".shape-2", {
            x: xPos * -80,
            y: yPos * -80,
            duration: 1,
            ease: "power2.out"
        });
        gsap.to(".shape-3", {
            x: xPos * 50,
            y: yPos * 50,
            duration: 1,
            ease: "power2.out"
        });
    };

    // GSAP Animations
    useGSAP(() => {
        const tl = gsap.timeline();

        // Background & Container fade in
        // Using fromTo to prevent React Strict Mode issues where elements disappear
        tl.fromTo(containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: "power2.out" }
        )
            .fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
                "-=0.5"
            )
            .fromTo(".form-group",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
                "-=0.3"
            )
            .fromTo(".submit-btn",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                "-=0.2"
            );

        // Continuous Loop for Shapes (Idle animation + Mouse override)
        // We use specific targets so they don't conflict heavily with mouse move, 
        // or we can just let mouse move be the primary interaction. 
        // Let's add a subtle float that composes with the mouse movement.
        gsap.to(".shape-1", { rotation: 360, duration: 20, repeat: -1, ease: "linear" });
        gsap.to(".shape-3", { rotation: -360, duration: 25, repeat: -1, ease: "linear" });

    }, { scope: containerRef });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Success Animation
        gsap.to(formRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5
        });
    };

    return (
        <>
            <Navigation />
            <div className="contact-page" ref={containerRef} onMouseMove={handleMouseMove}>
                {/* Animated Background Shapes */}
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>

                <div className="contact-container">
                    <h1 className="contact-title" ref={titleRef}>
                        Let's Build <br />
                        <span className="text-accent">Something Epic.</span>
                    </h1>

                    {!isSuccess ? (
                        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                />
                                <div className="focus-border"></div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                />
                                <div className="focus-border"></div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                ></textarea>
                                <div className="focus-border"></div>
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    minHeight: '60px'
                                }}
                            >
                                {isSubmitting ? (
                                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', height: '20px' }}>
                                        <style>{`
                                            @keyframes data-transmit-contact {
                                                0%, 100% { height: 8px; opacity: 0.3; }
                                                50% { height: 20px; opacity: 1; }
                                            }
                                        `}</style>
                                        <div style={{ width: '4px', background: '#000', borderRadius: '2px', animation: 'data-transmit-contact 1s ease-in-out infinite 0s' }}></div>
                                        <div style={{ width: '4px', background: '#000', borderRadius: '2px', animation: 'data-transmit-contact 1s ease-in-out infinite 0.15s' }}></div>
                                        <div style={{ width: '4px', background: '#000', borderRadius: '2px', animation: 'data-transmit-contact 1s ease-in-out infinite 0.3s' }}></div>
                                        <div style={{ width: '4px', background: '#000', borderRadius: '2px', animation: 'data-transmit-contact 1s ease-in-out infinite 0.45s' }}></div>
                                        <div style={{ width: '4px', background: '#000', borderRadius: '2px', animation: 'data-transmit-contact 1s ease-in-out infinite 0.6s' }}></div>
                                    </div>
                                ) : (
                                    <>
                                        Send Message
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '10px' }}>
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                        <span className="btn-glare"></span>
                                    </>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className="success-message">
                            <h2>Message Sent!</h2>
                            <p>I'll be in touch shortly.</p>
                            <button
                                className="reset-btn"
                                onClick={() => {
                                    setIsSuccess(false);
                                    setFormState({ name: '', email: '', message: '' });
                                    gsap.set(formRef.current, { clearProps: "all" }); // Reset props
                                }}
                            >
                                Send Another
                            </button>
                        </div>
                    )}
                </div>

                <style jsx>{`
                .contact-page {
                    min-height: 100vh;
                    background-color: #050505;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-top: 80px;
                    color: #fff;
                    position: relative;
                    overflow: hidden;
                }
                
                .contact-page::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                    z-index: 0;
                    pointer-events: none;
                }

                .floating-shape {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.4;
                    z-index: 1;
                    pointer-events: none;
                }
                
                .shape-1 {
                    top: 10%;
                    left: 10%;
                    width: 400px;
                    height: 400px;
                    background: var(--color-accent-cyan);
                }
                
                .shape-2 {
                    bottom: 10%;
                    right: 10%;
                    width: 500px;
                    height: 500px;
                    background: purple;
                }

                .shape-3 {
                    top: 40%;
                    left: 40%;
                    width: 300px;
                    height: 300px;
                    background: blue;
                    opacity: 0.2;
                }

                .contact-container {
                    width: 90%;
                    max-width: 600px;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                }

                .contact-title {
                    font-family: var(--font-display);
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 800;
                    line-height: 1.1;
                    text-align: left;
                    letter-spacing: -1px;
                }

                .text-accent {
                    color: var(--color-accent-cyan);
                    text-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    background: rgba(20, 20, 20, 0.6);
                    padding: 3rem;
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    position: relative;
                }

                label {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.7);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-left: 5px;
                }

                input, textarea {
                    background: rgba(0, 0, 0, 0.3);
                    border: none;
                    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
                    padding: 15px;
                    color: #fff;
                    font-family: inherit;
                    font-size: 1rem;
                    border-radius: 8px 8px 0 0;
                    transition: all 0.3s ease;
                    outline: none;
                }

                input::placeholder, textarea::placeholder {
                    color: rgba(255, 255, 255, 0.2);
                }

                input:focus, textarea:focus {
                    background: rgba(255, 255, 255, 0.02);
                }

                .focus-border {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: var(--color-accent-cyan);
                    transition: 0.4s;
                    z-index: 2;
                }

                input:focus ~ .focus-border,
                textarea:focus ~ .focus-border {
                    width: 100%;
                }

                .submit-btn {
                    margin-top: 1rem;
                    padding: 16px;
                    background: #fff;
                    color: #000;
                    font-family: inherit;
                    font-weight: 800;
                    font-size: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 30px rgba(0, 240, 255, 0.2);
                    background: var(--color-accent-cyan);
                }
                
                .btn-glare {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                    transition: 0.5s;
                }
                
                .submit-btn:hover .btn-glare {
                    left: 100%;
                }

                .success-message {
                    text-align: center;
                    padding: 4rem;
                    background: rgba(20, 20, 20, 0.6);
                    border-radius: 20px;
                    border: 1px solid rgba(0, 240, 255, 0.3);
                }

                .success-message h2 {
                    color: var(--color-accent-cyan);
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }

                .reset-btn {
                    margin-top: 2rem;
                    background: transparent;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: #fff;
                    padding: 10px 25px;
                    border-radius: 30px;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .reset-btn:hover {
                    border-color: #fff;
                    background: rgba(255, 255, 255, 0.1);
                }

                @media (max-width: 768px) {
                    .contact-container {
                        width: 95%;
                        gap: 2rem;
                    }
                    .contact-form {
                        padding: 1.5rem;
                    }
                    .contact-title {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
            </div>
        </>
    );
}
