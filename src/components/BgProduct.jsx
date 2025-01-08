const BgProduct = () => {
  return (
    <>
      <div className="bg-[url(/images/hero-section/img1.webp)] bg-cover bg-fixed  py-10">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center ">
          <h2 className="text-3xl text-white  mx-auto py-5">
            Build impactful products{" "}
            <strong className="text-green-400">
              faster than <br className="hidden sm:block" /> in-house
            </strong>
            , smarter than the competition
          </h2>
          <button className="bg-green-400 px-3 py-2 rounded-lg hover:bg-green-700 font-medium hover:text-white">
            Estimated Project
          </button>
        </div>
      </div>
    </>
  );
};

export default BgProduct;
