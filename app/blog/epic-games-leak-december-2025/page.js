import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Epic Games Store Leak: Massive Free Games Lineup for December 2025 | CodexBlaze Blog',
    description: 'A massive leak suggests the Epic Games Store is giving away nearly $300 worth of free games this December, including Red Dead Redemption 2 and Detroit: Become Human.',
    keywords: [
        'Epic Games Store',
        'Free Games',
        'Leak',
        'December 2025',
        'Red Dead Redemption 2',
        'Detroit Become Human',
        'Mortal Kombat 11'
    ],
    openGraph: {
        title: 'Epic Games Store Leak: Massive Free Games Lineup for December 2025',
        description: 'Rumors suggest Epic Games is giving away nearly $300 worth of free games this December. Check out the leaked list.',
        images: ['/blog-epicG.png']
    }
};

const LeakedGameCard = ({ date, title, status, isBigHit }) => {
    return (
        <div className="glass-panel" style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            border: isBigHit ? '1px solid var(--color-accent-purple)' : '1px solid var(--color-glass-border)',
            background: isBigHit ? 'linear-gradient(180deg, rgba(189, 0, 255, 0.05) 0%, rgba(0,0,0,0) 100%)' : 'var(--color-glass)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {isBigHit && (
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(189,0,255,0.1) 0%, rgba(0,0,0,0) 70%)',
                    pointerEvents: 'none'
                }} />
            )}
            <span style={{
                color: status === 'Confirmed' ? 'var(--color-accent-lime)' : status === 'Fake' ? '#ff4444' : '#888',
                fontSize: '0.85rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '5px'
            }}>
                {date} {status && ` • ${status}`}
            </span>
            <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: isBigHit ? '1.5rem' : '1.1rem',
                color: status === 'Fake' ? '#666' : '#fff',
                marginBottom: '0',
                textDecoration: status === 'Fake' ? 'line-through' : 'none'
            }}>
                {title}
            </h3>
        </div>
    );
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
                            background: 'rgba(0, 240, 255, 0.1)',
                            borderRadius: '50px',
                            border: '1px solid rgba(0, 240, 255, 0.3)',
                            marginBottom: '1.5rem'
                        }}>
                            <span style={{
                                color: 'var(--color-accent-cyan)',
                                fontWeight: '700',
                                letterSpacing: '2px',
                                fontSize: '0.8rem',
                                textTransform: 'uppercase'
                            }}>
                                ⚠ Rumor Alert
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
                            Epic Games Leak: <br />
                            <span className="text-gradient">The 15-Game Holiday Lineup</span>
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
                            <time itemProp="datePublished" dateTime="2025-12-17">Publish Date: Dec 16, 2025</time>
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
                                src="/blog-epicG.png"
                                alt="Epic Games Store Holiday Giveaway Leak"
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
                            The Epic Games Store's annual holiday mystery game giveaway is always a highlight for PC gamers. But if a recent leak is to be believed, <span style={{ color: 'var(--color-accent-cyan)', fontWeight: '600' }}>December 2025</span> might go down in history.
                        </p>

                        <p style={{ marginBottom: '3rem' }}>
                            Rumors reported by <a href="https://www.notebookcheck.net" target="_blank" className="text-gradient" style={{ fontWeight: 'bold' }}>NotebookCheck</a> suggest Epic is dropping nearly <strong>$300 worth of games</strong>, ending with a triple-threat finale that sounds almost too good to be true.
                        </p>

                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={sectionHeaderStyle}>
                                <span style={{ color: 'var(--color-accent-purple)' }}>//</span> The Leaked Schedule
                            </h2>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '15px',
                                marginTop: '2rem'
                            }}>
                                <LeakedGameCard date="Dec 11 - 18" title="Hogwarts Legacy" status="Confirmed" />
                                <LeakedGameCard date="Dec 18 - 19" title="Jurassic World: Evolution 2" status="Fake" />
                                <LeakedGameCard date="Dec 19 - 20" title="Desperados 3" status="Fake" />
                                <LeakedGameCard date="Dec 20 - 21" title="Total War: Warhammer" status="Fake" />
                                <LeakedGameCard date="Dec 21 - 22" title="Tropico 5" status="Fake" />
                                <LeakedGameCard date="Dec 22" title="Chicken Police – Paint it Red!" />
                                <LeakedGameCard date="Dec 23" title="Loop Hero" />
                                <LeakedGameCard date="Dec 24" title="LEGO Batman" />
                                <LeakedGameCard date="Dec 25" title="Commander Keen" />
                                <LeakedGameCard date="Dec 26" title="Farming Simulator 2022" />
                                <LeakedGameCard date="Dec 27" title="Slime Rancher 2" />
                                <LeakedGameCard date="Dec 28" title="Terraria" />
                            </div>

                            {/* THE BIG THREE */}
                            <div style={{ marginTop: '30px' }}>
                                <div style={{
                                    marginBottom: '10px',
                                    fontFamily: 'var(--font-display)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    fontSize: '0.9rem',
                                    color: '#888',
                                    textAlign: 'center'
                                }}>
                                    The Grand Finale
                                </div>
                                <div style={{ display: 'grid', gap: '15px' }}>
                                    <LeakedGameCard date="Dec 29" title="Detroit: Become Human" isBigHit={true} />
                                    <LeakedGameCard date="Dec 30" title="Mortal Kombat 11" isBigHit={true} />
                                    <LeakedGameCard date="Dec 31" title="Red Dead Redemption 2" isBigHit={true} />
                                </div>
                            </div>
                        </div>

                        {/* DETAILED BREAKDOWN */}
                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={sectionHeaderStyle}>A Closer Look at the Headliners</h2>
                            <p style={{ marginBottom: '2rem' }}>
                                While the daily drops include solid indie hits like <em>Loop Hero</em> and strategy gems like <em>Tropico 5</em>, the real conversation starters are the heavy hitters scheduled for the final week.
                            </p>

                            <div style={{ display: 'grid', gap: '30px' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>Red Dead Redemption 2</h3>
                                    <p>
                                        Rockstar's 2018 masterpiece is widely regarded as one of the most detailed and immersive open worlds ever created. Offering it for free would be an unprecedented move for the platform. Players step into the boots of Arthur Morgan in a gripping tale of loyalty, betrayal, and the dying days of the outlaw era.
                                    </p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>Detroit: Become Human</h3>
                                    <p>
                                        A narrative-driven experience where every choice matters. This game fits perfectly with Epic's history of offering high-quality, story-rich titles. You control three androids as they gain sentience and navigate a futuristic society on the brink of chaos.
                                    </p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>Mortal Kombat 11</h3>
                                    <p>
                                        The definitive fighting game of the last generation, offering hours of content for both solo players and competitive fighters. With its stunning graphics and deep combat system, it remains a staple in the genre.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* STRATEGY ANALYSIS */}
                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={sectionHeaderStyle}>Why Would Epic Do This?</h2>
                            <p>
                                Epic Games has never been shy about spending big to acquire users. With the holiday season being the most competitive time for digital storefronts, a lineup this aggressive suggests they are looking to cement their status as a serious competitor to Steam, not just a launcher you open for <em>Fortnite</em>.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                If true, this giveaway alone could bring millions of new users to the ecosystem, many of whom might stick around for the January sales.
                            </p>
                        </div>

                        <div className="glass-panel" style={{ padding: '40px', marginBottom: '4rem', background: 'rgba(255, 68, 68, 0.03)', border: '1px solid rgba(255, 68, 68, 0.2)' }}>
                            <h2 style={{ ...sectionHeaderStyle, marginTop: 0, fontSize: '1.8rem', color: '#ff4444' }}>The "Truth" Test Result</h2>
                            <p>
                                The verdict is in, and it's not looking good for this particular leak. The litmus test for this list was <strong>December 18th</strong>.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                Since <em>Jurassic World: Evolution 2</em> was NOT the free game (replaced by <em>Jotunnslayer: Hordes of Hel</em>), the credibility of the triple-threat finale—including Red Dead Redemption 2—is now extremely low.
                            </p>
                        </div>

                        <h2 style={sectionHeaderStyle}>Conclusion</h2>
                        <p style={{ marginBottom: '2rem' }}>
                            With <em>Hogwarts Legacy</em> already setting a high bar, it's not impossible that Epic Games is going all out. If this list holds true, 2025 is ending with a bang.
                        </p>

                        <div style={{
                            borderTop: '1px solid #333',
                            paddingTop: '2rem',
                            marginTop: '4rem',
                            fontSize: '0.9rem',
                            color: '#666',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <span>Source: <a href="https://www.notebookcheck.net/Epic-Games-Store-leak-reveals-nearly-300-worth-of-free-game-giveaway-plans-in-December-2025.1184163.0.html" target="_blank" className="text-gradient" style={{ fontWeight: 'bold' }}>NotebookCheck & Chinese Social Media</a></span>
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
