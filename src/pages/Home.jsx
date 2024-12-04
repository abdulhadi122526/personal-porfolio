import portfoliohomeimg from '../assets/portfolio-home.png';
import { ReactTyped } from 'react-typed';
import profileimage from '../assets/MERN-Stack-Development.png'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Home = () => {
    return (
        <>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mx-auto mt-0 ">
                
                 <div className=" p-5 ms-28 mb-[233px] text-slate-100 mt-52 ">
                    <h1 className="text-3xl mb-3 tracking-wider">Hi There</h1>
                    <h1 className="text-5xl tracking-wider font-semibold mb-20">I'M <span className='text-[#A78BFA]'>Abdul Hadi</span> </h1>
                   <ReactTyped className='font-semibold text-3xl tracking-widest text-[#A78BFA]'
                    strings={[
                        "Full Stack Developer",
                        "MERN Stack Developer",
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                    cursorChar='_'
                    loop
                   /> 
                 
                </div>
                <div className=" p-5 ms-32 mt-48 hidden lg:inline ">
                    <img src={profileimage} alt="" width="400px" className='profileimage' />
                </div> 

                   
                <div className="  ms-28 mt-4 text-slate-100  ">
                    <h1 className="text-4xl font-semibold tracking-widest mb-11">LET ME INTRODUCE MYSELF</h1>
                   
                    <p className="text-2xl font-thin mt-4 leading-[50px]">I,m a front-end developer skilled in <span className="text-[#A78BFA] "> HTML, CSS, Bootstrap, JavaScript, React.js and Next.js.</span > I create responsive, user-friendly web applications with a focus on clean design and efficient code. <span className="text-[#A78BFA] "> I,m passionate about delivering high-quality, intuitive web solutions. </span></p>
                    
                </div>
                <div className=" ms-32 hidden lg:inline">
                    <img src={portfoliohomeimg} alt="" width="400px"/>
                </div> 
                <div className="mx-auto mt-10   col-span-full ">
                    <h1 className='font-semibold text-2xl'>I'M Also Here</h1>
                </div>
                <div className="social-icon mx-auto mt-5 flex gap-10 mb-20  col-span-full">
                        
                        <a href="https://www.facebook.com/profile.php?id=100010374810569&mibextid=ZbWKwL" target="_blank"><FaFacebook className='text-cyan-300 text-2xl'/>
                        </a>
                        <a href="https://github.com/abdulhadi122526" target="_blank"> <FaGithub className='text-cyan-300 text-2xl'/> </a>
                        <a href="https://www.linkedin.com/in/abdul-hadi-9765b22b2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"> <FaLinkedin className='text-cyan-300 text-2xl'/> </a>
                        <a href=""> <FaInstagramSquare className='text-cyan-300 text-2xl'/> </a>
                    </div>
            </div>
        </>
    )
}

export default Home