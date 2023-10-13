import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <h1 className="white pt-12 md:pt-2">What are we building today?</h1>
                    <p className="gray font-p22">Crafting thoughtful, elegant solutions to intricate challenges is not just my profession, it’s my passion. My expertise spans across Education, Radiology 
                    and Radiation Safety products to Web2 and Web3 design, with a special focus on both front and back end implementation. An avid advocate for disruptive 
                    technologies, I enjoy integrating AI and Blockchain into my creations, continuously pushing the boundaries of development and design.</p>
                    <div className="flex">
                        <div className="md:pr-4">
                        <button className="text-[#58C1B2] border-2 border-[#58C1B2] rounded-lg p-1 px-2 hover:bg-[#58C1B2] hover:text-black">
                            <a className="" href="mailto:spickett84@gmail.com">
                                Send me an Email
                            </a>
                        </button>
                        </div>
                        <button className="text-[#58C1B2] border-2 border-[#58C1B2] rounded-lg p-1 px-2 hover:bg-[#58C1B2] hover:text-black">
                            <a className="" href="/resume.pdf" target="_blank" rel="noreferrer">
                                View my Resume
                            </a>
                        </button>
                    </div>
                </div>
                <Image className="fixed bottom-0" src="/images/pickett.png" width={586.13} height={500} alt="Shawn Pickett Headshot"  /> 
            </div>
        </header>
    )
}