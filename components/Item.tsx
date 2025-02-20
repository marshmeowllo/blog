'use client';

import Link from "next/link";

interface Props {
    title: string;
    links?: { text: string; url: string }[];
    description?: string;
    target?: string;
}

export default function Item({ title, links, description, target }: Props) {
    return (
        <div className="md:w-1/3 space-y-4">
            <div className="flex items-center space-x-2">
                <p className="font-normal md:font-bold text-base">{title}</p>
                <hr className="border-1 border-yblack  w-full" />
            </div>
            <div className="flex flex-col space-y-2">
                {
                    description && <p>description</p>
                }
                {
                    links && links.map(
                        (link, index) => (
                            <Link key={index} href={link.url} className="text-2xl md:text-base" target={target ? target : "_self"}>
                                {link.text}
                            </Link>
                        )
                    )
                }
            </div>
        </div>
    );
}