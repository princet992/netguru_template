const Experience = () => {
  return (
    <>
      <div className="bg-slate-100 ">
        <div className="max-w-[1140px] mx-auto px-5 py-10">
          <div className="grid lg:grid-cols-2 gap-10 py-10 items-center">
            <h2 className="text-2xl font-medium lg:py-10">
              Benefit from our cross-industry
              <strong className="bg-gradient-to-l from-green-300 to-green-50 rounded-s-[50%] rounded-e-2xl pe-2">
                experience
              </strong>
            </h2>
            <p className="lg:w-96  font-medium  ">
              With a wide range of services, and experience in multiple
              industries, such as finance, retail, proptech, or healthcare, we
              understand your challenges.
            </p>
          </div>
          <div className="grid text-center lg:grid-cols-6 gap-20 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 py-10">
            <div className="grid place-items-center">
              <img src="/images/experience/ikea.svg" alt="" />
            </div>

            <div className="grid place-items-center">
              <img src="/images/experience/ubs.svg" alt="" />
            </div>

            <div className="grid place-items-center">
              {" "}
              <img src="/images/experience/vw.svg" alt="" />
            </div>

            <div className="grid place-items-center">
              {" "}
              <img src="/images/experience/zabka.svg" alt="" />
            </div>

            <div className="grid place-items-center">
              {" "}
              <img src="/images/experience/olx.svg" alt="" />
            </div>

            <div className="grid place-items-center">
              {" "}
              <img src="/images/experience/spendesk.svg" alt="" />
            </div>

            <div className="grid place-items-center">
              {" "}
              <img src="/images/experience/merck.svg" alt="" />
            </div>

            <div className="grid place-items-center">
              {" "}
              <img src="/images/experience/careem.svg" alt="" />
            </div>

            <div className="grid place-items-center">
              {" "}
              <img src="/images/experience/solaris.svg" alt="" />
            </div>

            <div className="grid place-items-center">
              {" "}
              <img src="/images/experience/moonfare.svg" alt="" />
            </div>

            <div className="grid place-items-center">
              {" "}
              <img src="/images/experience/keller-williams.svg" alt="" />
            </div>

            <div className="grid place-items-center">
              {" "}
              <img src="/images/experience/salzburg-ag.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
