import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Step5({ formData, setFormData }) {
    const [isLoading, setIsLoading] = useState(true);

    const fetchFormData = async () => {
        try {
            const response = await fetch('/api/formUpdate');
            const data = await response.json();
            setFormData(data);  // Update form state with data from API
            setIsLoading(false);  // Set loading state to false once data is fetched
        } catch (error) {
            console.error('Error fetching form data:', error);
        }
    };

    useEffect(() => {
        const interval = setInterval(fetchFormData, 5000); // Fetch data every 5 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div>
            <h2>Step 5: Real-Time Collaboration</h2>
            {isLoading ? (
                <p>Loading real-time updates...</p>
            ) : (
                <div>
                    <h3>Personal Information</h3>
                    <p>Name: {formData.personalInfo.firstName} {formData.personalInfo.lastName}</p>
                    <p>Email: {formData.personalInfo.email}</p>

                    <h3>Address Details</h3>
                    <p>Street: {formData.addressDetails.streetAddress}</p>
                    <p>City: {formData.addressDetails.city}</p>
                    <p>Postal Code: {formData.addressDetails.postalCode}</p>

                    <h3>Preferences</h3>
                    <p>Preferred Language: {formData.preferences.preferredLanguage}</p>
                    <p>Contact Method: {formData.preferences.contactMethod}</p>
                    <p>Newsletter Subscription: {formData.preferences.newsletterSubscription}</p>
                </div>
            )}

            <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="submit-button"
            >
                Submit
            </motion.button>
        </div>
    );
}
