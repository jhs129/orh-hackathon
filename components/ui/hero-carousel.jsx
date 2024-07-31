import { useState } from "react";
import { getDefaultContent } from "./hero-carousel.content";


function HeroCarousel(props) {
  let slides;
  if (!props.slides) {
    slides = getDefaultContent();
  } else {
    slides = props.slides;
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section
      id="hero-carousel"
      className="site-container flex flex-col overflow-hidden relative lg:px-4"
    >
      <div className="flex flex-col">
        <img
          src={slides[currentSlide].image}
          alt="Hero Image"
          width={1024}
          height={400}
          className="absolute z-[-1] h-full w-full mx-auto lg:h-80 object-cover object-center lg:inset-0"
          loading="eager"
          priority
        />
        {/* top containier */}
        <div className="flex flex-row justify-between">
          <div id="previous-slide" className="mt-28 md:mt-16">
            <div onClick={goToPrevSlide} className="-mr-12 md:mr-2 opacity-40">
              <svg
                width="100px"
                height="200px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                  fill="#747474"
                />
              </svg>
            </div>
          </div>
          {/* text overlay and button */}
          <div className="text-white w-80 md:w-4/6 lg:w-3/4">
            <div id="headline" className="flex flex-col py-16 pb-4">
              <div className="h-20">
                <h1 className="text-primaryLight text-3xl md:text-4xl leading-10 md:w-full max-w-full ">
                  {slides[currentSlide].headline}
                </h1>
              </div>
              <div id="subhead" className="h-36 md:h-16">
                {slides[currentSlide].subhead && (
                  <p className="text-xl pb-8">{slides[currentSlide].subhead}</p>
                )}
              </div>
            </div>
            <a
              id="hero-button"
              href={slides[currentSlide].buttonUrl}
              className="px-5 py-3 md:py-5 text-primaryLight self-stretch items-center w-64 text-center text-base border bg-tertiaryAccent bg-opacity-60 border-solid border-sky-400 rounded"
            >
              {slides[currentSlide].buttonText}
            </a>
          </div>
          <div id="next-slide" className="mt-28 md:mt-16">
            <div onClick={goToNextSlide} className="-ml-12 md:ml-2 opacity-40">
              <svg
                width="100px"
                height="200px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#747474"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* dot navigation */}
        <div id="nav-buttons" className="flex justify-center mb-4 md:-mt-12">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-2 mt-6 h-6 w-6 md:h-8 md:w-8 rounded-full bg-tertiaryAccent ${
                index === currentSlide ? "bg-secondaryDark " : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
