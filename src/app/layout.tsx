import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

import BackgroundParticles from '@/components/BackgroundParticles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Dhananjay Joshi | Portfolio',
    description: 'MBA (Data Science & AI) | Product & Implementation Leader',
};

import { ThemeProvider } from '@/components/ThemeProvider';
import CustomCursor from '@/components/CustomCursor';
import Chatbot from '@/components/Chatbot';
import SpotifyPlayer from '@/components/SpotifyPlayer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.className} bg-background text-foreground antialiased relative`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <CustomCursor />
                    <Chatbot />
                    <SpotifyPlayer />
                    <BackgroundParticles />
                    <Navbar />
                    <main className="relative z-10">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
