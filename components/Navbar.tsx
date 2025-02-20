'use client';

import { useState } from "react";
import Link from "next/link";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion';
import { List, Circle } from "@phosphor-icons/react";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

    const links = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Gallery",
            href: "/gallery"
        },
        {
            title: "Contact",
            href: "/contact"
        }

    ]

    const getChars = (word: string): React.ReactNode[] => {
        return word.split("").map((char, i) => (
            <motion.span
                key={`${char}-${i}`}
                custom={[i * 0.02, (word.length - i) * 0.01]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
            >
                {char}
            </motion.span>
        ));
    };

    const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] }

    const height = {
        initial: {
            height: 0
        },
        enter: {
            height: "auto",
            transition
        },
        exit: {
            height: 0,
            transition
        }
    }

    const blur = {
        initial: {
            filter: "blur(0px)",
            opacity: 1
        },
        open: {
            filter: "blur(4px)",
            opacity: 0.6,
            transition: { duration: 0.3 }
        },
        closed: {
            filter: "blur(0px)",
            opacity: 1,
            transition: { duration: 0.3 }
        }
    }

    const translate = {
        initial: {
            y: "100%",
            opacity: 0
        },
        enter: (i: [number, number]) => ({
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] }
        }),

        exit: (i: [number, number]) => ({
            y: "100%",
            opacity: 0,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] }
        })
    }

    const background = {
        initial: {
            height: 0
        },
        open: {
            height: "100vh",
            transition
        },
        closed: {
            height: 0,
            transition
        }
    }

    return (
        <nav className="w-full flex flex-col bg-ywhite py-4 px-9 absolute">
            <div className="w-full flex flex-row justify-between md:justify-start text-base">
                <Link className="md:w-1/2 text-yblack" href="/">Yuaylong</Link>

                <span
                    onClick={() => setIsActive(!isActive)}
                    className="md:w-1/2 flex items-center cursor-pointer text-yblack"
                >
                    {isActive ? (
                        <>
                            <Circle /> Close
                        </>
                    ) : (
                        <>
                            <Circle weight="fill" /> Menu
                        </>
                    )}
                </span>
            </div>

            <motion.div
                onClick={() => setIsActive(!isActive)}
                variants={background} initial="initial" animate={isActive ? "open" : "closed"} className="bg-black opacity-50 h-full w-full absolute left-0 top-full" />

            <AnimatePresence mode="wait">
                {
                    isActive &&
                    <motion.div variants={height} initial="initial" animate="enter" exit="exit">
                        <div className="max-h-7xl">
                            <div className="flex flex-wrap text-6xl my-16">

                                {

                                    links.map((link, index) => {
                                        const { title, href } = link;
                                        return <Link key={`l_${index}`} href={href}>
                                            <motion.h1
                                                className="text-yblack pr-9"
                                                onMouseOver={() => { setSelectedLink({ isActive: true, index }) }}
                                                onMouseLeave={() => { setSelectedLink({ isActive: false, index }) }}
                                                onClick={() => setIsActive(!isActive)}
                                                variants={blur}
                                                animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}>
                                                {getChars(title)}
                                            </motion.h1>
                                        </Link>
                                    })

                                }

                            </div>

                            <div className="flex flex-wrap text-base text-yblack">
                                <ul className="pr-16">
                                    <motion.li
                                        custom={[0.3, 0]}
                                        variants={translate} initial="initial"
                                        animate="enter"
                                        exit="exit">
                                        <span>Typography:</span> Eudoxus Sans
                                    </motion.li>
                                </ul>
                                <ul className="pr-16">
                                    <motion.li
                                        custom={[0.3, 0]}
                                        variants={translate} initial="initial"
                                        animate="enter"
                                        exit="exit">
                                        Privacy Policy
                                    </motion.li>
                                    <motion.li
                                        custom={[0.3, 0]}
                                        variants={translate} initial="initial"
                                        animate="enter"
                                        exit="exit">
                                        Terms & Conditions
                                    </motion.li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </nav>
    );


}
