import { useRouter } from 'next/router';

const NextPage = () => {
    const router = useRouter();

    const navigate = () => {
        const targetUrl = '/'; // Navigate back to the homepage

        // Log current route and target URL for debugging
        console.log(`Current route: ${router.pathname}`);
        console.log(`Target route: ${targetUrl}`);

        // Only navigate if the target URL is different
        if (router.pathname !== targetUrl) {
            router.push(targetUrl);
        }
    };

    return (
        <div>
            <h1>Welcome to the Next Page</h1>
            <button onClick={navigate}>Go to Home Page</button>
        </div>
    );
};

export default NextPage;
