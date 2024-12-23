const StepNavigation = ({ currentStep, setCurrentStep }) => {
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

    return (
        <div>
            <nav>
                {steps.map((step, index) => (
                    <button
                        key={index}
                        disabled={currentStep === index + 1}
                        onClick={() => setCurrentStep(index + 1)}
                        className={`${currentStep === index + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-black'
                            } px-4 py-2 mx-2`}
                    >
                        {step}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default StepNavigation;
