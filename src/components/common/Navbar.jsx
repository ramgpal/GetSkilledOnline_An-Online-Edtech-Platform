import React from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link } from "react-router-dom";
import {NavbarLinks} from "../../data/navbar-links";
import { useLocation } from "react-router-dom"; 
import { matchPath } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();
    const matchRoutes = (route) => {
        return matchPath({path:route}, location.pathname);
    }

    return (
        <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
            <div className="w-11/12 flex max-w-maxContent justify-between">
                
                {/* logo */}
                <Link to="/">
                    <img src={logo} width={160} height={130}/>
                </Link>

                {/* navlinks */}
                <nav>
                    <ul className="flex gap-x-6 text-richblack-25">
                        {
                            NavbarLinks.map((link, index) => (
                                <li key={index}>
                                    {
                                        link.title ===  "Catalog" ? (<div></div>) : (
                                            <Link to={link?.path}>
                                                <p className={matchRoutes(link?.path) ? "text-yellow-25" : "text-richblack-25"}>{link.title}</p>
                                            </Link>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                {/* Login/Signup */}
                <div className="flex gap-x-4 items-center">
                    
                </div>

            </div>
        </div>
    )
}

export default Navbar;