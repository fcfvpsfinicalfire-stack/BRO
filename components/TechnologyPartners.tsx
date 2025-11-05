
import React from 'react';

const techPartners = [
  { name: 'Intel', logo: 'https://i.imgur.com/vA15A9G.png' },
  { name: 'AMD', logo: 'https://i.imgur.com/s1mJ5kV.png' },
  { name: 'Cloudflare', logo: 'https://i.imgur.com/w1sN1pW.png' },
  { name: 'Pterodactyl', logo: 'https://i.imgur.com/tJMh19x.png' },
  { name: 'Dell', logo: 'https://i.imgur.com/vHsl45X.png' },
  { name: 'cPanel', logo: 'https://i.imgur.com/fOL5w45.png' },
  { name: 'LiteSpeed', logo: 'https://i.imgur.com/wTRLzV4.png' },
];

const TechnologyPartners: React.FC = () => {
    // Duplicate for seamless scroll effect
    const duplicatedPartners = [...techPartners, ...techPartners];

    return (
        <section className="py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Powered by Industry-Leading Technology</h2>
                <p className="mt-4 text-gray-400">
                    We partner with the best in the business to provide you with a hosting experience that's fast, reliable, and secure.
                </p>
            </div>
            <div className="mt-16 relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div className="flex animate-marquee-scroll">
                    {duplicatedPartners.map((tech, index) => (
                        <div key={index} className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center bg-card-bg-solid/50 border border-white/10 rounded-xl transition-all duration-300 hover:bg-white/10 filter grayscale hover:grayscale-0">
                            <img src={tech.logo} alt={tech.name} className="h-10 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologyPartners;
