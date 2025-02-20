'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface TitleProps {
    children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
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
                <h1 className="text-6xl font-thin my-9">{children}</h1>
            </motion.div>
    );
}
