
import React, { useState, useEffect, useRef } from 'react';

// Custom hook for counting up animation
const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const startTime = Date.now();

        const timer = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            if (elapsedTime > duration) {
                setCount(end);
                clearInterval(timer);
                return;
            }
            const progress = elapsedTime / duration;
            setCount(Math.floor(end * progress));
        }, 16); // roughly 60fps

        return () => clearInterval(timer);
    }, [end, duration, isInView]);

    return { count, ref };
};


const statsData = [
    {
        endValue: 15732,
        title: 'Servers Deployed',
        icon: 'fa-solid fa-server',
        suffix: '+',
    },
    {
        endValue: 8450,
        title: 'Happy Clients',
        icon: 'fa-solid fa-users',
        suffix: '+',
    },
    {
        endValue: 32981,
        title: 'Tickets Solved',
        icon: 'fa-solid fa-headset',
        suffix: '+',
    },
    {
        endValue: 6,
        title: 'Global Datacenters',
        icon: 'fa-solid fa-globe',
        suffix: '',
    },
];

const StatCard: React.FC<{ stat: typeof statsData[0] }> = ({ stat }) => {
    const { count, ref } = useCountUp(stat.endValue);
    
    return (
        <div ref={ref} className="bg-card-bg-solid/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center transform transition-all duration-300 hover:-translate-y-2 hover:border-accent-purple/50">
            <i className={`${stat.icon} text-4xl text-accent-purple mb-4`}></i>
            <p className="text-5xl font-extrabold text-white">
                {count.toLocaleString()}
                {stat.suffix}
            </p>
            <p className="text-gray-400 mt-2">{stat.title}</p>
        </div>
    );
};

const StatsShowcase: React.FC = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
             <div className="absolute inset-0 z-0 opacity-10">
                <img src="https://i.imgur.com/lM4YnFj.png" alt="Abstract network background" className="w-full h-full object-cover" />
            </div>
             <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-dark-bg"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold">Power in Numbers</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Our growth is a testament to our commitment to quality. We're proud to power thousands of projects for a thriving global community.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => (
                        <StatCard key={index} stat={stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsShowcase;
