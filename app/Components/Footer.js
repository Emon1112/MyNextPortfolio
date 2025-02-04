import React from 'react';
import Logo from "@/public/images/Logo.png";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent sticky bottom-0 bg-black text-white ">
            <div className="container p-3 flex justify-between">
                <Image src={Logo} height="60" width="60" alt="Logo"></Image>
                <p>All right reserved for Md. Emon Sheikh.</p>
            </div>
        </footer>
    );
};

export default Footer;