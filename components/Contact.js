"use client";
import React, { useRef, useState } from 'react';
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";

export default function Contact() {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState(null);

    useGSAP(() => {
        // 1. Reveal Animation
        gsap.from(formRef.current.children, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: formRef.current,
                start: "top 70%"
            }
        });
    }, { scope: formRef });

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "19c40814-729c-4c17-ae38-0a947a599617");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Data Transmitted Successfully.");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult("Transmission Failed. Retry.");
            }
        } catch (error) {
            console.error("Submission error", error);
            setResult("Connection Error.");
        } finally {
            setIsSubmitting(false);
            // Clear success message after 5 seconds
            setTimeout(() => setResult(null), 5000);
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '20px',
        background: '#09090b',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px',
        color: '#fff',
        outline: 'none',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        fontFamily: 'var(--font-main)'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '10px',
        fontSize: '0.8rem',
        color: '#888',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: 600
    };

    return (
        <section id="contact" className="section" style={{
            padding: '100px 0',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(to bottom, #000 0%, #050505 100%)'
        }}>
            <div className="container" style={{ width: '90%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* Title Section */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h4 style={{ color: 'var(--color-accent-cyan)', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '15px', textTransform: 'uppercase' }}>
                        / Contact Link
                    </h4>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontFamily: 'var(--font-display)',
                        lineHeight: 1.1,
                        color: '#fff'
                    }}>
                        Let’s Build the <span className="text-gradient">Unknown.</span>
                    </h2>
                    <p style={{ marginTop: '20px', color: '#888', maxWidth: '500px', margin: '20px auto 0', lineHeight: 1.6 }}>
                        Have an ambitious project? Need a futuristic web experience?
                        Initiate the protocol below.
                    </p>
                </div>

                {/* Form Section */}
                <div ref={formRef} style={{ width: '100%', maxWidth: '600px' }}>
                    <form onSubmit={onSubmit}>
                        <div style={{ marginBottom: '25px' }}>
                            <label style={labelStyle}>Your Identity (Name)</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                style={inputStyle}
                                onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent-cyan)'; e.target.style.background = '#0e0e11'; }}
                                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.background = '#09090b'; }}
                            />
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <label style={labelStyle}>Frequency ID (Email)</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                style={inputStyle}
                                onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent-cyan)'; e.target.style.background = '#0e0e11'; }}
                                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.background = '#09090b'; }}
                            />
                        </div>

                        <div style={{ marginBottom: '35px' }}>
                            <label style={labelStyle}>Data Packet (Message)</label>
                            <textarea
                                name="message"
                                required
                                placeholder="Tell me about your project..."
                                rows="5"
                                style={{ ...inputStyle, resize: 'vertical' }}
                                onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent-cyan)'; e.target.style.background = '#0e0e11'; }}
                                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.background = '#09090b'; }}
                            ></textarea>
                        </div>

                        <button type="submit" style={{
                            width: '100%',
                            padding: '20px',
                            background: '#fff',
                            color: '#000',
                            border: 'none',
                            borderRadius: '50px',
                            fontSize: '1rem',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            cursor: isSubmitting ? 'wait' : 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            opacity: isSubmitting ? 0.7 : 1,
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => { if (!isSubmitting) { e.target.style.background = 'var(--color-accent-cyan)'; e.target.style.transform = 'translateY(-2px)'; } }}
                            onMouseLeave={(e) => { if (!isSubmitting) { e.target.style.background = '#fff'; e.target.style.transform = 'translateY(0)'; } }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                            {!isSubmitting && (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            )}
                        </button>

                        {result && (
                            <div style={{
                                marginTop: '20px',
                                padding: '15px',
                                borderRadius: '8px',
                                textAlign: 'center',
                                background: result.includes("Success") ? 'rgba(0, 255, 128, 0.1)' : 'rgba(255, 50, 50, 0.1)',
                                color: result.includes("Success") ? '#00ebaf' : '#ff4d4d',
                                border: `1px solid ${result.includes("Success") ? '#00ebaf' : '#ff4d4d'}`,
                                fontSize: '0.9rem'
                            }}>
                                {result}
                            </div>
                        )}

                    </form>
                </div>

            </div>
        </section>
    );
}
