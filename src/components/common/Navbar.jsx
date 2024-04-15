import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiconnector";
import {categories} from "../../services/apis";

const Navbar = () => {

    const { token } = useSelector((state) => state.auth); 
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart);
    const location = useLocation();

    const [subLinks, setSubLinks] = useState([]); 

    const fetchSublinks = async() => {
        try{
            const result = await apiConnector("GET", categories.Categories_API);
            console.log("Printing Sublinks result: ", result);
            setSubLinks(result.data.data); 
        }  catch(error) {
            console.log("Could not fetch the category list");
        }
    }

    useEffect(()=> {
        fetchSublinks();
    },[])

    return (
        <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
            <div className="w-11/12 flex max-w-maxContent justify-between">
                
                {/* logo */}
                <Link to="/">
                    <img src={logo} alt="Logo" width={160} height={130} />
                </Link>

                {/* navlinks */}
                <nav>
                    <ul className="flex gap-x-6 text-richblack-25">
                        {NavbarLinks.map((link, index) => (
                            <li key={index}>
                                {link.title === "Catalog" ? (
                                    <div>
                                        <p>{link.title}</p>
                                    </div>
                                ) : (
                                    <Link to={link.path}>
                                        <p className={link.path === window.location.pathname ? "text-yellow-25" : "text-richblack-25"}>
                                            {link.title}
                                        </p>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Login/Signup */}
                <div className="flex gap-x-4 items-center">
                    {user && user.accountType !== "Instructor" && (
                        <Link to="/dashboard/cart" className="relative">
                            <AiOutlineShoppingCart />
                            {totalItems > 0 && <span>{totalItems}</span>}
                        </Link>
                    )}

                    {
                        token === null && (
                           <Link to="/login">
                             <button className="border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">Login</button>
                           </Link> 
                        )
                    }

                    {
                        token === null && (
                            <Link to="/signup">
                                <button className="border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">Signup</button>
                            </Link>
                        )
                    }

                    {
                        token !== null && <ProfileDropDown/>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
