import React from 'react';

const techFeatures = [
  {
    title: 'Portfolio Analytics & Optimisation',
    desc: 'Real-time insights that keep portfolios aligned to client objectives.'
  },
  {
    title: 'Aggregation & Consolidation',
    desc: 'A unified view of assets across custodians, geographies, and structures.'
  },
  {
    title: 'Risk Analytics',
    desc: 'Robust monitoring to identify and manage risks across market cycles.'
  },
  {
    title: 'Operational Efficiency',
    desc: 'Technology-driven oversight that enhances accuracy, responsiveness, and scalability.'
  }
];

const TechnologyFeatures = () => {
  return (
    <section className="w-full bg-[#1e2a5e] py-20 px-6 lg:px-[120px]">
      <div className="max-w-[1240px] mx-auto">

        {/* Title */}
        <h2 className="text-white font-['Inter'] font-semibold text-[32px] md:text-[40px] leading-tight mb-12 tracking-tight">
          Technology Powers Clarity and Control
        </h2>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Left Column - Image */}
          <div className="w-full lg:w-[35%] rounded-[12px] overflow-hidden shadow-sm min-h-[350px]">
            <img
              src="/technology/technologypowers.jpg"
              alt="Technology clarity"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Grid of Cards */}
          <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {techFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[12px] p-8 md:p-10 flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-[#1A2552] font-['Inter'] font-semibold text-[20px] md:text-[22px] leading-[1.3] mb-6 tracking-tight pr-4">
                  {feature.title}
                </h3>
                <p className="text-[#3b4b8f] font-['Inter'] font-medium text-[15px] leading-[1.5]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechnologyFeatures;
