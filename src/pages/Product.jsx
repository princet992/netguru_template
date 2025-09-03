
const Product = () => {


  return (
    <>
      <main className="bg-slate-100  ">
        <div className="max-w-[1200px] mx-auto py-10 px-10">
          <div className="grid lg:grid-cols-2 gap-10 py-10">
            <h2 className="text-2xl font-medium">
              Leverage our full digital <strong className="bg-gradient-to-l from-green-300 to-green-50 rounded-s-[50%] rounded-e-2xl pe-2">product expertise</strong>
            </h2>
            <p className="lg:w-80  font-medium  ">
              Whether you want to consult an idea, add missing capabilities,
              quickly expand your team, or hand over a project – we’ve got you
              covered.
            </p>
          </div>

          <div id='product' className={`flex justify-around items-center sm:gap-5 flex-nowrap overflow-x-auto no-scrollbar ps-5 `}>
            <div className="min-w-[20rem] max-w-[400px]:w-full">
              <figure >
                <img src="/images/product/01_ideate.webp" className="w-64" />
              </figure>
              <h2 className="font-bold text-2xl py-2">
                <span className="text-sm bg-gradient-to-l from-green-300 to-green-50 rounded-s-[50%] rounded-e-2xl pe-2 me-2">01</span>Ideate
              </h2>
              <p className=" max-w-[400px]:text-red-500">Identify, shape and validate your product idea</p>
            </div>

            <div className="min-w-[20rem]">
              <figure>
                <img src="/images/product/02_design.webp" className="w-64" />
              </figure>
              <h2 className="font-bold text-2xl py-2">
                <span className="text-sm bg-gradient-to-l from-green-300 to-green-50 rounded-s-[50%] rounded-e-2xl pe-2 me-2">02</span>Design
              </h2>
              <p>Craft beautiful digital experiences across platforms</p>
            </div>
            <div className="min-w-[20rem]">
              <figure>
                <img src="/images/product/03_develop.webp" className="w-64" />
              </figure>
              <h2 className="font-bold text-2xl py-2">
                <span className="text-sm bg-gradient-to-l from-green-300 to-green-50 rounded-s-[50%] rounded-e-2xl pe-2 me-2">03</span>Develop
              </h2>
              <p>Bring products to life with world-class engineering</p>
            </div>
            <div className="min-w-[20rem]">
              <figure>
                <img src="/images/product/04_maintain.webp" className="w-64" />
              </figure>
              <h2 className="font-bold text-2xl py-2">
                <span className="text-sm bg-gradient-to-l from-green-300 to-green-50 rounded-s-[50%] rounded-e-2xl pe-2 me-2">04</span>Maintain
              </h2>
              <p>Safeguard your product's quality and reliability</p>
            </div>
            <div className="min-w-[20rem]">
              <figure>
                <img src="/images/product/05_scale.webp" className="w-64" />
              </figure>
              <h2 className="font-bold text-2xl py-2">
                <span className="text-sm bg-gradient-to-l from-green-300 to-green-50 rounded-s-[50%] rounded-e-2xl pe-2 me-2">05</span>Scale
              </h2>
              <p>Gain flexibility to adjust and expand on the fly</p>
            </div>
          </div>
          </div>
      </main>
    </>
  );
};

export default Product;
