import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Functional Web Apps"
                        icon="/icons/eth.svg"
                        description="I create Web Apps that are functional and aesthetic."
                        />
                    <AboutCard
                        title="Backend"
                        icon="/icons/code.svg"
                        description="I develop fully functional and complex backend systems."
                        />
                    <AboutCard
                        title="Automate"
                        icon="/icons/gears.svg"
                        description="I develop automated solutions for a variety of industries."
                        />
                </div>
                
                <div className="flex-full about-text">
                    {/* <h5 className="gray">Introduce</h5> */}
                    <h1 className="white">Hello, I&#39;m Shawn Pickett</h1>
                    <h3 className="white">Delivering better workflows.</h3>
                    <p className="gray">An expert in Web2 and Web3 design, I am passionate about crafting user-centered products and automating processes. My work merges advanced 
                    technologies like AI and Blockchain, reinforcing my commitment to pushing the boundaries of design and development.<br/><br/></p>
                </div>
            </div>

            <div className="flex partners justify-space">
            <a href="https://www.mightymastery.com/" target="_blank" rel="noreferrer">
                    <div className="hover:cursor-pointer">
                    <Image src="/images/partners/mastery.png" height={121} width={240} alt="Mighty Mastery" />
                    </div>
                </a>
                <a href="https://www.aifrens.io/" target="_blank" rel="noreferrer">
                    <div className="hover:cursor-pointer">
                    <Image src="/images/partners/aifrens.png" height={110} width={275.34} alt="AiFrens" />
                    </div>
                </a>
                <a href="https://www.radiationsafetyexperts.com/" target="_blank" rel="noreferrer">
                    <div className="hover:cursor-pointer">
                    <Image src="/images/partners/rso.png" height={137} width={336} alt="Radiation Safety Experts" />
                    </div>
                </a>
                <a href="https://couturenightout.metamusee.art/" target="_blank" rel="noreferrer">
                    <div className="hover:cursor-pointer">
                    <Image src="/images/partners/cno.png" height={110} width={275.34} alt="cno" />
                    </div>
                </a>
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
}

function AboutCard ({title, icon, description} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
        </div>
    )
}