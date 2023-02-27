// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

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
        info: "The BMW 3 Series is a compact executive car manufactured by the German automaker BMW since May 1975. It is the successor to the 02 Series and has been produced in six different generations."

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
        info: "The BMW 3 Series is a compact executive car manufactured by the German automaker BMW since May 1975. It is the successor to the 02 Series and has been produced in six different generations."

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
        info: "The BMW 3 Series is a compact executive car manufactured by the German automaker BMW since May 1975. It is the successor to the 02 Series and has been produced in six different generations."

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
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        
      </Swiper>
    );
  };

export default Carousel;
