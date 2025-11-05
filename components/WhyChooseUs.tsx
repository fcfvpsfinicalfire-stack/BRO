
import React from 'react';

const whyChooseUsData = [
    {
        iconClass: 'fa-solid fa-globe',
        title: 'Global Low-Latency Network',
        description: 'Host your server close to you and your players with our strategically located data centers for the lowest latency.',
    },
    {
        iconClass: 'fa-solid fa-headset',
        title: '24/7 Expert Support',
        description: 'Our dedicated support team is available around the clock to assist you with any questions or issues.',
    },
    {
        iconClass: 'fa-solid fa-server',
        title: 'Next-Gen Hardware',
        description: 'We use the latest generation of enterprise-grade hardware like AMD Ryzen CPUs and NVMe SSDs for maximum performance.',
    },
    {
        iconClass: 'fa-solid fa-shield-halved',
        title: 'Ironclad Security',
        description: 'All our services include enterprise-grade DDoS protection to keep your server safe from attacks and ensure uptime.',
    },
];

const WhyChooseUsCard: React.FC<{ item: typeof whyChooseUsData[0] }> = ({ item }) => (
    <div className="relative bg-card-bg-solid/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full overflow-hidden group transition-all duration-300 transform hover:-translate-y-2">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-bl-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
            <div className="flex-shrink-0 w-16 h-16 mb-6 flex items-center justify-center bg-purple-600/20 rounded-xl text-purple-300 text-3xl border border-white/10 group-hover:bg-purple-600/40 group-hover:text-white transition-all duration-300">
                <i className={item.iconClass}></i>
            </div>
            <div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
            </div>
        </div>
    </div>
);


const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
             <div className="absolute inset-0 z-0 opacity-75 animate-aurora" style={{
                background: 'linear-gradient(125deg, rgba(13, 14, 27, 0) 25%, rgba(138, 43, 226, 0.1) 50%, rgba(13, 14, 27, 0) 75%)',
                backgroundSize: '400% 400%',
            }}></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold">Why Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Code One?</span></h2>
                    <p className="mt-4 text-lg text-gray-300">
                        We are committed to providing the best hosting experience with unbeatable performance, reliability, and support. Here's what sets us apart.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseUsData.map((item, index) => (
                        <WhyChooseUsCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;