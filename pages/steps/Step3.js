import { motion } from 'framer-motion';

export default function Step3({ formData, setFormData }) {
    const handleInputChange = (e) => {
        setFormData({
            preferences: { ...formData.preferences, [e.target.name]: e.target.value }
        });
    };

    return (
        <div>
            <h2>Step 3: Preferences</h2>
            <motion.input
                type="text"
                name="preferredLanguage"
                value={formData.preferences.preferredLanguage || ''}
                onChange={handleInputChange}
                placeholder="Preferred Language"
                whileFocus={{ scale: 1.05 }}
                className="input-field"
            />
            <motion.input
                type="text"
                name="contactMethod"
                value={formData.preferences.contactMethod || ''}
                onChange={handleInputChange}
                placeholder="Preferred Contact Method"
                whileFocus={{ scale: 1.05 }}
                className="input-field"
            />
            <motion.select
                name="newsletterSubscription"
                value={formData.preferences.newsletterSubscription || ''}
                onChange={handleInputChange}
                whileFocus={{ scale: 1.05 }}
                className="input-field"
            >
                <option value="">Subscribe to Newsletter</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </motion.select>
        </div>
    );
}
