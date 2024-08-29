import { dataAboutMe, dataSlider } from "@/data";

import Title from "./shared/title";

import { Button } from "./ui/button";

import { Phone } from "lucide-react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

import Link from "next/link";

import Image from "next/image";

const AboutMe = () => {
    return(
        <div className="p-6 md:px-12 md:py-30 mx-w-5xl mx-auto" id="about-me">
            <Title title="About Me" subtitle="Things about me" />

            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    {/* Carousel */}
                    <Carousel
                    opts={{
                        align: "start"
                    }}
                    orientation="vertical"
                    className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[200px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image src={data.url} alt="Image" 
                                        width={250} 
                                        height={400} 
                                        className="w-full h-auto rounded-lg" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4">                    
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>    
                    <p className="my-8">I am a student at the National University of the Center of the Province of Buenos Aires (UNICEN), where I am studying the University Technician in Computer Application Development (TUDAI). I really like to learn new things and I always seek to grow, both academically and personally. In my free time, I enjoy getting outdoors, playing sports, learning about the world of motorcycles, and exploring new topics, from reading books to learning new programming languages.</p>
                    <p className="my-8">Although I don't have much experience in web development and programming, I consider myself a person who easily adapts to different languages and technologies. I am always willing to take on new challenges and am motivated to solve complex problems and keep improving my technical and creative skills.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;