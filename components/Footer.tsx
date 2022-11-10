import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id="footer" className="light-bg flex justify-space">
            <span className="white">Copyright © {year} <Link href="/">Pickett</Link> - All rights reserved.</span>
            <ul className="flex">
                <li>
                    <a href="https://twitter.com/NuclearGeeketh" target="_blank" rel="noreferrer">
                        <Image src="/icons/twitter.svg" width={24} height={24} alt="twitter-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/shawnpickett-radsafety" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/NuclearGeekETH" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCUpJq_2MCVAXBlhaKSI6V3g" target="_blank" rel="noreferrer">
                        <Image src="/icons/youtube.svg" width={24} height={24} alt="youtube-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}