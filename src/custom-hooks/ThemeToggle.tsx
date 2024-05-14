import React, { ReactElement, createContext, useContext, useState } from 'react';

// Define the context interface
interface ThemeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to access the context
function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

// Component that provides the context
const ThemeProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Component that consumes the context
const ThemeToggle: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <button onClick={toggleDarkMode}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};

const ThemeSwitcher: React.FC = () => {

    return (
        <ThemeProvider>
            <div>
                <h1>Theme Toggle Example</h1>
                <ThemeToggle />
            </div>
        </ThemeProvider>
    )
}
export default ThemeSwitcher;
