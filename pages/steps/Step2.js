import { motion } from 'framer-motion';

export default function Step2({ formData, setFormData }) {
    const handleInputChange = (e) => {
        setFormData({
            addressDetails: { ...formData.addressDetails, [e.target.name]: e.target.value }
        });
    };

    return (
        <div>
            <h2>Step 2: Address Details</h2>
            <motion.input
                type="text"
                name="streetAddress"
                value={formData.addressDetails.streetAddress || ''}
                onChange={handleInputChange}
                placeholder="Street Address"
                whileFocus={{ scale: 1.05 }}
                className="input-field"
            />
            <motion.input
                type="text"
                name="city"
                value={formData.addressDetails.city || ''}
                onChange={handleInputChange}
                placeholder="City"
                whileFocus={{ scale: 1.05 }}
                className="input-field"
            />
            <motion.input
                type="text"
                name="postalCode"
                value={formData.addressDetails.postalCode || ''}
                onChange={handleInputChange}
                placeholder="Postal Code"
                whileFocus={{ scale: 1.05 }}
                className="input-field"
            />
        </div>
    );
}
