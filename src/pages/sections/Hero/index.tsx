import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Dots } from "./components";
import logo from "@/assets/images/logo.png";
import hero1 from "@/assets/images/hero-1.png";
import hero2 from "@/assets/images/hero-2.png";
import { motion } from "framer-motion";

export const Hero: FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-[#121212] min-h-screen max-h-[768px]"
        >
            <div className="container mx-auto flex items-center justify-center min-h-screen relative overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center max-w-[705px]">
                    {/* For "Be a part of" (reveal from top) */}
                    <div style={{ overflow: "hidden" }}>
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <h2 className="text-[#F3F3F3] uppercase text-[40px]">
                                Be A Part Of
                            </h2>
                        </motion.div>
                    </div>

                    {/* For "The Movement" (reveal from bottom) */}
                    <div style={{ overflow: "hidden" }}>
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <h1 className="text-[#D1CABA] uppercase text-[92px]">
                                The Movement
                            </h1>
                        </motion.div>
                    </div>

                    {/* For the paragraph (reveal from bottom, more delay) */}
                    <div style={{ overflow: "hidden" }}>
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p className="text-[#9E9E9E] text-justify text-lg">
                                Project Black Is A Movement Dedicated To
                                Elevating Black Excellence And Minority
                                Success—Reshaping Narratives, Fostering
                                Innovation, And Creating Opportunities For
                                Lasting Empowerment
                            </p>
                        </motion.div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-8 justify-center">
                        <Button variant="chocolateOutline" className="">
                            Join the Wishlist
                        </Button>
                        <Button variant="chocolate" className="text-[#D7D7D7]">
                            Apply Now
                        </Button>
                    </div>
                </div>
                <Dots className="w-[60px] absolute -top-4 left-0 rotate-90" />
                <Dots
                    className="w-[75px] absolute top-5 right-0"
                    initialRotation={90}
                />

                <Clock className="w-[200px] absolute bottom-10 left-15" />

                <motion.img
                    src={logo}
                    alt=""
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-[100px] absolute top-0 left-[50%] -translate-x-1/2"
                />

                <motion.img
                    src={hero1}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    alt="Hero 1"
                    className="absolute -bottom-25 left-0 w-[500px] mix-blend-lighten"
                />
                <motion.img
                    src={hero2}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    alt="Hero 2"
                    className="absolute bottom-0 right-0 w-[500px] mix-blend-lighten"
                />
            </div>
        </motion.div>
    );
};
