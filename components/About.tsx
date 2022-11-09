import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Functional DApps"
                        icon="/icons/design.svg"
                        description="I create DApps that are functional and aesthetic."
                        projects={7} />
                    <AboutCard
                        title="Web3 Backend"
                        icon="/icons/code.svg"
                        description="I develop fully functional and complex backend systems."
                        projects={150} />
                    <AboutCard
                        title="Automate"
                        icon="/icons/phone.svg"
                        description="I develop automated solutions for Web2, Web3 and beyond."
                        projects={50} />
                </div>
                
                <div className="flex-full about-text">
                    {/* <h5 className="gray">Introduce</h5> */}
                    <h1 className="white">Hello, I&#39;m Shawn Pickett</h1>
                    <h3 className="white">Delivering better workflows in Web3.</h3>
                    <p className="gray">I have extensive experience in Web3 backend and frontend. I build consistent products that solve problems. I automate all the things.<br/><br/></p>
                </div>
            </div>

            <div className="flex partners justify-space">
                <Image src="/images/partners/sfc.png" height={180} width={180} alt="flipperyfish" />
                <Image src="/images/partners/artspark.png" height={110} width={275.34} alt="artspark" />
                <Image src="/images/partners/aifrens.png" height={110} width={275.34} alt="aifrens" />
                <Image src="/images/partners/cno.png" height={110} width={275.34} alt="cno" />
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}