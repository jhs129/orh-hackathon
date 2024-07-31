import React from "react";
import Link from "next/link";

function Hero(props) {
  const {
    headline,
    subheadline,
    blurb,
    image,
    mobileImage,
    altText,
    buttonText,
    buttonUrl,
  } = props;

  return (
    <section>
      <div className="flex relative flex-row md:flex-col justify-center items-end px-16 py-20 min-h-[431px] max-md:px-5">
        <img
          loading="lazy"
          src={image}
          alt={altText}
          className="hidden md:flex absolute object-cover inset-0 size-full"
        />
        <img
          loading="lazy"
          src={mobileImage}
          alt={altText}
          className="flex md:hidden absolute object-cover inset-0 size-full"
        />
        <div className="hidden md:flex relative flex-col w-1/2 items-center lg:pl-8 xl:pl-0">
          <div>
            <h1 className="text-primaryAccent">{headline}</h1>
            <h2 className="text-primaryDark">{subheadline}</h2>
            <p className="mt-4">{blurb}</p>  
            <Link href={buttonUrl || "#"} passHref>
              <button>{buttonText}</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-center items-center px-5 py-10">
      <div>
            <h1 className="text-primaryAccent my-0">{headline}</h1>
            <h2 className="text-primaryDark my-0">{subheadline}</h2>
            <p className="mt-4">{blurb}</p>
            <Link href={buttonUrl || "#"} passHref className="mx-0">
              <button className="mr-10">{buttonText}</button>
            </Link>
          </div>
        </div>
    </section>
  );
}

export default Hero;
