import { useTheme } from 'next-themes'; // Import useTheme hook

export const DarkModeToggle = () => {
    const { theme, setTheme } = useTheme(); // Get the current theme and setTheme function

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} // Toggle between light and dark
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
        >
            {theme === 'dark' ? '🌞' : '🌙'} {/* Display sun/moon based on the current theme */}
        </button>
    );
};
