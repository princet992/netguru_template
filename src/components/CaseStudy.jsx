import Card from "./Card";

const CaseStudy = () => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto px-5 py-10 relative z-10 bg-white">
        <div className="flex justify-between items-center font-medium py-10">
          <h2 className="text-2xl ">
            See top examples of design, development <strong className=" bg-gradient-to-l from-green-300 to-green-50 rounded-s-[50%] rounded-e-2xl pe-2">& applied AI</strong>
          </h2>
          <a href="" className="underline text-sm hidden lg:block">
            More case studies
          </a>
        </div>
        <div className="flex  lg:grid lg:grid-cols-2 overflow-x-auto no-scrollbar  gap-20">
          {/* <div className="grid lg:grid-cols-2 grid-flow-col grid-cols-subgrid overflow-x-auto  gap-10"> */}
          <div className="min-w-[20rem]">
            <Card
              cardImg="/images/case-study/caseStudy1.webp"
              logoImg="https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg"
              logodescription="R&D PRODUCTUION"
              title="Speeding up Merck’s process from 6 months to 6 hours"
              description="An AI Assistant that boosts R&D delivered in five weeks and under budget"
            />
          </div>
          <div className="min-w-[20rem] lg:mt-20">
            <Card
              cardImg="/images/case-study/caseStudy2.webp"
              logoImg="https://www.netguru.com/hubfs/_N23/assets/logos/newzip.svg"
              logodescription="AI for real estate"
              title=" 60% more user engagement with hyper-personalization"
              description=" AI PoC in under 6 weeks to test a hypothesis on hyper-localizing real estate content to increase customer engagement"
            />
          </div>
          <div className="min-w-[20rem]">
            <Card
              cardImg="/images/case-study/caseStudy3.webp"
              logoImg="https://www.netguru.com/hubfs/_N23/assets/logos/ubs.svg"
              logodescription="MOBILE APP REDESIGN"
              title="Team extension for mobile design revamp at speed"
              description=" Seamless and consistent experience, unified payment flows, and easier in-app navigation"
            />
          </div>
          <div className="min-w-[20rem]">
            <Card
              cardImg="/images/case-study/caseStudy4.webp"
              logoImg="https://www.netguru.com/hubfs/_N23/assets/logos/prospero.svg"
              logodescription="MOBILE MVP"
              title=" Mobile App MVP in 5 weeks for a new York fintech"
              description="New version of financial prediction app, complete with a re-vamped user interface and additional feature"
            />
          </div>
          <div className="min-w-[20rem] lg:mt-20">
            <Card
              cardImg="/images/case-study/caseStudy4.webp"
              logoImg="https://www.netguru.com/hubfs/_N23/assets/logos/keller-williams.svg"
              logodescription="SYSTEM DESIGN"
              title=" Mobile App MVP in 5 weeks for a new York fintech"
              description="New version of financial prediction app, complete with a re-vamped user interface and additional feature"
            />
          </div>
          <div className="min-w-[20rem]">
            <Card
              cardImg="/images/case-study/caseStudy6.webp"
              logoImg="https://www.netguru.com/hubfs/_N23/assets/logos/new-globe.svg"
              logodescription="EDTECH AI"
              title=" Boosting content creation with genAI in hours to seconds"
              description="New version of financial prediction app, complete with a re-vamped user interface and additional feature"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
