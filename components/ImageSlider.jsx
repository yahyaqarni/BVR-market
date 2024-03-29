"use client";
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const ImageSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className='image-slide'>
                    <img
                    className='slider-image'
                        src="/images/pexels-pixabay-258846.jpg"
                        alt="Picture of the author"
                    />
                </div>

                <div className='image-slide'>
                    <img
                    className='slider-image'
                        src="/images/pexels-pixabay-258846.jpg"
                        alt="Picture of the author"
                    />
                </div>

                <div className='image-slide'>
                    <img
                    className='slider-image'
                        src="/images/pexels-pixabay-258846.jpg"
                        alt="Picture of the author"
                    />
                </div>

                <div className='image-slide'>
                    <img
                    className='slider-image'
                        src="/images/pexels-pixabay-258846.jpg"
                        alt="Picture of the author"
                    />
                </div>
                
            </Slider>

            <style jsx>{`
                .slider-container {
                    width: 100vw;
                }
                .image-slide {
                    width: 100%;
                    height: 500px;
                    overflow: hidden;
                }
                .slider-image {
                    width: 100%;
                    height: auto;
                }
            `}</style>
        </div>
    );

    

}

export default ImageSlider