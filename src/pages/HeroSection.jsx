import { useEffect, useState } from "react";

const HeroSection = () => {
  const [position, setPosition] = useState(false);

  useEffect(() => {
    const handlePosition = () => {
      if (window.scrollY >10 && window.scrollY <= 500) {
        setPosition(true);
      } else {
        setPosition(false);
      }
    };
    window.addEventListener("scroll", handlePosition);
    return () =>window.removeEventListener("scroll",handlePosition)
  }, []);

  return (
    <>
      <div className="bg-[url(/images/hero-section/img1.webp)] bg-cover  min-h-[100vh]">
        <div
          className={`hero-section max-w-[1200px] mx-auto px-10 flex flex-col justify-center min-h-[100vh] font-medium text-white ${position && "fixed  md:left-[69px]"} `}
        >
          <div className="">
            <h2 className="sm:text-6xl text-5xl py-5">
              <strong className="text-green-700 ">Own</strong> the change
            </h2>
            <p className="sm:w-[450px] py-10 sm:text-lg text-slate-200">
              We speed up AI adoption and ramp up engineering and design capacity to help you lead your industry.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 items-center">
            <p>Trusted By :</p>
            <figure>
              <img src="/images/hero-section/img2.svg" alt="" />
            </figure>
            <figure>
              <img src="/images/hero-section/img3.svg" alt="" />
            </figure>
            <figure>
              <img src="/images/hero-section/img4.svg" alt="" />
            </figure>
            <figure>
              <img src="/images/hero-section/img5.svg" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
