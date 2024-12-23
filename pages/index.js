import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '../components/Layout';
import StepNavigation from '../components/StepNavigation';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';

const steps = ['Personal Info', 'Address Details', 'Preferences', 'Review & Submit'];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  // Variants for step transition animation
  const pageVariants = {
    initial: { opacity: 0, x: '-100vw' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100vw' },
  };

  // Function to render the corresponding step content
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 1:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step3 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step4 formData={formData} />;
      default:
        return null;
    }
  };

  // Progress Calculation
  const progress = ((currentStep + 1) / steps.length) * 100;

  // Navigation logic for step changes
  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return (
    <Layout>
      {/* Step Navigation */}
      <StepNavigation steps={steps} currentStep={currentStep} />

      {/* Progress Bar */}
      <motion.div
        className="progress-bar-container"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      >
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </motion.div>

      {/* Animated Step Content */}
      <motion.div
        key={currentStep}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="mt-6"
      >
        {renderStep()}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {/* Previous Button with Hover Effect */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          disabled={currentStep === 0}
          onClick={handlePrev}
          className="p-2 border rounded disabled:opacity-50"
        >
          Previous
        </motion.button>

        {/* Next Button with Hover Effect */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          disabled={currentStep === steps.length - 1}
          onClick={handleNext}
          className="p-2 border rounded disabled:opacity-50"
        >
          Next
        </motion.button>
      </div>
    </Layout>
  );
}
