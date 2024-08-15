import React from "react";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import "../builder-registry";
import TopNavBar from "../components/layout/top-nav-bar";
import HeaderBar from "@/components/layout/header-bar";
import Footer from "@/components/layout/Footer";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
builder.apiVersion = "v3";

// Define the Page component
export default function Page({ page }) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // If the page content is available, render
  // the BuilderComponent with the page content
  return (
    <>
      <Head>
        <title>{page?.data?.title}</title>
      </Head>
      {/* Render the Builder page */}
      <TopNavBar content={page?.topnavbar || undefined}/>
      <HeaderBar logoImage="/images/orh-logo.png" mobileLogoImage="/images/orh-logo-mobile.png" logoAlt="Orlando Health Logo" content={page?.headerbar || undefined}/>
      <BuilderComponent model="page" content={page || undefined} />
      <Footer/>
    </>
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
 
   const page = await builder
     .get("page", {
       userAttributes: {
         urlPath: "/" + (params?.page?.join("/") || ""),
       },
       options: {
         vercelPreview: true,
       },
     })
     .toPromise();
 
   // Return the page content as props
   return {
     props: {
       page: page || null,
       topnavbar: topNavContent?.data || null,
       headerbar: headerBarContent?.data || null,
     },
     // Revalidate the content every 5 seconds
     revalidate: 5,
   };
};
