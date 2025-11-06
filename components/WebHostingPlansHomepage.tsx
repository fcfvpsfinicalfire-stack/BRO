import React from 'react';
import { Page } from '../App';

const webHostingPlans = [
    {
        name: 'Starter',
        price: '450',
        isPopular: false,
        description: 'Perfect for launching your first blog, portfolio, or personal website.',
        features: ['1 Website', '10 GB NVMe Storage', '100 GB Transfer', '5 Email Accounts']
    },
    {
        name: 'Developer',
        price: '900',
        isPopular: true,
        description: 'Ideal for developers and freelancers managing multiple projects.',
        features: ['5 Websites', '25 GB NVMe Storage', '250 GB Transfer', '20 Email Accounts']
    },
    {
        name: 'Business',
        price: '1800',
        isPopular: false,
        description: 'The complete package for small businesses and agencies ready to scale.',
        features: ['Unlimited Websites', '50 GB NVMe Storage', '500 GB Transfer', 'Unlimited Emails']
    }
];

const PlanCard: React.FC<{ plan: typeof webHostingPlans[0]; setPage: (page: Page) => void; }> = ({ plan, setPage }) => (
  <div className={`relative bg-card-bg-solid border rounded-2xl p-8 flex flex-col h-full transition-all duration-300 group hover:-translate-y-1 ${plan.isPopular ? 'border-2 border-accent-purple shadow-2xl shadow-purple-900/50' : 'border-white/10 hover:border-purple-500/50'}`}>
    {plan.isPopular && (
      <div className="absolute top-0 right-8 -translate-y-1/2 bg-accent-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        POPULAR
      </div>
    )}
    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
    <p className="text-gray-400 min-h-[40px] flex-grow">{plan.description}</p>
    
    <div className="my-6 border-t border-white/10 pt-6">
        <p className="text-5xl font-extrabold text-white">
            LKR {plan.price}
            <span className="text-lg font-medium text-gray-400">/mo</span>
        </p>
    </div>
    
    <ul className="space-y-3 text-gray-300 mb-8">
        {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
                <i className="fa-solid fa-check text-accent-purple"></i>
                <span>{feature}</span>
            </li>
        ))}
    </ul>

    <button 
      onClick={() => setPage('webhosting')}
      className={`w-full mt-auto py-3 px-6 font-bold rounded-lg transition-all duration-300 text-white ${plan.isPopular ? 'bg-gradient-to-r from-accent-purple to-indigo-600 hover:opacity-90' : 'bg-white/10 hover:bg-white/20'}`}>
      View All Plans
    </button>
  </div>
);

interface WebHostingPlansHomepageProps {
    setPage: (page: Page) => void;
}

const WebHostingPlansHomepage: React.FC<WebHostingPlansHomepageProps> = ({ setPage }) => {
    return (
        <section className="py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">Powerful Web Hosting</h2>
                <p className="mt-4 text-lg text-gray-300">
                    Ultra-fast, secure, and reliable hosting for projects of all sizes. Packed with essential features to help you succeed online.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webHostingPlans.map((plan, index) => <PlanCard key={index} plan={plan} setPage={setPage} />)}
            </div>
        </section>
    );
};

export default WebHostingPlansHomepage;
