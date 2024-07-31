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
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-primaryLight">
        <img
          loading="lazy"
          src={image}
          alt={altText}
          className="md:flex md:absolute md:object-cover md:inset-0 md:w-1/2 h-80"
        />
        </div>
        <div className="md:w-1/2 px-8 py-8  bg-secondaryDark h-80">
            <h1 className="text-primaryAccent">{headline}</h1>
            <h2 className="text-primaryDark">{subheadline}</h2>
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
