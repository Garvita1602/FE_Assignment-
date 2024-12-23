import { useRouter } from 'next/router';

const NavigationButton = ({ targetUrl, children }) => {
    const router = useRouter();

    const navigate = () => {
        // Log current route and target URL for debugging
        console.log(`Current route: ${router.pathname}`);
        console.log(`Target route: ${targetUrl}`);

        // Only navigate if the target URL is different
        if (router.pathname !== targetUrl) {
            router.push(targetUrl);
        }
    };

    return (
        <button onClick={navigate}>
            {children}
        </button>
    );
};

export default NavigationButton;
