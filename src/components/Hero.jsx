import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';
import image10 from '../assets/image10.png';
import image11 from '../assets/image11.png';
import image12 from '../assets/image12.png';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [images, setImages] = useState([
    image1,
    image10,
    image11,
    image12,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ]);

  const [imgIndex, setImgIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setImgIndex((imgIndex + 1) % images.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imgIndex, images]);

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="relative w-full gap-8 overflow-hidden h-72">
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out w-full ${
            isAnimating
              ? 'translate-x-full opacity-0'
              : 'translate-x-0 opacity-100'
          } z-10`}
        >
          <img
            src={images[imgIndex]}
            alt="hero image"
            className="object-contain w-full h-full"
          />
        </div>
        <h2 className="absolute bg-[rgba(0,0,0,0.6)] text-white w-full h-full z-20 font-serif text-2xl font-semibold text-center  flex items-center justify-center">
          Established with a vision to provide efficient, reliable and high
          quality solutions, we have built a reputation for excellence and
          professionalism.
        </h2>
      </div>
    </div>
  );
};
export default Hero;
