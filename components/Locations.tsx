
import React from 'react';

const locations = [
  { name: 'Singapore', flag: '🇸🇬', style: { top: '55%', left: '78%' } },
  { name: 'Germany', flag: '🇩🇪', style: { top: '30%', left: '52%' } },
  { name: 'USA (East)', flag: '🇺🇸', style: { top: '35%', left: '28%' } },
  { name: 'USA (West)', flag: '🇺🇸', style: { top: '40%', left: '18%' } },
  { name: 'Brazil', flag: '🇧🇷', style: { top: '68%', left: '35%' } },
  { name: 'Australia', flag: '🇦🇺', style: { top: '75%', left: '85%' } },
];

const LocationPin: React.FC<{ location: typeof locations[0] }> = ({ location }) => (
  <div
    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
    style={location.style}
  >
    <div className="w-4 h-4 bg-accent-purple rounded-full animate-pulse"></div>
    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max bg-card-bg-solid text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      {location.flag} {location.name}
    </div>
  </div>
);

const Locations: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-[#101123] to-dark-bg z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Global Network, Local Performance</h2>
          <p className="mt-4 text-gray-300">
            Deploy your servers close to your players for the best possible latency and gaming experience. Our network is optimized for performance and reliability.
          </p>
        </div>
        <div className="mt-16 relative max-w-5xl mx-auto">
          <img src="https://imgur.com/a/YFrtPQg" alt="World Map" className="w-full h-auto opacity-20" />
          {locations.map((loc, index) => (
            <LocationPin key={index} location={loc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
