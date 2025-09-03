const Certificate = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-10 pb-5 ">
        <div className="grid lg:grid-cols-[1fr_3fr] gap-10   py-5">
          <div className=" ">
            <h3 className="text-sm font-medium">Certificates :</h3>
            <div className="flex lg:justify-between justify-around items-center py-5">
              <figure>
                <img src="/images/certificate/b-corp.svg" alt="" />
              </figure>
              <figure>
                <img src="/images/certificate/tuv-nord.svg" alt="" />
              </figure>
            </div>
            <hr className="lg:hidden"/>
          </div>
          <div className=" ">
            <h3 className="text-sm font-medium">Partnerships :</h3>
            <div className="flex gap-5 items-center justify-between py-5">
              <figure>
                <img src="/images/certificate/microsoft.svg" className="" />
              </figure>
              <figure>
                <img src="/images/certificate/aws.svg" className="" />
              </figure>
              <figure>
                <img src="/images/certificate/mendix.svg" className="" />
              </figure>
              <figure>
                <img
                  src="/images/certificate/google-cloud-partner.svg"
                  className=""
                />
              </figure>
              <figure>
                <img
                  src="/images/certificate/webflow-premium-partner.svg"
                  className=""
                />
              </figure>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Certificate;
