import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <h1 className="white">What are we building today?</h1>
                    <p className="gray font-p22">Crafting thoughtful, elegant solutions to intricate challenges is not just my profession, it’s my passion. My expertise spans across Education, Radiology 
                    and Radiation Safety products to Web2 and Web3 design, with a special focus on both front and back end implementation. An avid advocate for disruptive 
                    technologies, I enjoy integrating AI and Blockchain into my creations, continuously pushing the boundaries of development and design.</p>
                    <div className="space-x-2">
                        <button>
                            <a className="" href="mailto:spickett84@gmail.com">
                                send me an email
                            </a>
                        </button>
                        <button>
                            <a className="" href="/resume.pdf" target="_blank" rel="noreferrer">
                                view my resume
                            </a>
                        </button>
                    </div>
                </div>
                <Image src="/images/pickett.png" width={586.13} height={500} alt="pickett"  /> 
            </div>
        </header>
    )
}