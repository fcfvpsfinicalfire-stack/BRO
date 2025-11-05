
import React, { useState, useEffect } from 'react';

const NotificationBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasBeenDismissed = sessionStorage.getItem('notificationBannerDismissed');
        if (!hasBeenDismissed) {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        sessionStorage.setItem('notificationBannerDismissed', 'true');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white animate-fade-in relative z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <i className="fa-solid fa-bullhorn text-xl hidden sm:block"></i>
                    <p className="text-sm sm:text-base font-medium">
                        <span className="font-bold">Notice:</span> Automated checkout is coming soon! To purchase a server, please{' '}
                        <a href="https://discord.gg/MGd8tERV" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-200 transition-colors">
                            join our Discord
                        </a>{' '}
                        and open a ticket.
                    </p>
                </div>
                <button 
                    onClick={handleDismiss} 
                    className="text-white hover:bg-white/20 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center transition-colors"
                    aria-label="Dismiss notification"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    );
};

export default NotificationBanner;
