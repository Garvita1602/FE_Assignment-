import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
const steps = [Step1, Step2, Step3, Step4];

export default function Form() {
    const [currentStep, setCurrentStep] = useState(0);

    const renderStep = () => {
        const StepComponent = steps[currentStep];
        return <StepComponent />;
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Multi-Step Form</h1>

            {/* Render Current Step */}
            <div className="mt-6">{renderStep()}</div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                <button
                    disabled={currentStep === 0}
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="p-2 border rounded disabled:opacity-50"
                >
                    Previous
                </button>
                {/* Animated "Next" Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={currentStep === steps.length - 1}
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="p-2 border rounded disabled:opacity-50"
                >
                    Next
                </motion.button>
            </div>
        </div>
    );
}
