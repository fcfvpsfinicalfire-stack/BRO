import React from 'react';

const StatCard: React.FC<{ value: string; label: string; icon: string }> = ({ value, label, icon }) => (
    <div className="bg-card-bg-solid/50 backdrop-blur-xl border border-white/10 rounded-xl p-5 transition-all duration-300 hover:border-accent-purple/50 hover:-translate-y-1">
        <div className="flex items-center space-x-4">
            <div className="text-3xl text-accent-purple">
                <i className={`fa-solid ${icon}`}></i>
            </div>
            <div>
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-gray-400 text-sm sm:text-base">{label}</p>
            </div>
        </div>
    </div>
);

const BackgroundIllustration: React.FC = () => (
    <div className="absolute inset-0 flex items-center justify-center z-0" aria-hidden="true">
        <div className="relative w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] flex items-center justify-center">
            {/* Rings */}
            <div className="absolute w-full h-full rounded-full border border-blue-500/20 animate-ring-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute w-10/12 h-10/12 rounded-full border-2 border-blue-500/10 animate-ring-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute w-8/12 h-8/12 rounded-full border border-blue-500/20 animate-ring-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute w-6/12 h-6/12 rounded-full border-2 border-blue-500/10 animate-ring-pulse" style={{ animationDelay: '1.5s' }} />

            {/* Orbiting Particles */}
            <div className="absolute w-10/12 h-10/12 animate-spin-slow">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 bg-sky-400 rounded-full shadow-[0_0_10px_theme(colors.sky.400)]"></div>
                <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_theme(colors.purple.400)]"></div>
            </div>
            <div className="absolute w-8/12 h-8/12 animate-spin-slower">
                <div className="absolute bottom-1/2 right-0 translate-y-1/2 w-2 h-2 bg-sky-400 rounded-full shadow-[0_0_10px_theme(colors.sky.400)]"></div>
                <div className="absolute bottom-1/4 left-1/4 translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_8px_theme(colors.purple.400)]"></div>
            </div>

            {/* Central Shield */}
            <div className="relative w-24 h-24 bg-card-bg-solid/50 border-2 border-sky-400/50 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-500/20 animate-radiate">
                <i className="fa-solid fa-shield-halved text-5xl text-sky-300"></i>
                <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-400 rounded-full ring-2 ring-card-bg-solid/50 animate-pulse"></div>
            </div>

            {/* Incoming "Threats" being zapped */}
            <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-red-500/80 rounded-full animate-threat-zap" style={{ animationDelay: '0.2s', animationDuration: '2.5s' }} />
            <div className="absolute top-[25%] right-[20%] w-2 h-2 bg-red-500/80 rounded-full animate-threat-zap" style={{ animationDelay: '1.2s', animationDuration: '2.8s' }} />
            <div className="absolute bottom-[30%] left-[25%] w-2.5 h-2.5 bg-red-500/80 rounded-full animate-threat-zap" style={{ animationDelay: '0.8s', animationDuration: '2.2s' }} />
            <div className="absolute bottom-[20%] right-[18%] w-3 h-3 bg-red-500/80 rounded-full animate-threat-zap" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
        </div>
    </div>
);


const DDoSProtection: React.FC = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-[#0A0B18]">
            <BackgroundIllustration />
            <div 
                className="absolute inset-0 opacity-50"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
                    backgroundSize: '2rem 2rem',
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B18] via-transparent to-[#0A0B18]"></div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-blue-900/50 text-blue-300 font-semibold px-4 py-2 rounded-md mb-4 border border-blue-400/30">
                    <i className="fa-solid fa-shield-halved"></i>
                    <span>DDOS PROTECTION</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white max-w-3xl mx-auto">
                    Next-Generation DDoS Protection
                </h2>
                <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Our multi-layered security system shields your servers from the most sophisticated attacks, ensuring uninterrupted service with sub-10ms mitigation response time.
                </p>
                
                <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <StatCard value="99.99%" label="Mitigation Rate" icon="fa-shield-virus" />
                    <StatCard value="1 Tbps+" label="Network Capacity" icon="fa-bolt" />
                    <StatCard value="<10ms" label="Response Time" icon="fa-stopwatch" />
                    <StatCard value="24/7" label="Active Protection" icon="fa-clock" />
                </div>
                
                <div className="mt-10 flex items-center justify-center space-x-2 bg-card-bg-solid/50 backdrop-blur-sm border border-white/10 text-white text-sm px-4 py-2 rounded-full w-fit mx-auto">
                    <i className="fa-solid fa-check-circle text-brand-green"></i>
                    <span>Included with all our plans</span>
                </div>
            </div>
        </section>
    );
};

export default DDoSProtection;