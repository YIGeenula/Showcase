"use client";
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Blog() {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navigation />

            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 20px',
                background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 100%)'
            }}>
                <h1 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, var(--color-accent-cyan), var(--color-accent-purple))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    BLOG
                </h1>
                <p style={{
                    fontFamily: 'var(--font-main)',
                    fontSize: '1.2rem',
                    color: '#888',
                    maxWidth: '600px'
                }}>
                    Insights, thoughts, and updates. Coming soon.
                </p>
                <a href="/" style={{
                    marginTop: '2rem',
                    padding: '12px 30px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.3s'
                }}>
                    Return Home
                </a>
            </div>

            <Footer />
        </div>
    );
}
