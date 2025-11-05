import React from 'react';

const LoadingScreen: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-dark-bg z-[200] flex flex-col items-center justify-center animate-fade-in">
            {/* Background Grids */}
            <div 
                className="absolute inset-[-50%] animate-drift"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(167, 85, 247, 0.08) 1px, transparent 1px)',
                    backgroundSize: '2.5rem 2.5rem',
                }}
            ></div>

            {/* Logo and Animation */}
            <div className="relative flex flex-col items-center justify-center">
                <div className="animate-logo-pulse bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-2xl shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white mt-6">Code One Hosting</h1>
                <p className="text-gray-400 mt-2 tracking-widest animate-pulse">INITIALIZING...</p>
            </div>
        </div>
    );
};

export default LoadingScreen;