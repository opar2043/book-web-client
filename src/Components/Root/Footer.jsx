
import {CgFacebook} from "react-icons/cg";
import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-color boxShadow  w-full p-6 md:p-9">
            <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
                <div
                    className="flex justify-center sm:justify-between gap-[30px] w-full flex-wrap">
                    <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Service</p>
                    <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Features</p>
                    <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Our
                        Team</p>
                    <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Blog</p>
                    <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Contact
                        Us</p>
                </div>

                <div className="flex items-center flex-wrap gap-[10px] text-white">
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300">
                        <CgFacebook/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300">
                        <BsTwitter/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300">
                        <BsInstagram/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300">
                        <BsLinkedin/>
                    </a>
                </div>


                <div
                    className="border-t border-gray-200 pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
                    <p className="text-[0.8rem] sm:text-[0.9rem] text-white">© 2025 All Rights Reserved by Coloring Books </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
                    