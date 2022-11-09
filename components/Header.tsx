import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <h2 className="green">Web3 Developer</h2>
                    <h1 className="white">What are we building today?</h1>
                    <p className="gray">I design and code elegant solutions to complex problems and I am passionate about what I do.</p>
                    <a className="green" href="mailto:spickett84@gmail.com">send me an email</a>
                    <div></div>
                    <a className="green" href="https://aifrens.mypinata.cloud/ipfs/QmRM2v9YLy85niPpTtqyfSWXktoK58XGg4azNMqSVR9dD8">view my resume</a>
                </div>
                <Image src="/images/pickett.jpg" width={586.13} height={500} alt="pickett"  /> 
            </div>
        </header>
    )
}