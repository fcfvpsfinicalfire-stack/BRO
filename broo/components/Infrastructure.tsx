import React from 'react';

const Infrastructure: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="text-center md:text-left">
            <img src="https://i.imgur.com/UPf9vo8.png" alt="Game Server Infrastructure Illustration" className="max-w-md mx-auto md:mx-0" />
          </div>

          {/* Text Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Redundant Game Server Infrastructure
            </h2>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Server crashes and lag spikes are things of the past. Our Ryzen 9 and Xeon Gold powered nodes in Manila, Singapore and global locations with GPanel give you scalable, high-performance hosting that automatically recovers from hardware failures.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <h3 className="text-xl font-bold mb-3">Network Guarantee</h3>
                <p className="text-gray-400">
                  We guarantee our gaming network will be available 99.9% of the time, excluding maintenance. For any unscheduled downtime, we provide 10% monthly credit per hour, up to 100% of your fee.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Hardware Guarantee</h3>
                <p className="text-gray-400">
                  We guarantee all game server hardware will be operational 99.9% of the time. For any hardware failure downtime, we provide 15% monthly credit per hour, up to 100% of your fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
