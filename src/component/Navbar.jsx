import { NavLink } from "react-router-dom"
import { DiGithubFull } from "react-icons/di";

const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 left-0 right-0  z-[1] ">
                <div className="navbar bg-[#1A0B2E] rounded-md mx-auto ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>  
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-md dropdown-content font-extralight bg-zinc-800 rounded-box mt-3 w-52 p-2 shadow">
                                <li> <NavLink to="/">Home</NavLink> </li>
                                <li> <NavLink to="/About">About</NavLink> </li>
                                <li> <NavLink to="/Projects">Projects</NavLink> </li>
                             </ul>
                        </div>
                        <NavLink to="/" className="btn btn-ghost text-3xl ms-20 ">Abdul Hadi</NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1  font-extralight  ">
                            <li className=" nav-home text-lg hover:text-cyan-200"><NavLink to="/">Home</NavLink></li>
                            <li className="text-lg hover:text-cyan-200"><NavLink to="/About">About</NavLink></li>
                            <li className="text-lg hover:text-cyan-200"><NavLink to="/projects">Projects</NavLink></li>
                            {/* <li className="text-lg hover:text-cyan-200"><Link to="">Cotact</Link></li> */}

                        </ul>
                    </div>
                    <div className="navbar-end me-20  ">
                        <a className="btn no-underline hover:bg-cyan-500 hover:text-white rounded-xl" href="https://github.com/abdulhadi122526" target="_blank"><DiGithubFull className="text-5xl"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar