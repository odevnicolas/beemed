/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';



interface CarouselProps {
  images: string[];
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
}

const Carousel: React.FC<CarouselProps> = ({ images, imageClassName, imageStyle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, images.length]);

  return (
    <div className="relative overflow-hidden">
      <div className="relative transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 2}%)` }}>
        {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Carousel Image"
          className={`mx-auto ${index === currentIndex ? '' : 'hidden'} ${imageClassName}`}
          style={imageStyle}
        />
        ))}
      </div>
      <div className=" relative mt-1 ml-8">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-2 ${
              index === currentIndex ? 'bg-[#798977]' : 'bg-white border-2 border-[#798977]'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
