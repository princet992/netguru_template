import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useState } from "react";
const Contact = () => {
  const [tooltipIcon, setTooltipIcon] = useState(false)
  return (
    <>
      <div className="max-w-[1140px] mx-auto px-5 py-10 ">
        <img src="/images/hero-section/netguru.svg" alt="" />
        <div className="grid lg:grid-cols-[1fr_1fr_2fr] grid-cols-2 gap-10 py-5">
          <div>
            <h2 className="text-lg font-bold">Netguru S.A</h2>
            <div className="py-5 text-xs">
              <p>Nowe Garbary Office Center</p>
              <p>ul. Małe Garbary 9</p>
              <p>61-756 Poznań, Poland</p>
            </div>
            <div className="text-xs">
              <p>VAT-ID: PL7781454968</p>
              <p>REGON: 300826280</p>
              <p>61-756 Poznań, Poland</p>
            </div>
            <a
              href=""
              className="text-sm font-bold underline py-5 inline-block"
            >
              hello@netguru.com
            </a>
          </div>
          <div>
            <h2 className="text-lg font-bold">Follow Us</h2>
            <div className="py-5 grid grid-cols-3 max-w-[15rem] gap-5">
              <div >
                {" "}
                <FaGithub className="cursor-pointer text-2xl"/>
              </div>
              <div >
                <FaFacebookF className="cursor-pointer text-2xl"/>
              </div>
              <div >
                <FaLinkedin className="cursor-pointer text-2xl"/>
              </div>
              <div >
                <FaTwitter className="cursor-pointer text-2xl"/>
              </div>
              <div >
                <FaYoutube className="cursor-pointer text-2xl"/>
              </div>
              <div >
                <FaSnapchat className="cursor-pointer text-2xl"/>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-lg font-bold">
              Digital Acceleration Editorial
            </h2>
            <p className="text-slate-700">
              Boost innovation with insights for change
            </p>
            <div className="flex py-5 max-w-screen-md">
              <input type="text" className="bg-slate-300 py-2 px-3 w-full focus:outline-none" />
              <button className="bg-slate-300 py-2 px-3 text-sm font-medium hover:bg-slate-400">Submit</button>
            </div>
            <div className="input flex items-center gap-2 ">
              <input type="checkbox" />
              <span className="text-xs text-slate-700">
                I agree to receive marketing communication from Netguru.
              </span>
               <BsFillInfoCircleFill onClick={()=>setTooltipIcon(!tooltipIcon)} className={`${tooltipIcon && 'text-green-500'}`}/>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Contact;
