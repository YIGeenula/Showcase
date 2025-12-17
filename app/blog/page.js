"use client";
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Blog() {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navigation />

            <main style={{
                flex: 1,
                padding: '120px 20px 60px',
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Insights, thoughts, and updates from the intersection of design, code, and AI.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '30px',
                    width: '100%'
                }}>
                    {/* Article Card 4 - Newest */}
                    <a href="/blog/chatgpt-5-2-breakthrough-ai-update-2025" style={{ textDecoration: 'none', display: 'block' }}>
                        <div className="glass-panel" style={{
                            padding: '30px',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s, border-color 0.3s',
                            cursor: 'pointer',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--color-accent-cyan)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                        >
                            <span style={{
                                color: 'var(--color-accent-cyan)',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                marginBottom: '15px',
                                display: 'block'
                            }}>
                                Dec 17, 2025
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.5rem',
                                marginBottom: '15px',
                                color: '#fff',
                                lineHeight: '1.3'
                            }}>
                                ChatGPT 5.2: The Breakthrough AI Update
                            </h2>
                            <p style={{
                                color: '#aaa',
                                lineHeight: '1.6',
                                fontSize: '0.95rem',
                                flex: 1,
                                marginBottom: '20px'
                            }}>
                                OpenAI launches ChatGPT 5.2, a major evolution in the GPT-5 model line. Discover the new distinct variants and major upgrades.
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: 'var(--color-accent-purple)',
                                fontWeight: '600',
                                fontSize: '0.9rem'
                            }}>
                                Read Article
                                <span style={{ marginLeft: '8px', fontSize: '1.2rem' }}>&rarr;</span>
                            </div>
                        </div>
                    </a>
                    {/* Article Card 3 - Newest */}
                    <a href="/blog/epic-games-leak-december-2025" style={{ textDecoration: 'none', display: 'block' }}>
                        <div className="glass-panel" style={{
                            padding: '30px',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s, border-color 0.3s',
                            cursor: 'pointer',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--color-accent-cyan)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                        >
                            <span style={{
                                color: 'var(--color-accent-cyan)',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                marginBottom: '15px',
                                display: 'block'
                            }}>
                                Dec 16, 2025
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.5rem',
                                marginBottom: '15px',
                                color: '#fff',
                                lineHeight: '1.3'
                            }}>
                                Epic Games Leak: Massive Free Games Lineup for December 2025?
                            </h2>
                            <p style={{
                                color: '#aaa',
                                lineHeight: '1.6',
                                fontSize: '0.95rem',
                                flex: 1,
                                marginBottom: '20px'
                            }}>
                                A massive leak details nearly $300 worth of free games this December, including Red Dead Redemption 2 and Detroit: Become Human.
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: 'var(--color-accent-purple)',
                                fontWeight: '600',
                                fontSize: '0.9rem'
                            }}>
                                Read Article
                                <span style={{ marginLeft: '8px', fontSize: '1.2rem' }}>&rarr;</span>
                            </div>
                        </div>
                    </a>
                    {/* Article Card 2 - New */}
                    <a href="/blog/how-to-use-ai-to-generate-website-content" style={{ textDecoration: 'none', display: 'block' }}>
                        <div className="glass-panel" style={{
                            padding: '30px',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s, border-color 0.3s',
                            cursor: 'pointer',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--color-accent-cyan)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                        >
                            <span style={{
                                color: 'var(--color-accent-cyan)',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                marginBottom: '15px',
                                display: 'block'
                            }}>
                                Dec 13, 2025
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.5rem',
                                marginBottom: '15px',
                                color: '#fff',
                                lineHeight: '1.3'
                            }}>
                                How to Use AI to Generate Website Content That Looks Human
                            </h2>
                            <p style={{
                                color: '#aaa',
                                lineHeight: '1.6',
                                fontSize: '0.95rem',
                                flex: 1,
                                marginBottom: '20px'
                            }}>
                                Stop publishing robotic text. Learn the exact prompts and strategies to make AI content indistinguishable from human writing.
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: 'var(--color-accent-purple)',
                                fontWeight: '600',
                                fontSize: '0.9rem'
                            }}>
                                Read Article
                                <span style={{ marginLeft: '8px', fontSize: '1.2rem' }}>&rarr;</span>
                            </div>
                        </div>
                    </a>
                    {/* Article Card 1 */}
                    <a href="/blog/how-ai-is-changing-web-development" style={{ textDecoration: 'none', display: 'block' }}>
                        <div className="glass-panel" style={{
                            padding: '30px',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s, border-color 0.3s',
                            cursor: 'pointer',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--color-accent-cyan)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                        >
                            <span style={{
                                color: 'var(--color-accent-cyan)',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                marginBottom: '15px',
                                display: 'block'
                            }}>
                                Dec 12, 2025
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.5rem',
                                marginBottom: '15px',
                                color: '#fff',
                                lineHeight: '1.3'
                            }}>
                                How AI Is Changing Web Development (Real Examples)
                            </h2>
                            <p style={{
                                color: '#aaa',
                                lineHeight: '1.6',
                                fontSize: '0.95rem',
                                flex: 1,
                                marginBottom: '20px'
                            }}>
                                Discover how AI is reshaping web development in 2025. From UI design to backend optimization, explore real-world examples and tools.
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: 'var(--color-accent-purple)',
                                fontWeight: '600',
                                fontSize: '0.9rem'
                            }}>
                                Read Article
                                <span style={{ marginLeft: '8px', fontSize: '1.2rem' }}>&rarr;</span>
                            </div>
                        </div>
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}
