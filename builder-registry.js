import { builder, Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

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
  withChildren(dynamic(() => import("@/components/ui/link-list-columns"))),
  {
    name: "Link List Columns",
    // childRequirements: {
    //   message: "You can only put in Card components",
    //   query: {
    //     "component.name": { $in: ["List Item"] },
    //   },
    // },
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
  withChildren(dynamic(() => import("@/components/ui/card-section"))),
  {
    name: "Card Section",
    childRequirements: {
      message: "You can only put in Card components",
      query: {
        "component.name": { $in: ["Practice Card"] },
      },
    },
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
    dynamic(() => import("@/components/ui/social-links")), 
    {
      name: "Social Links",
    } 
);

