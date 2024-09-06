import { useState, useEffect } from "react";
import { getDefaultContent } from "./logo-carousel.content";

import ArrowNav from "./arrow-nav";

function LogoCarousel(props) {
  let content = props.slides || getDefaultContent();

  const [slides, setSlides] = useState(content.slice(0, 5)); // Default to 5 slides for initial render
  const [slideCount, setSlideCount] = useState(5);

  useEffect(() => {
    const updateSlideCount = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 480) {
        setSlideCount(1);
      } else if (screenWidth >= 480 && screenWidth <= 1024) {
        setSlideCount(4);
      } else {
        setSlideCount(5);
      }
    };

    updateSlideCount();
    window.addEventListener('resize', updateSlideCount);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateSlideCount);
  }, []);

  useEffect(() => {
    setSlides(content.slice(0, slideCount));
  }, [slideCount, content]);

  const shiftSlides = (direction) => {
    setSlides((prevSlides) => {
      let newIndex;
      if (direction === 'forward') {
        newIndex = (content.indexOf(prevSlides[prevSlides.length - 1]) + 1) % content.length;
        return [...prevSlides.slice(1), content[newIndex]];
      } else {
        const firstItemIndex = content.indexOf(prevSlides[0]) - 1;
        newIndex = firstItemIndex < 0 ? content.length - 1 : firstItemIndex;
        return [content[newIndex], ...prevSlides.slice(0, prevSlides.length - 1)];
      }
    });
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='flex flex-col py-8 mx-auto max-w-7xl'>
      <h2 className="text-center">{props?.headline || "Lorem ipsum mit doler"}</h2>
      {props?.subheadline && <p className="text-center">{props.subheadline}</p>}
      <div className="flex flex-row">
        <a className="my-auto" onClick={() => shiftSlides('reverse')}>
          <ArrowNav height='60' width='60' lineWidth='1' circleColor='#CF4B08' arrowColor='#FFF' iconType='reverse' />
        </a>
        <div className='flex flex-col md:flex-row space-x-4 h-48 w-full'>
          {slides.map((slide, index) => (
            <img src={slide.image} alt={slide.alt} key={index}/>    
          ))}
        </div>
        <a className='my-auto' onClick={() => shiftSlides('forward')}>
          <ArrowNav height='60' width='60' lineWidth='1' circleColor='#CF4B08' arrowColor='#FFF' iconType='forward' />
        </a>
      </div>
    </section>
  );
}

export default LogoCarousel;
