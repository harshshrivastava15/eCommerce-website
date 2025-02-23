"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
    {
      id: 1,
      title: "Summer Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: "/",
      bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
      id: 2,
      title: "Winter Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: "/",
      bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
      id: 3,
      title: "Spring Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{ transform: `translateX(-${current * 100}vw)` }}>
                {slides.map(slide => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                        <div className="h-1/2 xl:w-3/5 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <Link href={slide.url}>
                                <button className="rounded-full bg-black text-white py-3 px-4">Buy Now</button>
                            </Link>
                        </div>
                        <div className="relative h-1/2 xl:w-2/5 xl:h-full flex items-center justify-center">
                            <Image src={slide.img} alt="" fill sizes="100%" className="object-cover" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;