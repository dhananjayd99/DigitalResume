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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-background text-foreground antialiased relative`}>
                <BackgroundParticles />
                <Navbar />
                <main className="relative z-10">
                    {children}
                </main>
            </body>
        </html>
    );
}
