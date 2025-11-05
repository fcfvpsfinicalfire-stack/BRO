import React, { useState, useMemo } from 'react';
import OperatingSystems from '../components/OperatingSystems';
import AdvancedFeatures from '../components/AdvancedFeatures';
import FAQ from '../components/FAQ';
import JoinDiscord from '../components/JoinDiscord';

// --- DATA ---

const cpuTypes = [
    { id: 'ryzen7', name: 'AMD Ryzen 7', logo: 'https://i.imgur.com/2Y05ea7.png' },
    { id: 'ryzen9', name: 'AMD Ryzen 9', logo: 'https://i.imgur.com/PaoV5B6.png' },
];

const locations = [
    { id: 'singapore', name: 'Singapore', flag: '🇸🇬' },
];

const plans = [
    {
        id: 'vds-r9-basic',
        cpu: 'ryzen9',
        location: 'singapore',
        name: 'VDS-R9-Basic',
        badge: { text: 'Popular', color: 'bg-purple-600' },
        specs: {
            cpu: 'AMD Ryzen 9',
            cores: '6 Cores',
            ram: '32 GB',
            ramType: 'DDR5',
            ssd: '1 TB',
            ssdType: 'NVMe',
            bandwidth: 'Unlimited',
        },
        features: ['Full Root Access', '24/7 Support'],
    },
    {
        id: 'vds-r9-standard',
        cpu: 'ryzen9',
        location: 'singapore',
        name: 'VDS-R9-Standard',
        badge: { text: 'Best Value', color: 'bg-indigo-500' },
        isBestValue: true,
        specs: {
            cpu: 'AMD Ryzen 9',
            cores: '8 Cores',
            ram: '64 GB',
            ramType: 'DDR5',
            ssd: '2 TB',
            ssdType: 'NVMe',
            bandwidth: 'Unlimited',
        },
        features: ['Full Root Access', '24/7 Support'],
    },
    {
        id: 'vds-r9-pro',
        cpu: 'ryzen9',
        location: 'singapore',
        name: 'VDS-R9-Pro',
        badge: { text: 'Professional', color: 'bg-fuchsia-600' },
        specs: {
            cpu: 'AMD Ryzen 9',
            cores: '12 Cores',
            ram: '128 GB',
            ramType: 'DDR5',
            ssd: '4 TB',
            ssdType: 'NVMe',
            bandwidth: 'Unlimited',
        },
        features: ['Full Root Access', '24/7 Support'],
    },
];

// --- COMPONENTS ---

const PlanCard: React.FC<{ plan: typeof plans[0] }> = ({ plan }) => {
    const cardClasses = `relative bg-card-bg-solid rounded-xl p-6 border-2 transition-all duration-300 flex flex-col ${plan.isBestValue ? 'border-accent-purple' : 'border-gray-800 hover:border-accent-purple/50'}`;
    
    const SpecItem: React.FC<{icon: string, label: string, value: string, subValue: string}> = ({ icon, label, value, subValue }) => (
        <div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
                <i className={`fa-solid ${icon} w-4 text-center`}></i>
                <span>{label}</span>
            </div>
            <p className="font-bold text-xl text-white mt-1">{value}</p>
            <p className="text-sm text-gray-400">{subValue}</p>
        </div>
    );
    
    return (
        <div className={cardClasses}>
            {plan.badge && (
                <div className={`absolute -top-3 right-5 text-white text-xs font-bold px-3 py-1 rounded-full ${plan.badge.color}`}>
                    {plan.badge.text}
                </div>
            )}

            <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">🇸🇬</span>
                <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-gray-400">Singapore</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8 flex-grow">
                <SpecItem icon="fa-microchip" label={plan.specs.cpu} value={plan.specs.cores} subValue="" />
                <SpecItem icon="fa-memory" label={`${plan.specs.ramType} RAM`} value={plan.specs.ram} subValue="" />
                <SpecItem icon="fa-hard-drive" label={`${plan.specs.ssdType} SSD`} value={plan.specs.ssd} subValue="" />
                <SpecItem icon="fa-wifi" label="Bandwidth" value={plan.specs.bandwidth} subValue="" />
            </div>

            <ul className="space-y-2 text-gray-300 border-t border-white/10 pt-6">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const DedicatedServerPage: React.FC = () => {
    const [selectedCpu, setSelectedCpu] = useState('ryzen9');
    const [selectedLocation, setSelectedLocation] = useState('singapore');

    const filteredPlans = useMemo(() => {
        return plans.filter(plan => plan.cpu === selectedCpu && plan.location === selectedLocation);
    }, [selectedCpu, selectedLocation]);

    return (
        <>
            <div className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between md:items-start mb-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center space-x-2 bg-card-bg-solid border border-gray-700 text-purple-300 font-semibold px-4 py-2 rounded-full mb-6">
                               <i className="fa-solid fa-server"></i>
                               <span>Dedicated Servers</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
                                Dedicated Server <span className="relative inline-block">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Solutions</span>
                                    <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M1 4.25s12.5-4.5 35.5-2.5 30 4 58 0" stroke="url(#line-gradient-dedicated)" strokeWidth="2" fill="none" strokeLinecap="round" />
                                        <defs>
                                        <linearGradient id="line-gradient-dedicated" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#A755F7" />
                                            <stop offset="100%" stopColor="#6366F1" />
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </h1>
                            <p className="mt-6 text-lg text-gray-300 max-w-2xl">
                                Bare metal dedicated servers with enterprise-grade hardware, full control, and maximum performance for demanding applications.
                            </p>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <div className="bg-card-bg-solid border border-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3">
                                <span>LKR Sri Lanka</span>
                                <i className="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                            </div>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <section>
                                <h2 className="text-lg font-semibold mb-4 text-gray-300">1. CPU Type</h2>
                                <div className="flex flex-wrap gap-4">
                                    {cpuTypes.map(cpu => (
                                        <button 
                                            key={cpu.id} 
                                            onClick={() => setSelectedCpu(cpu.id)}
                                            className={`flex items-center p-3 rounded-lg border-2 transition-all duration-300 w-full sm:w-auto ${selectedCpu === cpu.id ? 'bg-accent-purple/10 border-accent-purple' : 'bg-card-bg-solid border-gray-800 hover:border-gray-600'}`}
                                        >
                                            <img src={cpu.logo} alt={cpu.name} className="w-10 h-10 mr-4" />
                                            <span className="font-bold text-white">{cpu.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </section>
                            <section>
                                <h2 className="text-lg font-semibold mb-4 text-gray-300">Location</h2>
                                <div className="flex flex-wrap gap-4">
                                    {locations.map(loc => (
                                        <button 
                                            key={loc.id} 
                                            onClick={() => setSelectedLocation(loc.id)}
                                            className={`flex items-center p-3 rounded-lg border-2 transition-all duration-300 w-full sm:w-auto ${selectedLocation === loc.id ? 'bg-accent-purple/10 border-accent-purple' : 'bg-card-bg-solid border-gray-800 hover:border-gray-600'}`}
                                        >
                                            <span className="text-2xl mr-3">{loc.flag}</span>
                                            <span className="font-bold text-white">{loc.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Plans */}
                        <section className="mt-12">
                            <h2 className="text-lg font-semibold mb-4 text-gray-300">2. Choose Plan</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredPlans.length > 0 ? (
                                    filteredPlans.map(plan => <PlanCard key={plan.id} plan={plan} />)
                                ) : (
                                    <div className="text-center py-12 bg-card-bg-solid rounded-lg lg:col-span-3">
                                        <p className="text-gray-400">No plans available for this configuration.</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <OperatingSystems />
                 <AdvancedFeatures />
                 <FAQ />
                 <JoinDiscord />
            </div>
        </>
    );
};

export default DedicatedServerPage;
