import React from "react";
import Link from "next/link";

function Banner(props) {
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
      <div className="flex flex-col md:flex-row md:h-80">
        <div className="md:w-1/2 bg-primaryLight flex-shrink-0">
          <img
            loading="lazy"
            src={image}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 px-8 py-8 bg-secondaryDark flex flex-col justify-center">
          <h2>{headline}</h2>
          {subheadline && <h3 className="text-primaryDark">{subheadline}</h3>}
          <p className="mt-4">{blurb}</p>
          <Link href={buttonUrl || "#"} passHref>
            <button>{buttonText}</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
