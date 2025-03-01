import { NavLink } from "react-router-dom";


const Navber = () => {
    const navLink = <>
                          
<li><NavLink to={'/'}>HOME</NavLink></li>
<li><NavLink to={'/about'}>ABOUT</NavLink></li>
<li><NavLink to={'/administration'}>ADMINISTRATION</NavLink></li>
<li><NavLink to={'/alumni'}>ALUMNI</NavLink></li>
<li><NavLink to={'/room'}>ROOM</NavLink></li>
<li><NavLink to={'/notice'}>NOTICE</NavLink></li>
<li><NavLink to={'/seat-vacancy'}>SEAT VACANCY</NavLink></li>
<li><NavLink to={'/contact'}>CONTACT</NavLink></li>


</>

    return (
       
        <div className="max-w-7xl mx-auto navbar bg-base-100 shadow-sm text-white p-4 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost "><img src="../../../public/MBSTU_Logo.png" alt=""  className="h-13 w-auto"  /> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navber;