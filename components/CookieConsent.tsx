
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent_accepted');
        if (!consent) {
            // Use a small delay to make the entrance less abrupt
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent_accepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-fade-in">
            <div className="container mx-auto">
                 <div className="bg-card-bg-solid/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 flex flex-col sm:flex-row items-center justify-between gap-4 p-5">
                    <div className="flex items-start space-x-4">
                         <div className="flex-shrink-0 pt-1">
                             <i className="fa-solid fa-cookie-bite text-2xl text-accent-purple"></i>
                        </div>
                        <p className="text-sm text-gray-300">
                            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                        </p>
                    </div>
                    <button
                        onClick={handleAccept}
                        className="flex-shrink-0 bg-accent-purple text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
