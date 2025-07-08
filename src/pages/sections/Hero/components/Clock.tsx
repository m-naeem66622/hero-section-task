import { useEffect, useState, type FC } from "react";
import { motion } from "framer-motion";

interface ClockProps {
    className?: string;
    animate?: boolean;
}

const pad = (num: number) => num.toString().padStart(2, "0");

export const Clock: FC<ClockProps> = ({ className, animate = true }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const hours = pad(time.getHours());
    const minutes = pad(time.getMinutes());
    const seconds = pad(time.getSeconds());
    const formatted = `${hours} : ${minutes} : ${seconds}`;

    return (
        <motion.div
            className={className}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={
                animate
                    ? { clipPath: "inset(0 0% 0 0)" }
                    : { clipPath: "inset(0 100% 0 0)" }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 322 165"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block" }}
            >
                <path
                    d="M320.794 1.00018H1V88.5856L52.5489 130.111H320.794V1.00018Z"
                    fill="url(#paint0_linear_1_473)"
                    stroke="#AD6D60"
                    strokeWidth="2"
                />
                <path
                    d="M320.795 134.646H56.3677L93.3727 163.761H320.795V134.646Z"
                    fill="#632E23"
                    stroke="#AD6D60"
                    strokeWidth="2"
                />
                <path
                    d="M1.23779 164V92.4043L86.6754 164H1.23779Z"
                    fill="#632E23"
                    stroke="#AD6D60"
                    strokeWidth="2"
                />
                <text
                    x="50%"
                    y="45%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="monospace, sans-serif"
                    fontSize="25"
                    fontWeight="bold"
                    fill="#D6D0C1"
                    letterSpacing="6"
                >
                    {formatted}
                </text>
                <defs>
                    <linearGradient
                        id="paint0_linear_1_473"
                        x1="315.257"
                        y1="7.22388"
                        x2="1.00001"
                        y2="130.435"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#151515" stopOpacity="0.5" />
                        <stop offset="1" stopColor="#3B2F2F" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    );
};
