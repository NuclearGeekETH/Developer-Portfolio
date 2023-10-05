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
                    <p className="gray">I design and code elegant solutions to complex problems and I am passionate about what I do. I have extensive experience building and 
                        maintaining products in Radiology and Radiation Safety along with Web2 and Web3 frontend and backend design. I love implementing AI and Blockchain into 
                        my products.</p>
                    <a className="green" href="mailto:spickett84@gmail.com">send me an email</a>
                    <div></div>
                    <a className="green" href="/resume.pdf" target="_blank" rel="noreferrer">view my resume</a>
                </div>
                <Image src="/images/pickett.png" width={586.13} height={500} alt="pickett"  /> 
            </div>
        </header>
    )
}