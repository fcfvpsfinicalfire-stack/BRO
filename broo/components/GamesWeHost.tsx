
import React from 'react';

const services = [
  {
    icon: 'fa-gamepad',
    title: 'Game Servers',
    description: 'High-performance hosting for your favorite games, featuring low latency, instant setup, and powerful control panels.',
    bgClass: 'from-purple-600/30 to-indigo-600/30',
  },
  {
    icon: 'fa-server',
    title: 'Cloud Infrastructure',
    description: 'Scalable and powerful Cloud VPS and Dedicated Servers for demanding applications, with full root access and global locations.',
    bgClass: 'from-sky-600/30 to-cyan-600/30',
  },
  {
    icon: 'fa-laptop-code',
    title: 'Web & Bot Hosting',
    description: 'Reliable and affordable hosting for your websites and Discord bots, built for 24/7 uptime and peak performance.',
    bgClass: 'from-green-600/30 to-emerald-600/30',
  }
];

const ServiceShowcaseCard: React.FC<{ service: typeof services[0] }> = ({ service }) => (
    <div className={`bg-card-bg-solid border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:border-purple-500 group relative overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        <div className="relative z-10 flex flex-col items-center h-full">
            <div className="w-20 h-20 flex items-center justify-center bg-purple-900/50 rounded-xl text-purple-300 text-4xl mb-6 border border-white/10 group-hover:bg-purple-800/50 group-hover:text-white transition-all duration-300 flex-shrink-0">
                <i className={`fa-solid ${service.icon}`}></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 flex-grow mb-6">{service.description}</p>
            <button className="mt-auto bg-white/10 border border-white/20 text-white font-semibold py-2 px-6 rounded-lg hover:bg-white/20 transition-colors">
                Learn More
            </button>
        </div>
    </div>
);


const GamesWeHost: React.FC = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold">Explore Our Hosting Ecosystem</h2>
                <p className="mt-4 text-lg text-gray-300">
                    From intense gaming sessions to mission-critical applications, we provide the power and reliability you need to succeed.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <ServiceShowcaseCard key={index} service={service} />
                ))}
            </div>
        </section>
    );
};

export default GamesWeHost;