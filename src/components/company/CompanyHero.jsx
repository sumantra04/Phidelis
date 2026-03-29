import React from 'react';

const CompanyHero = () => {
  return (
    <section
      className="relative w-full h-[50vh] min-h-[400px] md:h-[60vh] flex items-center justify-center bg-cover bg-center mt-[84px]"
      style={{ backgroundImage: "url('/homePage/heroImg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white font-['Inter'] font-semibold text-[48px] md:text-[64px] leading-tight mb-4 tracking-tight">
          Company
        </h1>
        <p className="text-white font-['Inter'] font-normal text-[18px] md:text-[20px] max-w-2xl leading-relaxed">
          Seasoned expertise, united by integrity.
        </p>
      </div>
    </section>
  );
};

export default CompanyHero;
