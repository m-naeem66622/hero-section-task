import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Dots } from "./components";
import logo from "@/assets/images/logo.png";
import hero1 from "@/assets/images/hero-1.png";
import hero2 from "@/assets/images/hero-2.png";

export const Hero: FC = () => {
    return (
        <div className="bg-[#121212] min-h-screen max-h-[768px]">
            <div className="container mx-auto flex items-center justify-center min-h-screen relative overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center max-w-[705px]">
                    <h2 className="uppercase text-white text-[40px]">
                        Be A Part Of
                    </h2>
                    <h1 className="uppercase text-white text-[92px]">
                        The Movement
                    </h1>
                    <p className="text-white text-justify text-lg">
                        Project Black Is A Movement Dedicated To Elevating Black
                        Excellence And Minority Success—Reshaping Narratives,
                        Fostering Innovation, And Creating Opportunities For
                        Lasting Empowerment
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8 justify-center">
                        <Button variant="chocolateOutline" className="">
                            Join the Wishlist
                        </Button>
                        <Button variant="chocolate">Apply Now</Button>
                    </div>
                </div>
                <Dots className="w-[60px] absolute top-5 right-0" />
                <Dots className="w-[60px] absolute -top-4 left-0 rotate-90" />
                <Clock className="w-[200px] absolute bottom-10 left-15" />
                <img
                    src={logo}
                    alt=""
                    className="w-[100px] absolute top-0 left-[50%] -translate-x-1/2"
                />
                <img
                    src={hero1}
                    alt=""
                    className="absolute -bottom-25 left-0 w-[500px] mix-blend-lighten"
                />
                <img
                    src={hero2}
                    alt=""
                    className="absolute bottom-0 right-0 w-[500px] mix-blend-lighten"
                />
            </div>
        </div>
    );
};
