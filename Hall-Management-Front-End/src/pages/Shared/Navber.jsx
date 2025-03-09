


import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { path: "/", label: "HOME" },
        { path: "/about", label: "ABOUT" },
        { path: "/administration", label: "ADMINISTRATION" },
        { path: "/alumni", label: "ALUMNI" },
        { path: "/floorList", label: "ROOM" },
        { path: "/notice", label: "NOTICE" },
        { path: "/seat-vacancy", label: "SEAT VACANCY" },
        { path: "/swap", label: "SWAP SEAT" },
        { path: "/contact", label: "CONTACT" }
    ];

    const navLink = navItems.map(({ path, label }) => (
        <li className="hover:bg-gradient-to-r from-purple-950 to-blue-500"  key={path}>
            <NavLink 
                to={path} 
                className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : ""}
                onClick={() => setMenuOpen(false)}
            >
                {label}
            </NavLink>
        </li>
    ));

    return (
        <div className="w-full bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto navbar bg-base-100 text-white p-4">
                {/* Left Section */}
                <div className="navbar-start">
                    {/* Hamburger Icon for Small Screens */}
                    <div className="lg:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <a className="btn btn-ghost">
                        <img src="../../../public/MBSTU_Logo.png" alt="Logo" className="h-13 w-auto" />
                    </a>
                </div>

                {/* Center Navigation (Hidden on Small Screens) */}
                <div className="navbar-center hidden lg:flex  " >
                    <ul className="menu menu-horizontal px-1  ">
                        {navLink}
                    </ul>
                </div>

                {/* Right Section */}
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                </div>
            </div>

            {/* Mobile Menu (Drawer) */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={() => setMenuOpen(false)}>
                    <div className="absolute left-0 top-0 w-64 h-full bg-base-100 shadow-md p-5">
                        <button className="btn btn-ghost mb-5" onClick={() => setMenuOpen(false)}>✖</button>
                        <ul className="menu">{navLink}</ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
