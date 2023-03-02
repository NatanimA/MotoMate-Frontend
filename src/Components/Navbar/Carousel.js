// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Navigation, Pagination, Scrollbar, A11y,
  } from 'swiper';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// Import Swiper and modules
import SocialLinks from './SocialLinks';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const cars = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=915&q=80",
        financeFee: "$129",
        purchaseFee: "$129",
        total: "$258",
        duration: "36 months",
        deposit: "$100",
        model: "BMW 3 Series",
        year: 2021,
        info: "The BMW 3 Series is a compact executive car manufactured by the German automaker BMW since May 1975."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        financeFee: "$129",
        purchaseFee: "$129",
        total: "$258",
        duration: "36 months",
        deposit: "$100",
        model: "Mercedez Benz C Class",
        year: 2021,
        info: "The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG. Introduced in 1993 as a replacement for the 190 (W201) range."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=915&q=80",
        financeFee: "$129",
        purchaseFee: "$129",
        total: "$258",
        duration: "36 months",
        deposit: "$100",
        model: "BMW 3 Series",
        year: 2021,
        info: "The BMW 3 Series is a compact executive car manufactured by the German automaker BMW since May 1975."
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        financeFee: "$129",
        purchaseFee: "$129",
        total: "$258",
        duration: "36 months",
        deposit: "$100",
        model: "Mercedez Benz C Class",
        year: 2021,
        info: "The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG. Introduced in 1993 as a replacement for the 190 (W201) range."
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=915&q=80",
        financeFee: "$129",
        purchaseFee: "$129",
        total: "$258",
        duration: "36 months",
        deposit: "$100",
        model: "BMW 3 Series",
        year: 2021,
        info: "The BMW 3 Series is a compact executive car manufactured by the German automaker BMW since May 1975."
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        financeFee: "$129",
        purchaseFee: "$129",
        total: "$258",
        duration: "36 months",
        deposit: "$100",
        model: "Mercedez Benz C Class",
        year: 2021,
        info: "The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG. Introduced in 1993 as a replacement for the 190 (W201) range."
    },
]

const Carousel = () => {
    return (
      <Swiper
      modules={[Navigation, Pagination]}
      loop
        spaceBetween={39}
        slidesPerView={1}
        navigation
        className='mt-20'
      >
        <div className='slide'>
        {cars.map((car) => (
            <SwiperSlide className='' key={car.id}>
                <div className="card flex flex-col items-center text-center gap-y-10">
                    <div className="card-image">
                        <img src={car.image} alt={car.model} />
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h3 className='font-extrabold tracking-wider uppercase'>{car.model}</h3>
                        </div>
                        <div className='dotted-line flex justify-center text-4xl text-gray-200 gap-x-1'>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                        </div>
                        <div className="card-info text-gray-300 mt-4 mb-5">
                            <p>{car.info}</p>
                        </div>
                        <div className="card-footer">
                            <div className='carousel-social-links flex justify-center'>
                                <a href="#" className="mr-3">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="#" className="mr-3">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#">
                                    <FaInstagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        </div>
        
      </Swiper>
    );
  };

export default Carousel;
