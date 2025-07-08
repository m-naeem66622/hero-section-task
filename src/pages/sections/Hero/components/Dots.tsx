import { type FC } from "react";
import { motion } from "framer-motion";

interface DotsProps {
    className?: string;
    initialRotation?: number;
    animate?: boolean;
}

export const Dots: FC<DotsProps> = ({
    className,
    initialRotation = 0,
    animate = true,
}) => {
    return (
        <motion.div
            className={className}
            initial={{ rotate: initialRotation, opacity: 0 }}
            animate={
                animate
                    ? { rotate: 0, opacity: 1 }
                    : { rotate: initialRotation, opacity: 0 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 129 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <circle cx="5" cy="5" r="5" fill="#645743" />
                    <circle cx="5" cy="27" r="5" fill="#645743" />
                    <circle cx="5" cy="49" r="5" fill="#645743" />
                    <circle cx="22" cy="5" r="5" fill="#645743" />
                    <circle cx="22" cy="27" r="5" fill="#645743" />
                    <circle cx="22" cy="49" r="5" fill="#645743" />
                    <circle cx="39" cy="5" r="5" fill="#645743" />
                    <circle cx="39" cy="27" r="5" fill="#645743" />
                    <circle cx="39" cy="49" r="5" fill="#645743" />
                    <circle cx="56" cy="5" r="5" fill="#645743" />
                    <circle cx="56" cy="27" r="5" fill="#645743" />
                    <circle cx="56" cy="49" r="5" fill="#645743" />
                    <circle cx="73" cy="5" r="5" fill="#645743" />
                    <circle cx="73" cy="27" r="5" fill="#645743" />
                    <circle cx="73" cy="49" r="5" fill="#645743" />
                    <circle cx="90" cy="5" r="5" fill="#645743" />
                    <circle cx="90" cy="27" r="5" fill="#645743" />
                    <circle cx="90" cy="49" r="5" fill="#645743" />
                    <circle cx="107" cy="5" r="5" fill="#645743" />
                    <circle cx="107" cy="27" r="5" fill="#645743" />
                    <circle cx="107" cy="49" r="5" fill="#645743" />
                    <circle cx="124" cy="5" r="5" fill="#645743" />
                    <circle cx="124" cy="27" r="5" fill="#645743" />
                    <circle cx="124" cy="49" r="5" fill="#645743" />
                </g>
            </svg>
        </motion.div>
    );
};
