"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch initial likes count
        async function fetchLikes() {
            try {
                const { data, error } = await supabase
                    .from('website_stats')
                    .select('likes_count')
                    .eq('id', 1)
                    .single();

                if (error) {
                    console.error("Error fetching likes. If the table doesn't exist yet, run the SQL script.", error.message);
                    return;
                }
                if (data) setLikes(data.likes_count);
            } catch (error) {
                console.error("Error fetching likes:", error);
            } finally {
                setLoading(false);
            }
        }

        // Check local storage to see if the user has already liked the site
        const localLikeState = localStorage.getItem('hasLikedWebsite');
        if (localLikeState === 'true') {
            setHasLiked(true);
        }

        fetchLikes();

        // Optional: subscribe to changes if you want the count to update live for other users
        const subscription = supabase
            .channel('custom-all-channel')
            .on(
                'postgres_changes',
                { event: 'UPDATE', schema: 'public', table: 'website_stats', filter: 'id=eq.1' },
                (payload) => {
                    if (payload.new && payload.new.likes_count !== undefined) {
                        setLikes(payload.new.likes_count);
                    }
                }
            )
            .subscribe();

        return () => supabase.removeChannel(subscription);
    }, []);

    const handleLike = async () => {
        if (hasLiked) return; // Prevent multiple likes from same browser

        const previousLikes = likes;
        // Optimistic UI update
        setLikes(prev => prev + 1);
        setHasLiked(true);
        localStorage.setItem('hasLikedWebsite', 'true');

        try {
            // Call the RPC function to increment securely
            const { error } = await supabase.rpc('increment_likes');
            if (error) throw error;
        } catch (error) {
            console.error("Error updating likes:", error);
            // Revert optimistic update on failure
            setLikes(previousLikes);
            setHasLiked(false);
            localStorage.setItem('hasLikedWebsite', 'false');
            alert("Failed to register like. Ensure the Supabase table and RPC function are set up properly.");
        }
    };

    return (
        <div style={{ display: 'inline-block', margin: '2rem 0' }}>
            <button
                onClick={handleLike}
                disabled={loading || hasLiked || likes === null}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 28px',
                    borderRadius: '50px',
                    border: '1px solid',
                    borderColor: hasLiked ? 'rgba(76, 175, 80, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                    background: hasLiked ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                    color: hasLiked ? '#4caf50' : '#e0e0e0',
                    cursor: hasLiked || loading ? 'default' : 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    backdropFilter: 'blur(10px)',
                    fontFamily: 'var(--font-main)',
                    fontSize: '1rem',
                    transform: hasLiked ? 'scale(1)' : 'scale(1)',
                    boxShadow: hasLiked ? '0 0 20px rgba(76, 175, 80, 0.2)' : '0 4px 15px rgba(0,0,0,0.2)',
                }}
                onMouseOver={(e) => {
                    if (!hasLiked && !loading) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                }}
                onMouseOut={(e) => {
                    if (!hasLiked && !loading) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={hasLiked ? "#4caf50" : "none"}
                    stroke={hasLiked ? "#4caf50" : "currentColor"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        transition: 'all 0.5s ease',
                        transform: hasLiked ? 'scale(1.2) rotate(-10deg)' : 'scale(1)',
                        animation: !hasLiked ? 'pulse 2s infinite' : 'none'
                    }}
                >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
                <span style={{ fontWeight: 600, letterSpacing: '0.5px' }}>
                    {loading ? 'Loading...' : likes !== null ? likes.toLocaleString() : '0'}
                    {likes === 1 ? ' Thumbs Up' : ' Thumbs Up'}
                </span>
                {hasLiked && (
                    <span style={{
                        fontSize: '0.85rem',
                        opacity: 0.9,
                        marginLeft: '8px',
                        borderLeft: '1px solid rgba(76, 175, 80, 0.3)',
                        paddingLeft: '12px'
                    }}>
                        Thanks!
                    </span>
                )}
            </button>
            <style jsx>{`
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            `}</style>
        </div>
    );
}
