const Client = () => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto  px-5 py-10">
        <h2 className="text-2xl font-medium py-10">
          Check out our{" "}
          <strong className="bg-gradient-to-l from-green-300 to-green-50 rounded-s-[50%] rounded-e-2xl pe-2">
            client's words
          </strong>
        </h2>

        <div className="lg:grid lg:grid-cols-2 gap-10 flex overflow-x-auto no-scrollbar">
          <div className="bg-slate-100 px-2 sm:px-10 lg:mt-10 lg:py-3 sm:min-w-[400px] min-w-[290px] ">
            <img src="/images/client/keller-williams.svg" className="py-2" />
            <p className="font-medium text-slate-800  py-5">
              Netguru has been the best agency we've worked with so far.
            </p>
            <div className="flex items-center gap-5">
              <img
                src="/images/client/Adi_Pavlovic.webp"
                className="w-16 h-16"
              />
              <p className="font-bold">
                Adi Palvolic{" "}
                <span className="font-medium text-slate-800 text-sm">
                  /Director of Innovation
                </span>
              </p>
            </div>
          </div>

          <div className="bg-slate-100 px-10 lg:mb-10 lg:py-3 sm:min-w-[400px] min-w-[270px] ">
            <img src="/images/client/merck.svg" className="py-5" />
            <p className="font-medium text-slate-800  py-5">
              Excellence and speed. It’s rare to get both, and Netguru delivers.
            </p>
            <div className="flex items-center gap-5 py-5">
              <img
                src="/images/client/Mark Greiner-2.webp"
                className="w-16 h-16"
              />
              <p className="font-bold">
                Mark Greiner{" "}
                <span className="font-medium text-slate-800 text-sm">
                  / Digital Innovation Manager
                </span>
              </p>
            </div>
          </div>

          <div className="bg-slate-100 px-10 lg:mt-10 lg:py-3 sm:min-w-[400px] min-w-[270px] ">
            <img src="/images/client/candis.svg" className="py-5" />
            <p className="font-medium text-slate-800  py-5">
              Our first KPI is the time to hire, and Netguru provides candidates
              very fast.
            </p>
            <div className="flex items-center gap-5">
              <img
                src="/images/client/aleksander-heimrath.webp"
                className="w-16 h-16"
              />
              <p className="font-bold">
                Aleksander Heimrath{" "}
                <span className="font-medium text-slate-800 text-sm">
                  /Chief Technology Officer
                </span>
              </p>
            </div>
          </div>

          <div className="bg-slate-100 px-10 lg:mb-10 lg:py-3 sm:min-w-[400px] min-w-[270px] ">
            <img src="/images/client/total-processing.svg" className="py-5" />
            <p className="font-medium text-slate-800  py-5">
              It doesn't feel like an external team, it feels like we're just
              working together.
            </p>
            <div className="flex items-center gap-5 ">
              <img
                src="/images/client/Dally_Singh.webp"
                className="w-16 h-16"
              />
              <p className="font-bold">
                Dally Singh{" "}
                <span className="font-medium text-slate-800 text-sm">
                  /Chief Product Officer
                </span>
              </p>
            </div>
          </div>

          <div className="bg-slate-100 px-10 lg:mt-10 lg:py-3 sm:min-w-[400px] min-w-[270px] ">
            <img src="/images/client/volkswagen.svg" className="py-5" />
            <p className="font-medium text-slate-800  py-5">
              Let me put it this way: we have built a grand and impressive
              building. But without Netguru’s insights, we would be stuck on the
              ground-floor forever.
            </p>
            <div className="flex items-center gap-5">
              <img
                src="/images/client/Artur_Kryzan.webp"
                className="w-16 h-16"
              />
              <p className="font-bold">
                Artur Kryzan{" "}
                <span className="font-medium text-slate-800 text-sm">
                  / Team Leader and CX Manager
                </span>
              </p>
            </div>
          </div>
          <div className="bg-slate-100 px-10 lg:mb-10 lg:py-3 sm:min-w-[400px] min-w-[270px] ">
            <img src="/images/client/artemest.svg" className="py-5" />
            <p className="font-medium text-slate-800  py-5">
              With Netguru, we’re now releasing many more features than we used
              to.
            </p>
            <div className="flex items-center gap-5">
              <img
                src="/images/client/Marco_Deseri.webp"
                className="w-16 h-16"
              />
              <p className="font-bold">
                Macro Deseri{" "}
                <span className="font-medium text-slate-800 text-sm">
                  /Chief Digital Officer
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
