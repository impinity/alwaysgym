"use client";
import Slider from "react-slick";
import Image from "next/image";

export default function AboutSlider() {
  const images = [
    "/images/room1.jpg",
    "/images/room2.jpg",
    "/images/room3.jpg",
    "/images/room4.jpg",
  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
   <>
     <Slider
     className=""
    {...settings}
    slidesToShow={1}
    slidesToScroll={1}
    >
      {images.map((image, index) => (
        <div key={index}>
          <Image
            className="w-full h-auto object-cover rounded-lg"
            src={image}
            width={1000}
            height={1000}
            alt={`Room AlwayGym ${index + 1}`}
            priority
          />
        </div>
      ))}
    </Slider>
   </>
  );
}
