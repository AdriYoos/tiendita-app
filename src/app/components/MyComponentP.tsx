'use client';
import React, { useState } from 'react';

interface Props {
    question: string;
    answer: string;
    number: number
}

const MyComponentP: React.FC<Props> = ({ question, answer, number }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="w-full md:px-6">
            <div id="mainHeading" className="flex justify-between items-center w-full">
                <div className="">
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                        <span className="lg:mr-6 mr-4 dark:text-black lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-blue-900">
                            Q{number}
                        </span>
                        {question}
                    </p>
                </div>
                <button onClick={toggleVisibility} aria-label="toggler" className="text-gray-700 hover:text-white border border-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium rounded-md text-xs px-3 py-1.5 text-center me-2 mb-2 dark:text-gray-300 dark:border-gray-400 dark:hover:bg-gray-300 dark:hover:text-white dark:focus:ring-gray-500" >
                    <img
                        className={`w-5 h-5 transform dark:block hidden  transition-transform duration-300 ${isVisible ? 'rotate-180' : ''}`}
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                        alt="toggler"
                    />
                    <img
                        className={`w-5 h-5 transform dark:hidden transition-transform duration-300 ${isVisible ? 'rotate-180' : ''}`}
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                        alt="toggler-dark"
                    />
                </button>
            </div>
            {isVisible && (
                <div className=" mt-6 w-full">
                    <p className="text-lg font-semibold text-gray-500 mb-2">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
};

export default MyComponentP;