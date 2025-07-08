import { type FC } from "react";
import { motion } from "framer-motion";

interface DotsProps {
    className?: string;
    initialRotation?: number;
}

export const Dots: FC<DotsProps> = ({ className, initialRotation = 0 }) => {
    return (
        <motion.div
            className={className}
            initial={{ rotate: initialRotation, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 129 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g style={{ mixBlendMode: "color-dodge" as const }}>
                    <circle cx="5" cy="5" r="5" fill="#D1CABA" />
                    <circle cx="5" cy="27" r="5" fill="#D1CABA" />
                    <circle cx="5" cy="49" r="5" fill="#D1CABA" />
                    <circle cx="22" cy="5" r="5" fill="#D1CABA" />
                    <circle cx="22" cy="27" r="5" fill="#D1CABA" />
                    <circle cx="22" cy="49" r="5" fill="#D1CABA" />
                    <circle cx="39" cy="5" r="5" fill="#D1CABA" />
                    <circle cx="39" cy="27" r="5" fill="#D1CABA" />
                    <circle cx="39" cy="49" r="5" fill="#D1CABA" />
                    <circle cx="56" cy="5" r="5" fill="#D1CABA" />
                    <circle cx="56" cy="27" r="5" fill="#D1CABA" />
                    <circle cx="56" cy="49" r="5" fill="#D1CABA" />
                    <circle cx="73" cy="5" r="5" fill="#D1CABA" />
                    <circle cx="73" cy="27" r="5" fill="#D1CABA" />
                    <circle cx="73" cy="49" r="5" fill="#D1CABA" />
                    <circle cx="90" cy="5" r="5" fill="#D1CABA" />
                    <circle cx="90" cy="27" r="5" fill="#D1CABA" />
                    <circle cx="90" cy="49" r="5" fill="#D1CABA" />
                    <circle cx="107" cy="5" r="5" fill="#D1CABA" />
                    <circle cx="107" cy="27" r="5" fill="#D1CABA" />
                    <circle cx="107" cy="49" r="5" fill="#D1CABA" />
                    <circle cx="124" cy="5" r="5" fill="#D1CABA" />
                    <circle cx="124" cy="27" r="5" fill="#D1CABA" />
                    <circle cx="124" cy="49" r="5" fill="#D1CABA" />
                </g>
            </svg>
        </motion.div>
    );
};
