import { motion } from 'framer-motion';

export default function Step1({ formData, setFormData }) {
    const handleInputChange = (e) => {
        setFormData({ personalInfo: { ...formData.personalInfo, [e.target.name]: e.target.value } });
    };

    return (
        <div>
            <h2>Step 1: Personal Information</h2>
            <motion.input
                type="text"
                name="firstName"
                value={formData.personalInfo?.firstName || ''}
                onChange={handleInputChange}
                placeholder="First Name"
                whileFocus={{ scale: 1.05 }} // Subtle zoom effect on focus
                className="input-field"
            />
            <motion.input
                type="email"
                name="email"
                value={formData.personalInfo?.email || ''}
                onChange={handleInputChange}
                placeholder="Email"
                whileFocus={{ scale: 1.05 }} // Subtle zoom effect on focus
                className="input-field"
            />
        </div>
    );
}
