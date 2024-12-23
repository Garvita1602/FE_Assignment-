import React from 'react';
import '../styles/globals.css';
const Tooltip = ({ text, children }) => {
    return (
        <div className="relative flex justify-center items-center">
            {children}
            <div className="absolute bottom-full mb-2 w-max p-2 bg-gray-700 text-white text-sm rounded shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {text}
            </div>
        </div>
    );
};

export default Tooltip;
