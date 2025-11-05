import React from 'react';
import { HostingPlan } from '../types';
import { Page } from '../App';
import DynamicArt from './DynamicArt';

const arkPlans: HostingPlan[] = [
  {
    name: 'Starter ARK',
    price: '$14.99',
    period: 'month',
    features: [
      '10 Player Slots',
      'Basic DDoS Protection',
      'SSD Storage',
      'Automated Backups',
    ],
    isPopular: false,
  },
  {
    name: 'Advanced ARK',
    price: '$24.99',
    period: 'month',
    features: [
      '50 Player Slots',
      'Advanced DDoS Protection',
      'NVMe Storage',
      'Priority Support',
    ],
    isPopular: true,
  },
];

const minecraftPlans: HostingPlan[] = [
    {
    name: 'Creeper Plan',
    price: '$9.99',
    period: 'month',
    features: [
      '2GB RAM',
      '20 Player Slots',
      'Basic DDoS Protection',
      'Plugin Support',
    ],
    isPopular: false,
  },
  {
    name: 'Enderman Plan',
    price: '$19.99',
    period: 'month',
    features: [
      '4GB RAM',
      '60 Player Slots',
      'Advanced DDoS Protection',
      'Modpack Support',
    ],
    isPopular: true,
  },
  {
    name: 'Warden Plan',
    price: '$39.99',
    period: 'month',
    features: [
      '8GB RAM',
      'Unlimited Players',
      'Enterprise DDoS Protection',
      'Dedicated IP Address',
    ],
    isPopular: false,
  },
]

const PlanCard: React.FC<{ plan: HostingPlan; setPage: (page: Page) => void; }> = ({ plan, setPage }) => (
  <div className={`relative bg-card-bg-solid border rounded-2xl p-8 flex flex-col h-full ${plan.isPopular ? 'border-2 border-accent-purple' : 'border-white/10'}`}>
    {plan.isPopular && (
      <div className="absolute top-0 right-6 -translate-y-1/2 bg-accent-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        POPULAR
      </div>
    )}
    <h3 className="text-xl font-bold">{plan.name}</h3>
    <p className="mt-4 text-white">
      <span className="text-5xl font-extrabold">{plan.price}</span>
      <span className="text-gray-400 text-lg"> / month</span>
    </p>
    <ul className="mt-8 space-y-4 text-gray-300 flex-grow">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <i className="fa-solid fa-check text-accent-purple"></i>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button 
      onClick={() => setPage('pricing')}
      className={`w-full mt-8 py-3 px-6 font-bold rounded-lg transition-all duration-300 text-white ${plan.isPopular ? 'bg-gradient-to-r from-accent-purple to-indigo-600 hover:opacity-90' : 'bg-white/10 hover:bg-white/20'}`}>
      Configure Plan
    </button>
  </div>
);

interface HostingPlansProps {
  selectedGame: 'ark' | 'minecraft';
  setSelectedGame: (game: 'ark' | 'minecraft') => void;
  setPage: (page: Page) => void;
}

const GameSelectionCard: React.FC<{
    game: 'ark' | 'minecraft';
    title: string;
    selected: boolean;
    onClick: () => void;
    bgImage: string;
    logo: string;
}> = ({ game, title, selected, onClick, bgImage, logo }) => (
    <button
        onClick={onClick}
        className={`relative w-full max-w-sm sm:max-w-xs h-32 rounded-xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 group ${
            selected ? 'border-accent-purple shadow-lg shadow-purple-500/20' : 'border-white/10'
        }`}
    >
        <img 
            src={bgImage}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${selected ? 'opacity-20' : 'opacity-10 grayscale group-hover:grayscale-0'}`} 
            alt={`${title} Background`} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        <div className="relative z-10 flex items-center h-full p-6 text-left">
            <img src={logo} alt={`${title} Logo`} className="h-12 mr-4 flex-shrink-0" />
            <div>
                <p className="text-sm text-gray-400">View plans for</p>
                <p className="text-xl font-bold text-white">{title}</p>
            </div>
        </div>
    </button>
);


const HostingPlans: React.FC<HostingPlansProps> = ({ selectedGame, setSelectedGame, setPage }) => {
  const plans = selectedGame === 'ark' ? arkPlans : minecraftPlans;

  return (
    <section className="py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold">Find the Perfect Hosting Plan</h2>
          <p className="mt-4 text-gray-300">
            Choose a plan that fits your needs. All plans are scalable and packed with features to give you the best gaming experience.
          </p>
        </div>
        <div className="relative h-auto md:h-full flex items-center justify-center min-h-[300px] md:min-h-0">
          <DynamicArt />
        </div>
      </div>

      <div className="my-10 flex flex-col sm:flex-row justify-center items-center gap-6">
        <GameSelectionCard
            game="ark"
            title="ARK: Survival Evolved"
            selected={selectedGame === 'ark'}
            onClick={() => setSelectedGame('ark')}
            bgImage="https://cdn.wallpapersafari.com/39/59/3a0MOU.jpg"
            logo="https://i.imgur.com/mO27J1L.png"
        />
        <GameSelectionCard
            game="minecraft"
            title="Minecraft"
            selected={selectedGame === 'minecraft'}
            onClick={() => setSelectedGame('minecraft')}
            bgImage="https://i.imgur.com/4zYg4nF.jpeg"
            logo="https://i.imgur.com/ag58R4m.png"
        />
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 ${selectedGame === 'ark' ? 'max-w-4xl' : 'lg:grid-cols-3 max-w-7xl'} mx-auto gap-8`}>
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} setPage={setPage} />
        ))}
      </div>
    </section>
  );
};

export default HostingPlans;