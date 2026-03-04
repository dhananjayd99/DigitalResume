import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Hero />
            <About />
            <Experience />
            <Education />
            <Projects />
            <Achievements />
            <Skills />
            <Contact />
            <Footer />
        </main>
    );
}
