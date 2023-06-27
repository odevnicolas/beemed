import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrossel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full h-screen">
      <Slider {...settings}>
        <div>
          <img src="/Carrossel1.svg" alt="Carrossel 1" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src="/Carrossel2.svg" alt="Carrossel 2" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src="/Carrossel3.svg" alt="Carrossel 3" className="object-cover w-full h-full" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrossel;
