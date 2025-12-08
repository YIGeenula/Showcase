import { Inter, Outfit } from 'next/font/google'
import "./globals.css";
import GSAPInitializer from '@/components/GSAPInitializer';

const inter = Inter({ subsets: ['latin'], variable: '--font-main' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
  title: "Futuristic Developer Portfolio",
  description: "Immersive Web Experience",
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
        <GSAPInitializer />
        {children}
      </body>
    </html>
  );
}