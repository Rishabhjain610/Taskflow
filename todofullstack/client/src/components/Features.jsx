import React from 'react';
import SpotlightCard from './SpotlightCard';

const features = [
  {
    title: "Organize with Ease",
    description: "Create, edit, and remove tasks in seconds with our sleek, intuitive interface.",
  },
  {
    title: "Prioritize Effortlessly",
    description: "Mark important tasks and stay on top of what matters most.",
  },
  {
    title: "Dark Theme Delight",
    description: "Built with a clean dark UI and a cosmic purple vibe to keep you focused.",
  },
];

const Features = () => {
  return (
    <section className="text-white py-24 mb-[100px] px-4 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-bold mb-6">
          Why Choose <span className="text-purple-500">Taskflow</span>?
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Powerful features designed to simplify your productivity journey.
        </p>
      </div>

      {/* Subtle center line, placed behind content */}
      
      <div className="grid md:grid-cols-3 gap-16 relative z-10">
        {features.map((feature, idx) => (
          <SpotlightCard
            key={idx}
            spotlightColor="rgba(168, 85, 247, 0.15)"
            className="p-10 min-h-[280px] flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">{feature.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{feature.description}</p>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Features;
