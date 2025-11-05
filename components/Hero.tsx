import React from 'react';
import { Page } from '../App';

interface HeroProps {
  setPage: (page: Page) => void;
}

const features = [
  {
    iconClass: 'fa-regular fa-clone',
    title: 'Instant Setup',
    description: 'Get your server running in under 60 seconds',
  },
  {
    iconClass: 'fa-solid fa-shield-halved',
    title: 'DDoS Protection',
    description: 'Enterprise-grade security for your servers',
  },
  {
    iconClass: 'fa-regular fa-clock',
    title: '99.9% Uptime',
    description: 'Reliable hosting with guaranteed availability',
  },
  {
    iconClass: 'fa-solid fa-users',
    title: '24/7 Support',
    description: 'Expert help whenever you need it',
  },
];

const FeatureCard: React.FC<{ feature: typeof features[0] }> = ({ feature }) => (
  <div className="bg-card-bg/60 backdrop-blur-md border border-white/10 rounded-xl p-5 flex items-center justify-between space-x-4 h-full">
    <div className="flex-1">
      <h3 className="font-bold text-white text-md">{feature.title}</h3>
      <p className="text-sm text-gray-300 mt-1">{feature.description}</p>
    </div>
    <div className="border-l border-white/20 pl-4">
      <i className={`${feature.iconClass} text-2xl text-brand-purple`}></i>
    </div>
  </div>
);


const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <section 
      className="relative py-20 md:py-32"
      style={{
        backgroundImage: `url('https://images.ctfassets.net/rporu91m20dc/6e0581075f793613041352ca4e462002/4c424a21a2c385c79867104d7328905b/valheim-feature.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight animate-text-focus-in">
              Host your own
              <br />
              <span className="text-brand-purple">
                Valheim
              </span>
              <span> Servers</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Experience lightning-fast performance, unbeatable reliability, and 24/7 support for all your favorite games.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <button 
                onClick={() => setPage('pricing')}
                className="w-full sm:w-auto bg-brand-purple text-white font-bold py-3 px-6 rounded-lg text-lg flex items-center justify-center space-x-2 hover:opacity-90 transform transition-transform duration-300"
              >
                <span>Get started</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button className="w-full sm:w-auto border border-gray-400 text-gray-200 font-bold py-3 px-6 rounded-lg text-lg flex items-center justify-center space-x-2 hover:bg-white/10 transition-colors duration-300">
                <span>Learn More</span>
                <i className="fa-solid fa-external-link-alt"></i>
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-400 flex items-center justify-center lg:justify-start gap-2">
               <svg width="45" height="15" viewBox="0 0 45 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50 -translate-y-1">
                <path d="M1 13.5C10.3333 13.5 26.5 2.5 44 1.5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
                <path d="M40 5.5L44 1.5L40 0.5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Get started for free!
            </p>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;