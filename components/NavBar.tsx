import React from "react";
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function NavBar() {

    return (
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <Link href="/">Shawn Pickett</Link>
            </div>
            <ConnectButton />

            <ul className="flex white">
                <li>
                    <Link href="/#header">Home.</Link>
                </li>
                <li>
                    <Link href="/#about">About Me.</Link>
                </li>
            </ul>
        </nav>
    )
}