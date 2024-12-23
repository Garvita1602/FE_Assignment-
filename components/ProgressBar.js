import { useEffect, useState } from 'react';
import '../styles/globals.css';
const ProgressBar = ({ currentStep, totalSteps }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const calculatedProgress = (currentStep / totalSteps) * 100;
        setProgress(calculatedProgress);
    }, [currentStep, totalSteps]);

    return (
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-4">
            <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: `${progress}%`, transition: 'width 0.3s ease' }}
            />
        </div>
    );
};

export default ProgressBar;
