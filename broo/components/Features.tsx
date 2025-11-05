
import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    iconClass: 'fa-solid fa-rocket',
    title: 'Instant Setup',
    description: 'Get your server running in under 60 seconds',
  },
  {
    iconClass: 'fa-solid fa-shield-halved',
    title: 'DDoS Protection',
    description: 'Enterprise-grade security for your servers',
  },
  {
    iconClass: 'fa-solid fa-chart-line',
    title: '99.9% Uptime',
    description: 'Reliable hosting with guaranteed availability',
  },
  {
    iconClass: 'fa-solid fa-headset',
    title: '24/7 Support',
    description: 'Expert help whenever you need it',
  },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="bg-card-bg border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
        <p className="mt-2 text-gray-300">{feature.description}</p>
      </div>
      <div className="text-3xl text-purple-400">
        <i className={feature.iconClass}></i>
      </div>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
