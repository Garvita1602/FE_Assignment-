// components/Layout.js
import { ThemeProvider } from 'next-themes'; // Importing ThemeProvider
import Link from 'next/link'; // For navigation
import { DarkModeToggle } from './DarkModeToggle'; // Importing DarkModeToggle component

const Layout = ({ children }) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
                {/* Header with Dark Mode Toggle */}
                <header className="p-4 bg-gray-800 dark:bg-gray-900 text-white flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Multi-Step Form</h1>
                    <div className="flex space-x-4 items-center">
                        {/* Navigation Links */}
                        <nav>
                            <ul className="flex space-x-4">
                                <li>
                                    <Link href="/">
                                        <span className="text-blue-500">Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/next-page">
                                        <span className="text-blue-500">Go to Next Page</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {/* Dark Mode Toggle Button */}
                        <DarkModeToggle />
                    </div>
                </header>

                {/* Main Content Section */}
                <main className="p-6 flex-1">{children}</main>

                {/* Footer Section */}
                <footer className="p-4 bg-gray-800 text-white">
                    <p>© 2024 Your Company</p>
                </footer>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
