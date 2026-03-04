export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-darkGrey border-t border-gray-100 dark:border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold tracking-tighter text-accent mb-4">
                    DJ.
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                    MBA (Data Science & AI) | Product & Implementation Leader
                </p>
                <div className="flex justify-center space-x-6 mb-8 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <a href="#about" className="hover:text-accent transition-colors">About</a>
                    <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
                    <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
                    <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
                </div>
                <div className="text-gray-400 dark:text-gray-500 text-sm">
                    &copy; {currentYear} Dhananjay Joshi. Built with Next.js, Tailwind & Framer Motion.
                </div>
            </div>
        </footer>
    );
}
