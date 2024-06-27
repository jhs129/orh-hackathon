import Image from "next/image";
import TopNavBar from "@/components/layout/top-nav-bar";
import HeaderBar from "@/components/layout/header-bar";
import Footer from "@/components/layout/Footer";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import Head from "next/head";
import LogoCarousel from "@/components/ui/logo-carousel";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default function Home(props) {
  return (
    <main>
      <TopNavBar content={props?.topnavbar || undefined}/>
      <HeaderBar logoImage="/images/orh-logo.png" mobileLogoImage="/images/orh-logo-mobile.png" logoAlt="Orlando Health Logo" content={props?.headerbar || undefined}/>  
      <LogoCarousel />
      <Footer />
    </main>
  );
}

export const getStaticProps = async ({ params }) => {
  // Fetch the builder content for the given page

  const topNavContent = await builder
    .get("navigation", { query: { name: "top-nav-bar" }, enrich: true })
    .promise();

    const headerBarContent = await builder
    .get("navigation", { query: { name: "headerbar" }, enrich: true })
    .promise();
  // const footerContent = await builder
  //   .get("navigation", { query: { name: "footer-navigation" }, enrich: true })
  //   .promise();

  // const socialLinks = await builder
  //   .get("social-links", { query: { name: "hmh-social-links" }, enrich: true })
  //   .promise();

  // const siteProperties = await builder
  //   .get("site-properties", {
  //     query: { name: "site-properties" },
  //     enrich: true,
  //   })
  //   .promise();

  // const page = await builder
  //   .get("page", {
  //     userAttributes: {
  //       urlPath: "/" + (params?.page?.join("/") || ""),
  //     },
  //     enrich: true,
  //   })
  //   .toPromise();


  // Return the page content as props
  return {
    props: {
      topnavbar: topNavContent?.data || null,
      headerbar: headerBarContent?.data || null,
      // footer: footerContent?.data || null,
      // socialLinks: socialLinks?.data || null,
      // settings: siteProperties?.data || null,
      // page: page || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};

