const Recognized = () => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto px-5  ">
        <h3 className="text-sm font-medium">Recognized by :</h3>
        <div className="flex justify-between items-center gap-5 py-5">
          <figure>
            <img src="/images/recognize/clutch.svg" alt="" />
          </figure>
          <figure>
            <img src="/images/recognize/awwwards.svg" alt="" />
          </figure>
          <figure>
            <img src="/images/recognize/inc-5000.svg" alt="" />
          </figure>
          <figure>
            <img
              src="/images/recognize/ey-entrepreneur-of-the-year.svg"
              alt=""
            />
          </figure>
          <figure>
            <img src="/images/recognize/forbes.svg" alt="" />
          </figure>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Recognized;
