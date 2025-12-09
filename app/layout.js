import { Inter, Outfit } from 'next/font/google'
import "./globals.css";
import GSAPInitializer from '@/components/GSAPInitializer';
import SplashScreen from '@/components/SplashScreen';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-main' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
  title: {
    default: "CODEXBLAZE | Immersive Web Experience",
    template: "%s | CODEXBLAZE"
  },
  description: "CODEXBLAZE is a premium digital agency specializing in immersive web experiences, identifying high-quality digital products, AI-assisted development, and modern design thinking.",
  keywords: ["web development", "immersive web", "3D websites", "GSAP animations", "digital agency", "Next.js portfolio", "creative developer", "UI/UX design"],
  authors: [{ name: "CODEXBLAZE" }],
  creator: "CODEXBLAZE",
  publisher: "CODEXBLAZE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "CODEXBLAZE | Immersive Web Experience",
    description: "Experience the future of web development with CODEXBLAZE. We build modern, high-quality digital products using cutting-edge technology.",
    url: "https://codexblaze.com",
    siteName: "CODEXBLAZE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODEXBLAZE | Immersive Web Experience",
    description: "Experience the future of web development with CODEXBLAZE.",
    creator: "@codexblaze", // Placeholder, assuming handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    // Apply suppressHydrationWarning to HTML
    <html lang="en" suppressHydrationWarning>
      {/* Apply suppressHydrationWarning to BODY */}
      <body
        className={`${inter.variable} ${outfit.variable}`}
        suppressHydrationWarning
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MQHR1V9354"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MQHR1V9354');
          `}
        </Script>
        <GSAPInitializer />
        <SplashScreen />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CODEXBLAZE",
              "url": "https://codexblaze.com",
              "logo": "https://codexblaze.com/icon.png",
              "description": "Immersive Web Experience and Digital Products",
              "sameAs": [
                "https://twitter.com/codexblaze",
                "https://github.com/codexblaze"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}