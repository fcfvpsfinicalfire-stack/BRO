import React, { useState } from 'react';
import PlanConfigurator from '../components/PlanConfigurator';

// Data for the page
const planTypes = [
  { id: 'budget', name: 'Budget EPYC', cpu: '7' },
  { id: 'premium', name: 'Premium Ryzen 9', cpu: '9' }
];

const locations = [
  { id: 'singapore', name: 'Singapore', flag: '🇸🇬' }
];

const softwareList = [
  {
    id: 'minecraft',
    name: 'Minecraft',
    image: 'https://i.imgur.com/ag58R4m.png',
    description: 'Build, explore, and survive in the ultimate sandbox game.',
    featured: true,
  },
  {
    id: 'rust',
    name: 'Rust',
    image: 'https://i.imgur.com/3522H6s.png',
    description: 'Survive, build, and dominate in this harsh multiplayer world.',
    featured: false,
  },
  {
    id: 'ark',
    name: 'ARK: Survival Evolved',
    image: 'https://i.imgur.com/mO27J1L.png',
    description: 'Tame dinosaurs and survive in a prehistoric world.',
    featured: false,
  },
  {
    id: 'valheim',
    name: 'Valheim',
    image: 'https://i.imgur.com/OS2yvSP.png',
    description: 'Explore and survive in a Norse mythology-inspired world.',
    featured: true,
  },
  {
    id: 'discord',
    name: 'Discord Bot',
    icon: 'fa-brands fa-discord',
    description: 'Host your Discord bot with reliable NodeJS hosting.',
    featured: true,
  },
  {
    id: 'mta',
    name: 'Multi Theft Auto',
    image: 'https://i.imgur.com/IksA5Tj.png',
    description: 'Race, roleplay, and battle in an online world.',
    featured: false,
  }
];

// --- Sub-components for the new design ---

const Background = () => (
    <div className="absolute inset-0 z-0 overflow-hidden bg-dark-bg">
        <div className="absolute inset-0 animate-aurora opacity-75" style={{
            background: 'linear-gradient(125deg, rgba(138, 43, 226, 0.1) 0%, rgba(13, 14, 27, 0) 25%, rgba(34, 197, 94, 0.1) 50%, rgba(13, 14, 27, 0) 75%, rgba(138, 43, 226, 0.1) 100%)',
            backgroundSize: '400% 400%',
        }}></div>
        <div 
            className="absolute inset-[-50%] animate-drift"
            style={{
                backgroundImage: 'radial-gradient(circle, rgba(167, 85, 247, 0.08) 1px, transparent 1px)',
                backgroundSize: '2.5rem 2.5rem',
            }}
        ></div>
        <div 
            className="absolute inset-[-50%] animate-drift"
            style={{
                backgroundImage: 'radial-gradient(circle, rgba(34, 197, 94, 0.06) 1px, transparent 1px)',
                backgroundSize: '4rem 4rem',
                animationDirection: 'reverse',
                animationDuration: '60s'
            }}
        ></div>
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-purple-500/10 rounded-tl-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-green-500/10 rounded-br-3xl opacity-50"></div>
    </div>
);

const FloatingCube = () => (
    <div className="w-32 h-32 sm:w-40 sm:h-40" style={{ perspective: '1000px' }}>
        <div className="relative w-full h-full animate-float-cube" style={{ transformStyle: 'preserve-3d', '--size': '160px' } as React.CSSProperties}>
            {[0, 90, 180, -90].map(deg => (
                <div key={deg} className="absolute w-full h-full border-2 border-accent-purple/50 bg-purple-900/10 shadow-[0_0_20px_theme(colors.purple.500)]" style={{ transform: `rotateY(${deg}deg) translateZ(calc(var(--size) / 2))` }}></div>
            ))}
            <div className="absolute w-full h-full border-2 border-accent-purple/50 bg-purple-900/10 shadow-[0_0_20px_theme(colors.purple.500)]" style={{ transform: 'rotateX(90deg) translateZ(calc(var(--size) / 2))' }}></div>
            <div className="absolute w-full h-full border-2 border-accent-purple/50 bg-purple-900/10 shadow-[0_0_20px_theme(colors.purple.500)]" style={{ transform: 'rotateX(-90deg) translateZ(calc(var(--size) / 2))' }}></div>
        </div>
    </div>
);


const ConfigStep: React.FC<{ step: string; title: string; children: React.ReactNode }> = ({ step, title, children }) => (
    <div className="bg-card-bg-solid/50 backdrop-blur-md border border-white/10 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-accent-purple/20 text-accent-purple font-bold rounded-md">{step}</span>
            <h2 className="font-semibold text-white text-lg">{title}</h2>
        </div>
        <div className="space-y-3">{children}</div>
    </div>
);

const LocationButton: React.FC<{ location: any, selected: boolean, onClick: () => void }> = ({ location, selected, onClick }) => (
    <button onClick={onClick} className={`relative flex items-center p-3 rounded-lg border-2 w-full transition-all duration-300 ${selected ? 'bg-accent-purple/10 border-accent-purple' : 'bg-gray-900/50 border-gray-700 hover:border-gray-500'}`}>
        <span className="text-2xl mr-3">{location.flag}</span>
        <span className="text-white font-medium">{location.name}</span>
        <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center bg-accent-purple rounded-full transition-all duration-300 ${selected ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <i className="fa-solid fa-check text-xs text-white"></i>
        </div>
    </button>
);

const CpuButton: React.FC<{ plan: any, selected: boolean, onClick: () => void }> = ({ plan, selected, onClick }) => (
    <button onClick={onClick} className={`relative flex items-center p-3 rounded-lg border-2 w-full transition-all duration-300 ${selected ? 'bg-accent-purple/10 border-accent-purple' : 'bg-gray-900/50 border-gray-700 hover:border-gray-500'}`}>
        <div className="w-10 h-10 bg-gray-900 rounded-md flex flex-col items-center justify-center mr-3 flex-shrink-0">
            <span className="text-orange-400 font-bold text-xs leading-none">RYZEN</span>
            <span className="text-white font-bold text-xl leading-tight">{plan.cpu}</span>
        </div>
        <span className="text-white font-medium text-left">{plan.name}</span>
        <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center bg-accent-purple rounded-full transition-all duration-300 ${selected ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <i className="fa-solid fa-check text-xs text-white"></i>
        </div>
    </button>
);

const SoftwareButton: React.FC<{ software: any, selected: boolean, onClick: () => void }> = ({ software, selected, onClick }) => (
    <button onClick={onClick} className={`relative flex items-center p-3 rounded-lg border-2 w-full text-left transition-all duration-300 ${selected ? 'bg-accent-purple/10 border-accent-purple' : 'bg-gray-900/50 border-gray-700 hover:border-gray-500'}`}>
        {software.image ? (
            <img src={software.image} alt={software.name} className="w-10 h-10 object-contain mr-3" />
        ) : (
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gray-800 rounded-md mr-3">
                <i className={`${software.icon} text-xl text-purple-300`}></i>
            </div>
        )}
        <div className="flex-1">
            <span className="text-white font-medium">{software.name}</span>
            {software.featured && <span className="ml-2 text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full font-medium">Featured</span>}
        </div>
        <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center bg-accent-purple rounded-full transition-all duration-300 ${selected ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <i className="fa-solid fa-check text-xs text-white"></i>
        </div>
    </button>
);

const appThemes: { [key: string]: string } = {
    rust: 'from-orange-900/30 to-yellow-900/30',
    ark: 'from-teal-900/30 to-green-900/30',
    valheim: 'from-sky-900/30 to-blue-900/30',
    discord: 'from-indigo-900/30 to-purple-900/30',
    mta: 'from-red-900/30 to-neutral-900/30',
    default: 'from-purple-900/30 to-indigo-900/30'
};

const ApplicationInfoCard: React.FC<{ software: any }> = ({ software }) => {
    if (!software) return null;
    const theme = appThemes[software.id] || appThemes.default;

    return (
        <div className={`relative bg-card-bg-solid border border-purple-800/50 rounded-xl p-8 flex flex-col items-center justify-center h-full min-h-[500px] text-center sticky top-28 overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${theme} opacity-50`}></div>
            <div className="relative z-10 flex flex-col items-center">
                {software.image ? (
                    <img src={software.image} alt={software.name} className="w-32 h-32 object-contain mb-6 animate-float" />
                ) : (
                    <div className="w-32 h-32 flex items-center justify-center bg-gray-900/50 rounded-lg mb-6 animate-float">
                        <i className={`${software.icon} text-6xl text-purple-300`}></i>
                    </div>
                )}
                <h2 className="text-3xl font-bold text-white mb-2">{software.name} Hosting</h2>
                <p className="text-gray-400 max-w-md mb-6">{software.description}</p>
                <p className="text-lg text-gray-300">Detailed plans for this application are coming soon!</p>
                <button className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity transform hover:scale-105">
                    <span>Contact Support</span>
                    <i className="fa-solid fa-headset"></i>
                </button>
            </div>
        </div>
    );
};


const PricingPage: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState('premium');
    const [selectedLocation, setSelectedLocation] = useState('singapore');
    const [selectedSoftware, setSelectedSoftware] = useState('minecraft');
    
    const selectedSoftwareData = softwareList.find(s => s.id === selectedSoftware);

    return (
        <div className="relative overflow-hidden">
            <Background />
            <div className="relative z-10">
                <div className="text-center pt-24 pb-16 flex flex-col items-center space-y-8">
                    <FloatingCube />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white animate-text-focus-in">
                        Build Your Ultimate Server
                    </h1>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg animate-text-focus-in" style={{ animationDelay: '0.2s' }}>
                        Precision. Performance. Power. Configure your ideal hosting environment with our intuitive builder.
                    </p>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 pb-24">
                  {/* Left Sidebar: Configurator */}
                  <div className="md:col-span-1 space-y-8 md:sticky md:top-28 h-fit">
                      <ConfigStep step="01" title="Select Location">
                          {locations.map(loc => (
                              <LocationButton key={loc.id} location={loc} selected={selectedLocation === loc.id} onClick={() => setSelectedLocation(loc.id)} />
                          ))}
                      </ConfigStep>
                      <ConfigStep step="02" title="Select Core">
                           {planTypes.map(plan => (
                                <CpuButton key={plan.id} plan={plan} selected={selectedPlan === plan.id} onClick={() => setSelectedPlan(plan.id)} />
                            ))}
                      </ConfigStep>
                      <ConfigStep step="03" title="Select Application">
                           {softwareList.map(sw => (
                                <SoftwareButton key={sw.id} software={sw} selected={selectedSoftware === sw.id} onClick={() => setSelectedSoftware(sw.id)} />
                            ))}
                      </ConfigStep>
                  </div>

                  {/* Right Content Area */}
                  <div className="md:col-span-2">
                    {selectedSoftware === 'minecraft' ? (
                      <PlanConfigurator />
                    ) : (
                      <ApplicationInfoCard software={selectedSoftwareData} />
                    )}
                  </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;