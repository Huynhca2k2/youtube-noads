import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogoBlack from "../images/yt-logo-black.png";
import ytLogoWhite from "../images/yt-logo-white.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const { loading, mobileMenu, setMobileMenu } = useContext(Context);

    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (
            (event?.key === "Enter" || event === "searchButton") &&
            searchQuery?.length > 0
        ) {
            navigate(`/searchResult/${searchQuery}`);
        }
    };

    const mobileMenuToggle = () => {
        setMobileMenu(!mobileMenu);
    };

    const { pathname } = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

    return (
        <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
            {loading && <Loader />}

            <div className="flex h-5 items-center">
                {pageName !== "video" && (
                    <div
                        className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
                        onClick={mobileMenuToggle}
                    >
                        {mobileMenu ? (
                            <CgClose className="dark:text-white text-xl" />
                        ) : (
                            <SlMenu className="dark:text-white text-xl" />
                        )}
                    </div>
                )}
                <Link to="/" className="flex h-5 items-center">
                    <img
                        className="h-full hidden dark:md:block"
                        src={ytLogoBlack}
                        alt="Youtube"
                    />
                    <img
                        className="h-full hidden dark:hidden md:block"
                        src={ytLogoWhite}
                        alt="Youtube"
                    />
                    
                    <img
                        className="h-full md:hidden"
                        src={ytLogoMobile}
                        alt="Youtube"
                    />
                </Link>
            </div>
            <div className="group flex items-center">
                <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border dark:border-[#303030] shadow-inner border-[#ccc] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                    <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                        <IoIosSearch className="dark:text-white text-xl" />
                    </div>
                    <input
                        type="text"
                        className="bg-transparent outline-none dark:text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        placeholder="Search"
                        value={searchQuery}
                    />
                </div>
                <button
                    className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 dark:border-[#303030] 
                    border-[#ccc] rounded-r-3xl dark:bg-white/[0.1] bg-[#f8f8f8]"
                    onClick={() => searchQueryHandler("searchButton")}
                >
                    <IoIosSearch className="dark:text-white text-xl" />
                </button>
            </div>
            <div className="flex items-center">
                <div className="hidden md:flex">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full dark:hover:bg-[#303030]/[0.6] hover:bg-[#e5e5e5]">
                        <RiVideoAddLine className="dark:text-white text-xl cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full dark:hover:bg-[#303030]/[0.6] hover:bg-[#e5e5e5]">
                        <FiBell className="dark:text-white text-xl cursor-pointer" />
                    </div>
                </div>
                <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                    <img src="https://yt3.ggpht.com/yti/AGOGRCrwiRq9uvdB12_SFhgeDVPa3nVNuW2jjk5sQg=s88-c-k-c0x00ffffff-no-rj" alt="user pic" />
                </div>
            </div>
        </div>
    );
};

export default Header;