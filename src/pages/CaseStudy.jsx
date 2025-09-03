import Card from "../components/card/Card";

const CaseStudy = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 bg-white relative z-10">
      <div className="flex justify-between items-center font-medium mb-10">
        <h2 className="text-2xl lg:text-3xl leading-snug">
          See top examples of design, development{" "}
          <strong className="bg-gradient-to-l from-green-300 to-green-50 rounded-s-[50%] rounded-e-2xl pe-2">
            & applied AI
          </strong>
        </h2>
        <a href="#" className="underline text-sm hidden lg:block hover:text-green-600 transition">
          More case studies
        </a>
      </div>

      <div className="flex gap-10 lg:grid lg:grid-cols-2 lg:gap-20 overflow-x-auto snap-x no-scrollbar">
        <div className="min-w-[20rem] snap-center">
          <Card
            cardImg="/images/case-study/caseStudy1.webp"
            logoImg="https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg"
            logodescription="R&D PRODUCTUION"
            title="Speeding up Merck’s process from 6 months to 6 hours"
            description="An AI Assistant that boosts R&D delivered in five weeks and under budget"
          />
        </div>

        <div className="min-w-[20rem] lg:mt-20 snap-center">
          <Card
            cardImg="/images/case-study/caseStudy2.webp"
            logoImg="https://www.netguru.com/hubfs/_N23/assets/logos/newzip.svg"
            logodescription="AI for real estate"
            title="60% more user engagement with hyper-personalization"
            description="AI PoC in under 6 weeks to test a hypothesis on hyper-localizing real estate content to increase customer engagement"
          />
        </div>

        <div className="min-w-[20rem] snap-center">
          <Card
            cardImg="/images/case-study/caseStudy3.webp"
            logoImg="https://www.netguru.com/hubfs/_N23/assets/logos/ubs.svg"
            logodescription="MOBILE APP REDESIGN"
            title="Team extension for mobile design revamp at speed"
            description="Seamless and consistent experience, unified payment flows, and easier in-app navigation"
          />
        </div>

        <div className="min-w-[20rem] snap-center">
          <Card
            cardImg="/images/case-study/caseStudy4.webp"
            logoImg="https://www.netguru.com/hubfs/_N23/assets/logos/prospero.svg"
            logodescription="MOBILE MVP"
            title="Mobile App MVP in 5 weeks for a New York fintech"
            description="New version of financial prediction app, complete with a re-vamped user interface and additional features"
          />
        </div>

        <div className="min-w-[20rem] lg:mt-20 snap-center">
          <Card
            cardImg="/images/case-study/caseStudy4.webp"
            logoImg="https://www.netguru.com/hubfs/_N23/assets/logos/keller-williams.svg"
            logodescription="SYSTEM DESIGN"
            title="Scaling real estate with AI-backed solutions"
            description="Optimized processes and smarter workflows using custom AI integrations"
          />
        </div>

        <div className="min-w-[20rem] snap-center">
          <Card
            cardImg="/images/case-study/caseStudy6.webp"
            logoImg="https://www.netguru.com/hubfs/_N23/assets/logos/new-globe.svg"
            logodescription="EDTECH AI"
            title="Boosting content creation with genAI in hours to seconds"
            description="AI-powered EdTech content generation reducing time from hours to seconds"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
