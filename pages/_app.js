// pages/_app.js
// pages/_app.js
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css'; // Import global styles here

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;

