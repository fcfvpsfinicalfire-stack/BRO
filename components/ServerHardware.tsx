
import React from 'react';

const hardwareFeatures = [
    {
        iconClass: 'fa-solid fa-microchip',
        title: 'Blazing-Fast CPUs',
        description: 'We utilize the latest generation AMD Ryzen and Intel Xeon processors to deliver raw computational power, ensuring your applications and game servers run without a hitch.',
    },
    {
        iconClass: 'fa-solid fa-memory',
        title: 'DDR4/DDR5 Memory',
        description: 'Equipped with high-speed DDR4 and DDR5 RAM, our servers provide lightning-fast memory access, reducing bottlenecks and boosting overall performance.',
    },
    {
        iconClass: 'fa-solid fa-hard-drive',
        title: 'Enterprise NVMe SSDs',
        description: 'Say goodbye to slow loading times. Our servers are powered by Enterprise-grade NVMe SSDs, offering up to 10x faster read/write speeds than traditional SSDs.',
    },
    {
        iconClass: 'fa-solid fa-network-wired',
        title: 'High-Speed Network',
        description: 'Our infrastructure is built on a multi-gigabit network, providing you with a stable, low-latency connection and plenty of bandwidth for your needs.',
    },
];

const HardwareCard: React.FC<{ feature: typeof hardwareFeatures[0] }> = ({ feature }) => (
    <div className="relative bg-card-bg-solid/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full overflow-hidden group transition-all duration-300 transform hover:-translate-y-2">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
            <div className="flex-shrink-0 w-16 h-16 mb-6 flex items-center justify-center bg-purple-600/20 rounded-xl text-purple-300 text-3xl border border-white/10 group-hover:bg-purple-600/40 group-hover:text-white transition-all duration-300">
                <i className={feature.iconClass}></i>
            </div>
            <div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
            </div>
        </div>
    </div>
);


const ServerHardware: React.FC = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
             <div className="absolute inset-0 z-0 opacity-50 animate-aurora" style={{
                background: 'linear-gradient(125deg, rgba(138, 43, 226, 0.05) 0%, rgba(13, 14, 27, 0) 50%, rgba(138, 43, 226, 0.05) 100%)',
                backgroundSize: '400% 400%',
            }}></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold">Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Next-Gen Hardware</span></h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Performance isn't just a feature, it's a promise. We've built our platform on cutting-edge hardware to ensure your projects run at peak speed and stability.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {hardwareFeatures.map((item, index) => (
                        <HardwareCard key={index} feature={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServerHardware;