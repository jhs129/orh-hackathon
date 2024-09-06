import Image from "next/image";
import { CldImage } from "next-cloudinary";

const CloudImage = ({
  image,
  altText,
  height = 400,
  width,
  template,
  gravity
}) => {
  let renderedImage;

  if (!image) {
    return null;
  }


  switch (template) {
    case "portrait":
      renderedImage = (
        <CldImage
          width={width || height * (3 / 4)}
          height={height || 400}
          src={image.public_id}
          sizes="100vw"
          gravity="face"
          crop="fill"
          alt={altText || image.display_name}
        />
      );
      break;
    case "landscape":
      renderedImage = (
        <CldImage
          width={width || height * (4 / 3)}
          height={height || 400}
          src={image.public_id}
          sizes="100vw"
          gravity={gravity || "auto"}
          className="object-cover"
          crop="fill"
          alt={altText || image.display_name}
        />
      );
      break;
    case "wide":
      renderedImage = (
        <CldImage
          width={1600}
          height={400}
          src={image.public_id}
          sizes="100vw"
          gravity={gravity || "auto"}
          className="object-cover"
          crop={{
            width: 1600,
            height: 600,
            type: "fill",
            source: true,
          }}
          alt={altText || image.display_name}
        />
      );
      break;
      case "thumb":
        renderedImage = (
          <CldImage
            width={width || 150}
            height={150}
            src={image.public_id}
            sizes="100vw"
            gravity={gravity || "auto"}
            className="object-cover"
            crop={{
              width: 600,
              height: 600,
              type: "thumb",
              source: true,
            }}
            alt={altText || image.display_name}
          />
        );
        break;
        case "square":
          renderedImage = (
            <CldImage
              width={height || 300}
              height={height || 300}
              src={image.public_id}
              sizes="100vw"
              gravity={gravity}
              className="object-cover"
              crop={{
                width: 300,
                height: 300,
                type: "thumb",
                source: true,
              }}
              alt={altText || image.display_name}
            />
          );
          break;
  
    default:
      renderedImage = (
        <CldImage
          width={width || height * (3 / 4)}
          height={height}
          src={image.public_id}
          sizes="100vw"
          className="object-cover"
          gravity={gravity || "auto"}
          crop="fill"
          alt={altText || image.display_name}
        />
      );
  }

  return (
    <div className="w-full flex flex-row gap-2">
      {image && <>{renderedImage}</>}
    </div>
  );
};

export default CloudImage;
