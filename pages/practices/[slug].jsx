import {
    builder,
    BuilderComponent,
    BuilderContent,
    useIsPreviewing,
  } from "@builder.io/react";
  import React from "react";
  import Head from "next/head";
  import DefaultErrorPage from "next/error";
  
  import "/builder-registry";
  import { useEffect } from "react";
  import TopNavBar from "@/components/layout/top-nav-bar";
  import HeaderBar from "@/components/layout/header-bar";
  import Footer from "@/components/layout/Footer";
  import Hero from "@/components/ui/hero";
  
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
  
  function PracticePage(props) {
    const practice = props.practice;
  
    const isPreviewing = useIsPreviewing();
    if (!practice && !isPreviewing) {
      return (
        <>
          <Head>
            <meta name="robots" content="noindex" />
          </Head>
          <DefaultErrorPage statusCode={404} />
        </>
      );
    }
  
    return (
      <>
      <Head>
        <title>
          {props?.page?.data?.title || `Orlando Health | Home`}
        </title>
        <meta
          name="description"
          content={
            props?.page?.data?.description ||
            `Orlando Health - Florida's largest and most comprehensive health network, with more than 450 locations and 36,000 team members.`
          }
        />
        <meta
          name="keywords"
          content={
            props?.page?.data?.keywords ||
            `Healthcare , Health Network, Health Network Florida, Orlando Health`
          }
        />
 
        <meta
          property="og:image"
          content={props?.page?.data?.shareImage || null}
        />

        <meta property="og:title" content={props?.page?.data?.title || null} />
        <meta
          property="og:description"
          content={
            props?.page?.data?.description ||
            `Orlando Health - Florida's largest and most comprehensive health network, with more than 450 locations and 36,000 team members.`
          }
        />
      </Head>
      <header>
          <TopNavBar content={props?.topnavbar || undefined}/>
          <HeaderBar logoImage="/images/orh-logo.png" mobileLogoImage="/images/orh-logo-mobile.png" logoAlt="Orlando Health Logo" content={props?.headerbar || undefined}/>
      </header>
        <main>
          <div className="site-container">

            
      
            <BuilderContent
              content={practice}
              options={{ includeRefs: true }}
              model="practice"
            >
              {(data, loading, fullContent) => (
                <React.Fragment>
                  <Head>
                    {/* Render meta tags from custom field */}
                    <title>{data?.title || "Title Not Defined"}</title>

                  </Head>
 
           

              
                      <div className="flex flex-col md:flex-row">
                      <Hero headline={data?.title} subheadline={data?.subheadline} blurb={data?.blurb} image={data?.thumbnail} />
                    </div>
               

                           
                  <BuilderComponent
                    content={fullContent}
                    options={{ includeRefs: true }}
                  />
             
                </React.Fragment>
              )}
            </BuilderContent>
    
          </div>

        </main>
        <Footer navigation={props?.footer || undefined} socialLinks={props?.socialLinks || undefined} copyright={props?.settings?.copyright || undefined} />
      </>
    );
  }
  
// Define a function that fetches the Builder
// content for a given page
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
    })
    .toPromise();
  
    const practice =
      (await builder
        .get("practice", {
          // Include references, like our `author` ref
          options: { includeRefs: true },
          query: {
            // Get the specific article by handle
            "data.name": params.name,
          },
          enrich: true,
        })
        .promise()) || null;
  
  
  
    return {
      props: {
        practice: practice,
        slug: params.slug,
        page: page || null,
        topnavbar: topNavContent?.data || null,
        headerbar: headerBarContent?.data || null,
      },
      revalidate: 5,
    };
  }
  
  export async function getStaticPaths() {
    return {
      paths: [],
      fallback: true,
    };
  }
  
  export default PracticePage;
  