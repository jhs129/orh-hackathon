import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Add missing import

function PracticeCard(props) {
  const { name, title, thumbnail, altText } = props;
  const [isHovered, setIsHovered] = useState(false); // Add missing state variable and useState hook

  let imageValue = thumbnail?.length > 0 ? thumbnail : '/images/primary-care2.png';
  let titleValue = title || 'Sample Practice';
  let nameValue = name || 'sample-practice'; 

  return (
    <div className="flex h-80 w-72 xl:w-80">
      <div id="image">
        <img src={imageValue} alt={altText} className="h-60 w-full" />
      </div>
      <div
        id="overlay"
        className={`absolute bottom-0 ${isHovered ? 'h-1/3' : 'h-1/4'} w-72 xl:w-80  bg-primaryAccent hover:bg-secondaryAccent group`}
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex mx-auto">
          <h3 className="text-primaryLight group-hover:text-primaryDark mx-auto px-4">
            <a className="text-primaryLight" href={`/practices/${nameValue}`}>{titleValue}</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default PracticeCard;
