import { type FC, useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { Clock, Dots } from "./components";
import logo from "@/assets/images/logo.png";
import hero1 from "@/assets/images/hero-1.png";
import hero2 from "@/assets/images/hero-2.png";
import { motion } from "framer-motion";

export const Hero: FC = () => {
    const [isReady, setIsReady] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const totalImages = 3; // logo, hero1, hero2

    const handleImageLoad = () => setImagesLoaded((count) => count + 1);

    useEffect(() => {
        if (imagesLoaded === totalImages) {
            setIsReady(true);
        }
    }, [imagesLoaded]);

    return (
        <div className="min-h-screen max-h-[768px] max-w-[1920px] mx-auto relative overflow-hidden">
            <img
                src={logo}
                alt=""
                className="w-[90px] lg:w-[120px] mx-auto"
                onLoad={handleImageLoad}
            />

            {/* Dots animations */}
            <Dots
                className="w-[80px] absolute -top-4 left-0 rotate-90"
                animate={isReady}
            />
            <Dots
                className="w-[100px] absolute top-5 right-0"
                initialRotation={90}
                animate={isReady}
            />

            <div className="flex flex-col gap-8 items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center text-center lg:max-w-[723px] md:max-w-[90vw] sm:max-w-[95vw] w-full px-2">
                    {/* For "Be a part of" (reveal from top) */}
                    <div style={{ overflow: "hidden" }}>
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={isReady ? { y: 0 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-[#F3F3F3] uppercase lg:text-[35px] md:text-2xl sm:text-xl text-lg leading-15 tracking-[0.2em]">
                                Be A Part Of
                            </h2>
                        </motion.div>
                    </div>

                    {/* For "The Movement" (reveal from bottom) */}
                    <div style={{ overflow: "hidden" }}>
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={isReady ? { y: 0 } : {}}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: 0.15,
                            }}
                        >
                            <h1 className="text-[#D1CABA] uppercase font-extralight lg:text-[92px] md:text-5xl sm:text-3xl text-2xl leading-none">
                                The Movement
                            </h1>
                        </motion.div>
                    </div>

                    {/* For the paragraph (reveal from bottom, more delay) */}
                    <div style={{ overflow: "hidden" }}>
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={isReady ? { y: 0 } : {}}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: 0.3,
                            }}
                        >
                            <p className="text-[#9E9E9E] text-justify lg:text-lg md:text-base sm:text-sm text-xs mt-2 paragraph">
                                Project Black Is A Movement Dedicated To
                                Elevating Black Excellence And Minority
                                Success—Reshaping Narratives, Fostering
                                Innovation, And Creating Opportunities For
                                Lasting Empowerment
                            </p>
                        </motion.div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-8 justify-center">
                        <Button
                            variant="chocolateOutline"
                            className="xl:text-lg xl:w-[200px] xl:h-[50px]"
                        >
                            Join the Wishlist
                        </Button>
                        <Button
                            variant="chocolate"
                            className="text-[#D7D7D7] xl:text-lg xl:w-[200px] xl:h-[50px]"
                        >
                            Apply Now
                        </Button>
                    </div>
                </div>

                {/* Clock animation */}
                <Clock
                    className="w-[150px] lg:w-[200px] xl:w-[280px] block lg:absolute bottom-10 left-15"
                    animate={isReady}
                />

                {/* Images with loading tracking */}
                <motion.img
                    src={hero1}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isReady ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    alt="Hero 1"
                    className="absolute -bottom-20 left-0 mix-blend-lighten hidden lg:block w-[25%] xl:w-[32%]"
                    onLoad={handleImageLoad}
                />
                <motion.img
                    src={hero2}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isReady ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    alt="Hero 2"
                    className="absolute -bottom-20 right-0 mix-blend-lighten hidden lg:block w-[30%] xl:w-[39%]"
                    onLoad={handleImageLoad}
                />
            </div>
        </div>
    );
};
