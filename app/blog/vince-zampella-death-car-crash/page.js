import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Vince Zampella Dead at 55: Call of Duty Co-Creator Dies in Tragic Car Crash',
    description: 'Vince Zampella, the legendary video game designer best known as the co-creator of the global Call of Duty franchise, has died at age 55 following a car accident.',
    keywords: [
        'Vince Zampella',
        'Call of Duty',
        'Respawn Entertainment',
        'Titanfall',
        'Apex Legends',
        'Battlefield 6',
        'Infinity Ward',
        'Video Game News'
    ],
    openGraph: {
        title: 'Vince Zampella Dead at 55: Call of Duty Co-Creator Dies in Tragic Car Crash',
        description: 'Vince Zampella, the legendary video game designer best known as the co-creator of the global Call of Duty franchise, has died at age 55 following a car accident.',
        images: ['/VinceZampella.jpg']
    }
};

export default function BlogPost() {
    return (
        <div style={{ backgroundColor: '#000', color: '#e0e0e0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navigation />

            <main style={{ flex: 1, padding: '140px 20px 80px' }}>
                <article
                    style={{ maxWidth: '900px', margin: '0 auto' }}
                    itemScope
                    itemType="https://schema.org/Article"
                >

                    {/* Header */}
                    <header
                        style={{ marginBottom: '4rem', textAlign: 'center' }}
                        itemScope
                        itemType="https://schema.org/WPHeader"
                    >
                        <div style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            background: 'rgba(255, 68, 68, 0.1)',
                            borderRadius: '50px',
                            border: '1px solid rgba(255, 68, 68, 0.3)',
                            marginBottom: '1.5rem'
                        }}>
                            <span style={{
                                color: '#ff4444',
                                fontWeight: '700',
                                letterSpacing: '2px',
                                fontSize: '0.8rem',
                                textTransform: 'uppercase'
                            }}>
                                Breaking News
                            </span>
                        </div>

                        <h1
                            itemProp="headline"
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                fontWeight: 'bold',
                                margin: '20px 0',
                                lineHeight: '1.1',
                                background: 'linear-gradient(135deg, #fff 0%, #aaa 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0 0 40px rgba(255,255,255,0.1)'
                            }}
                        >
                            Vince Zampella Dead at 55: <br />
                            <span className="text-gradient">Call of Duty Co-Creator Dies in Tragic Car Crash</span>
                        </h1>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                            marginTop: '2rem',
                            color: '#888',
                            fontFamily: 'var(--font-main)'
                        }}>
                            <time itemProp="datePublished" dateTime="2025-12-21">December 21, 2025</time>
                        </div>
                    </header>

                    {/* Hero Image */}
                    <div style={{ marginBottom: '5rem', position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            inset: '-2px',
                            background: 'linear-gradient(45deg, var(--color-accent-cyan), var(--color-accent-purple))',
                            borderRadius: '22px',
                            filter: 'blur(20px)',
                            opacity: 0.3,
                            zIndex: 0
                        }}></div>
                        <div style={{
                            position: 'relative',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '1px solid var(--color-glass-border)',
                            zIndex: 1,
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            <img
                                src="/VinceZampella.jpg"
                                alt="Vince Zampella"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                loading="lazy"
                                itemProp="image"
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '50%',
                                background: 'linear-gradient(to top, #000 0%, transparent 100%)'
                            }}></div>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="blog-content" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#ccc' }}>

                        <p style={{ marginBottom: '2rem', fontSize: '1.4rem', color: '#fff', fontWeight: '300' }}>
                            Vince Zampella, the legendary video game designer best known as the co-creator of the global <span style={{ color: 'var(--color-accent-cyan)', fontWeight: '600' }}>Call of Duty</span> franchise, has died at age 55 following a car accident in Southern California on December 21, 2025. The sudden news has shaken the gaming community worldwide and prompted tributes from industry leaders, fans, and fellow developers alike.
                        </p>

                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={sectionHeaderStyle}>
                                <span style={{ color: 'var(--color-accent-purple)' }}>//</span> Accident Details: Tragic Crash on Angeles Crest Highway
                            </h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                According to multiple reports, Zampella was driving a Ferrari on Angeles Crest Highway north of Los Angeles when his vehicle veered off the road after leaving a tunnel, struck a concrete barrier, and caught fire. Zampella died at the scene, and a passenger in the car later died at a hospital. Officials have not yet disclosed a final cause for the crash.
                            </p>
                            <p>
                                The California Highway Patrol is investigating the incident, but details such as whether speed, weather, or other factors contributed remain under review.
                            </p>
                        </div>

                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={sectionHeaderStyle}>A Titan of Gaming: Zampella’s Legacy</h2>

                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem', marginTop: '2rem' }}>Rise to Fame: Infinity Ward and Call of Duty</h3>
                            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                <div style={{ flex: '1 1 300px' }}>
                                    <p>
                                        Vince Zampella co-founded Infinity Ward in 2002 alongside Jason West and Grant Collier. There, he helped create Call of Duty, which debuted in 2003 and reshaped the first-person shooter (FPS) genre with cinematic storytelling, immersive gameplay, and blockbuster sales. The franchise has since sold over 500 million copies worldwide, becoming one of the most successful video game series in history.
                                    </p>
                                </div>
                                <div style={{ flex: '0 0 200px', margin: '0 auto' }}>
                                    <img
                                        src="/CallofDutyLogo.jpg"
                                        alt="Call of Duty Logo"
                                        style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--color-glass-border)' }}
                                    />
                                </div>
                            </div>

                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem', marginTop: '3rem' }}>Respawn Entertainment and Continued Innovation</h3>
                            <p style={{ marginBottom: '1.5rem' }}>
                                After parting ways with Activision in 2010 following a high-profile legal dispute, Zampella co-founded Respawn Entertainment, a studio that went on to develop critically acclaimed titles such as:
                            </p>
                            <ul style={{ listStyleType: 'none', paddingLeft: '20px', borderLeft: '3px solid var(--color-accent-cyan)', marginBottom: '2rem' }}>
                                <li style={{ marginBottom: '10px' }}>Titanfall and Titanfall 2</li>
                                <li style={{ marginBottom: '10px' }}>Apex Legends</li>
                                <li style={{ marginBottom: '10px' }}>Star Wars Jedi: Fallen Order and Star Wars Jedi: Survivor</li>
                            </ul>
                            <p>
                                Respawn was acquired by Electronic Arts (EA), where Zampella continued to influence major projects and was recently involved in leading development of Battlefield 6, released earlier in 2025 to strong reviews.
                            </p>
                        </div>

                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={sectionHeaderStyle}>Industry & Community Reactions</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Tributes poured in from across the video game industry. EA, Respawn, Infinity Ward, Battlefield, and other major studios expressed deep sorrow and admiration, remembering Zampella as a visionary leader, creative force, and mentor whose influence spanned generations.
                            </p>
                            <p>
                                Gaming journalists and peers echoed these sentiments, sharing personal memories and emphasizing his role in empowering developers and inspiring millions of players globally.
                            </p>
                        </div>

                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={sectionHeaderStyle}>Personal Life & Survivors</h2>
                            <p>
                                Zampella is survived by his three children. He was previously married to his ex-wife, Brigette Zampella, with whom he shared a long partnership and raised their family. Tributes from his children on social media reflected the close bond they shared.
                            </p>
                        </div>

                        <div className="glass-panel" style={{ padding: '30px', marginTop: '4rem', background: 'var(--color-glass)', border: '1px solid var(--color-glass-border)' }}>
                            <h2 style={{ ...sectionHeaderStyle, marginTop: 0, fontSize: '1.8rem' }}>What Comes Next</h2>
                            <p>
                                His passing not only marks the end of an era for FPS games but also renews attention on Call of Duty’s continued evolution, upcoming projects at Respawn, and the Call of Duty film adaptation currently in development with Paramount Pictures.
                            </p>
                        </div>

                        <div style={{
                            borderTop: '1px solid #333',
                            paddingTop: '2rem',
                            marginTop: '4rem',
                            fontSize: '0.9rem',
                            color: '#666',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <a href="/blog" style={{ color: 'var(--color-accent-cyan)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                ← Back to Blog
                            </a>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div >
    );
}

const sectionHeaderStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '2rem',
    fontWeight: '600',
    marginTop: '3rem',
    marginBottom: '1.5rem',
    color: '#fff'
};
