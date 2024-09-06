import { builder, Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(
  dynamic(() => import("@/components/ui/hero")),
  {
    name: "Hero",
//    image, headline, subheadline, blurb
    inputs: [
      { name: "headline", type: "string", defaultValue: "[Headline]"},
      { name: "subheadline", type: "string", defaultValue: "[Subheadline]"},
      { name: "blurb", type: "string", defaultValue: "[Blurb]"},
      { name: "image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg"] },
      { name: "mobileImage", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg"] },
      { name: "altText", type: "string", defaultValue: "[altText]" },
      { name: "buttonText", type: "string", defaultValue: "[Button Text]" },
      { name: "buttonUrl", type: "url" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("@/components/ui/banner")),
  {
    name: "Banner",
//    image, headline, subheadline, blurb
    inputs: [
      { name: "headline", type: "string", defaultValue: "[Headline]"},
      { name: "subheadline", type: "string", defaultValue: "[Subheadline]"},
      { name: "blurb", type: "string", defaultValue: "[Blurb]"},
      { name: "image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg"] },
      { name: "mobileImage", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg"] },
      { name: "altText", type: "string", defaultValue: "[altText]" },
      { name: "buttonText", type: "string", defaultValue: "[Button Text]" },
      { name: "buttonUrl", type: "url" },
    ],
  }
);


Builder.registerComponent(
  dynamic(() => import("@/components/ui/Button")),
  {
    name: "Button",
    inputs: [
      { name: "text", type: "string", defaultValue: "[Label ]"},
      { name: "target", type: "url" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("@/components/ui/logo-carousel")),
  {
    name: "Logo Carousel",
    inputs: [
      { name: "headline", type: "string", defaultValue: "[Headline]"},
      { name: "subheadline", type: "string"},
      {
        name: "slides",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          },
          { name: "altText", defaultValue: "default alt text", type: "string" },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("@/components/ui/link-list-columns")),
  {
    name: "Link List Columns",
    inputs: [
      {
        name: "links",
        type: "list",
        subFields: [
          { name: "text", defaultValue: "link text", type: "string" },
          { name: "href", defaultValue: "#", type: "string" },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("@/components/ui/list-item")),
  {
    name: "List Item",
    inputs: [
      { name: "text", defaultValue: "link text", type: "string" },
      { name: "href", defaultValue: "#", type: "string" },
    ],
  },  
);



Builder.registerComponent(
  dynamic(() => import("@/components/ui/practice-card")),
  {
    name: "Practice Card",
    inputs: [
      { name: "name", type: "string", defaultValue: "sample-practice" },
      { name: "title", type: "string", defaultValue: "Sample Practice" },
      { name: "thumbnail", type: "file" },
      { name: "altText", type: "string", defaultValue: "[altText]" },
    ],
  },  
);

Builder.registerComponent(
  dynamic(() => import("@/components/ui/social-links")),
  {
    name: "Social  Links",
  },  
);

Builder.registerComponent(
  dynamic(() => import("@/components/ui/blog-cta")),
  {
    name: "Blog CTA",
    inputs: [
      { name: "image", type: "file" },
      { name: "altText", type: "string", defaultValue: "Blog CTA Image" },
      { name: "title", type: "string" },
      { name: "description", type: "string", defaultValue: "[Blog CTA Description]" },
      { name: "linkUrl", type: "url" },
      { name: "linkLabel", type: "string" },
      { name: "linkTitle", type: "string" }
    ],
  },  
);

Builder.registerComponent(
  withChildren(dynamic(() => import("@/components/ui/card-section"))),
  {
    name: "Card Section",
    inputs: [
      {
        name: "headline",
        type: "text",
        defaultValue: "[Default Headline]",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("@/components/dam/damImage")),
  {
    name: "Cloud Image",
    inputs: [
      { name: "image", type: "cloudinaryImageEditor" },
      { name: "altText", type: "string", defaultValue: "[altText]" },
      { name: "height", type: "number" },
      { name: "width", type: "number" },
      { 
        name: "template", 
        type: "string",
        defaultValue: "portrait",
        enum: [
          { label: "Portrait", value: "portrait" },
          { label: "Landscape", value: "landscape" },
          { label: "Wide", value: "wide" },
          { label: "Square", value: "squre" },
          { label: "Thumbnail", value: "thumb" },
        ],
      },
      { name: "gravity", type: "string" ,
        defaultValue: "auto",
        enum: [
          { label: "Auto", value: "auto" },
          { label: "Face", value: "face" },
        ],
      }
    ],
  }
);


Builder.registerComponent(
  (props) => {
    if (!props.cloudinaryOptions) {
      return 'Choose an Image'
    }
    return (
      <img
        src={props.cloudinaryOptions.url}
        width={props.cloudinaryOptions.width}
        height={props.cloudinaryOptions.height}
      />
    )
  },
  {
    name: 'CloudinaryImage',
    image:
      'https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png',
    inputs: [{ 
      name: 'cloudinaryOptions', 
      type: 'cloudinaryImageEditor' 
    }],
  }
)