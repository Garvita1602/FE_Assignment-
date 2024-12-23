import { motion } from 'framer-motion';

export default function Step4({ formData }) {
    return (
        <div>
            <h2>Step 4: Review & Submit</h2>
            <div className="review-section">
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
