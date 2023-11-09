"use client"

import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { MoveRight, MoveLeft } from 'lucide-react'

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */

type CarouselProps = {
    // images: string[]
}

export default function Carousel({ /* images */ }: CarouselProps) {
    const images = [
        // you can add more image if you want
        {
            imageUrl: "https://themewagon.github.io/snapshot/images/model-1.jpg",
            type: "Nature",
            title: "Beautiful Work",
        },
        {
            imageUrl: "https://themewagon.github.io/snapshot/images/model-2.jpg",
            type: "Nature2",
            title: "Beautiful Work",
        },
        {
            imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg",
            type: "Nature3",
            title: "Beautiful Work",
        },
        {
            imageUrl: "https://themewagon.github.io/snapshot/images/model-4.jpg",
            type: "Nature4",
            title: "Beautiful Work",
        },
        {
            imageUrl: "https://themewagon.github.io/snapshot/images/model-5.jpg",
            type: "Nature5",
            title: "Beautiful Work",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const handlePrevSlide = () => {
        let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    return (
        <div className="relative">
            <MoveLeft
                onClick={handlePrevSlide}
                className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />
            <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
                <Swipe
                    onSwipeLeft={handleNextSlide}
                    onSwipeRight={handlePrevSlide}
                    className="relative z-10 w-full h-full"
                >
                    {images.map((image, index) => {
                        if (index === currentSlide) {
                            return (
                                <Image
                                    key={image.title}
                                    src={image.imageUrl}
                                    objectFit="contain"
                                    className="animate-fadeIn"
                                    width={500}
                                    height={500}
                                    alt={image.title}
                                />
                            );
                        }
                    })}
                </Swipe>
            </div>
            <MoveRight
                onClick={handleNextSlide}
                className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />

            <div className="relative flex justify-center p-2">
                {images.map((_, index) => {
                    return (
                        <div
                            className={
                                index === currentSlide
                                    ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                                    : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                            }
                            key={index}
                            onClick={() => {
                                setCurrentSlide(index);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}