"use client";
import React from 'react';

export default function Footer() {
    return (
        <footer style={{
            background: '#000',
            padding: '40px 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                {/* Copyright */}
                <p style={{ color: '#444', fontSize: '0.8rem', letterSpacing: '1px', fontFamily: 'var(--font-main)' }}>
                    &copy; {new Date().getFullYear()} CODEXBLAZE ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
}
