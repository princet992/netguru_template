import { MdArrowOutward } from "react-icons/md";


const Card = ({ cardImg, logoImg, title, description, logodescription }) => {
  return (
    <>
      <div className="font-medium group">
       <figure className="relative">
       <img
          src={cardImg}
          alt=""
          className="w-full group-hover:scale-105 group-hover:brightness-50 duration-300 h-64 lg:h-[450px] "
        />
       <figure className="absolute bottom-5 right-5 text-white text-2xl p-2 border-white border-[1px] rounded-full z-20 opacity-0 group-hover:opacity-100">
       <MdArrowOutward />
       </figure>
       </figure>
        <div className="flex justify-between items-center py-10">
          <img src={logoImg} alt="" />
          <p className="text-sm text-slate-500 max-[1023px]:hidden">
            {logodescription}
          </p>
        </div>
        <h2 className="sm:text-2xl font-bold py-5 group-hover:underline">
          {title}
        </h2>
        <p className="sm:text-lg text-slate-600">{description}</p>
      </div>
    </>
  );
};

export default Card;
