'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Item from './Item';

interface TitleProps {
    children: React.ReactNode;
    data: {
        title: string;
        links?: { text: string; url: string }[];
        description?: string;
        target?: string;
    }
}

export default function Description({ children, data }: TitleProps) {
    return (
        <motion.div
            className="w-1/2"
            key={typeof children === 'string' ? children : undefined}
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                ease: [0.83, 0, 0.17, 1],
                duration: 0.5
            }}
        >
            <p className="md:w-1/3 text-base my-9">{children}</p>
            <Item title={data.title} links={data.links} />
        </motion.div>
    );
}
