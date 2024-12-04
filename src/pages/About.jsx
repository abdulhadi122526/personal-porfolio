import aboutPic from "../assets/about.png"
import { CiLocationArrow1 } from "react-icons/ci";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandBootstrap } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const About = () => {
  return (
    <>
      {/* Intro */}

      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div className=" p-5 ms-28  text-slate-100 mt-44">

          <h1 className="text-4xl font-semibold  mb-3">Know <span className="text-[#A78BFA]" > Who I'M </span></h1>

          <p className="text-[1.2rem] font-thin leading-[40px] ">Hello! I am Abdul Hadi, a <span className="text-[#bfabfa] underline ">  Hafiz-e-Quran, Alim-e-Deen,  and a front-end developer </span >   passionate about crafting modern and user-friendly web interfaces. Proficient in <span className="text-[#bfabfa]"> HTML, CSS, JavaScript, React.js, Next.js and Tailwind CSS, </span> I combine creativity with technical expertise to deliver exceptional digital experiences. My work reflects a blend of discipline, attention to detail, and innovation.
          </p>
          <h2 className="text-3xl mt-12">
            My Expertise
          </h2>

          <p className="mt-4 text-lg "> <CiLocationArrow1 className="inline" /> Front-End Development</p>
          <p className=" text-lg"> <CiLocationArrow1 className="inline" /> Clean and Responsive Designs</p>
          <p className=" text-lg"> <CiLocationArrow1 className="inline" /> Collaborative Approach</p>

        </div>
        <div className=" hidden lg:inline ">
          <img src={aboutPic} alt="" width="260px" className="mt-48 mx-auto" />
        </div>
      </div>

      {/* my skills */}

      <div className="pb-10 ">
        <h1 className="text-4xl text-center text-[#A78BFA] mb-10">Skills<span className="text-white"> & </span>Proficiencies</h1>

        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 ms-10 me-10">
          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"><AiOutlineHtml5 className="text-8xl mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><TbBrandCss3 className="text-[5.5rem] mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><TbBrandJavascript className="text-[5.5rem] mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><TbBrandBootstrap className="text-[5.5rem] mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><TbBrandTailwind className="text-[5.5rem] mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><GrReactjs className="text-[5.5rem] mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><TbBrandNextjs className="text-[5.5rem] mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><SiExpress className="text-[5.5rem] mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><SiReactrouter className="text-[5.5rem] mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><SiFirebase className="text-[5.5rem] mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><SiRedux className="text-[5.5rem] mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><FaNode className="text-[5.5rem] mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><BiLogoMongodb className="text-[5.5rem] mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><FaGitAlt className="text-[5.5rem] mx-auto" /></div>

          <div className="border rounded-xl w-52 py-4 mt-6 mx-auto shadow-md shadow-[#A78BFA] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "><FaGithub className="text-[5.5rem] mx-auto" /></div>

        </div>
      </div>




    </>
  )
}

export default About