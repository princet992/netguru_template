import { MdArrowOutward } from "react-icons/md";
const Insights = () => {
  return (
    <div className=" pt-16">
      <div className="max-w-[1200px] mx-auto px-10 py-5  ">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium py-10">
            Explore insights{" "}
            <strong className="bg-gradient-to-l from-green-300 to-green-50 rounded-s-[50%] rounded-e-2xl pe-2">
              for acceleration
            </strong>
          </h2>
          <p className="text-sm underline font-medium hidden lg:block cursor-pointer">More disruptive insights</p>
        </div>
        <div className=" gap-10 flex overflow-x-auto no-scrollbar py-10 ps-20">
          <div className="bg-white pb-5 min-w-[18rem] hover:scale-105 transition-all duration-300 group">
            <figure className="relative">
              <img src="/images/insight/img1.webp" className="  h-52 w-full group-hover:brightness-75" />
              <MdArrowOutward className="absolute bottom-6 right-6 text-white text-4xl p-1 border-2 border-white rounded-full opacity-0 group-hover:opacity-100" />
            </figure>
            <div className="px-5 py-2">
              <span className="text-sm">BLOG</span>
              <p className="text-lg font-medium py-5 group-hover:underline">
                8 Affordable Ways to Implement an AI Strategy
              </p>
            </div>
          </div>
          <div className="bg-white pb-5 min-w-[18rem] hover:scale-105 transition-all duration-300 group">
            <figure className="relative">
              <img src="/images/insight/img2.webp" className="group-hover:brightness-75  h-52 w-full" />
              <MdArrowOutward className="absolute bottom-6 right-6 text-white text-4xl p-1 border-2 border-white rounded-full opacity-0 group-hover:opacity-100" />
            </figure>
            <div className="px-5 py-2">
              <span className="text-sm">BLOG</span>
              <p className="text-lg font-medium py-5 group-hover:underline">
                8 Affordable Ways to Implement an AI Strategy
              </p>
            </div>
          </div>
          <div className="bg-white pb-5 min-w-[18rem] hover:scale-105 transition-all duration-300 group">
            <figure className="relative">
              <img src="/images/insight/img3.webp" className=" group-hover:brightness-75 h-52 w-full" />
              <MdArrowOutward className="absolute bottom-6 right-6 text-white text-4xl p-1 border-2 border-white rounded-full opacity-0 group-hover:opacity-100" />
            </figure>
            <div className="px-5 py-2">
              <span className="text-sm">BLOG</span>
              <p className="text-lg font-medium py-5 group-hover:underline">
                8 Affordable Ways to Implement an AI Strategy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
