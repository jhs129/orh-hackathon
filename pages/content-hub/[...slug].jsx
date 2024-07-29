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

import TopNavBar from "@/components/layout/top-nav-bar";
import HeaderBar from "@/components/layout/header-bar";
import Footer from "@/components/layout/Footer";
import TaxonomyTags from "@/components/ui/taxomomy-tags";


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

function BlogPage(props) {

  console.log("BlogPage props.blog.title:", props.blog?.title);
  const blog = props.blog;

  const isPreviewing = useIsPreviewing();
  if (!blog && !isPreviewing) {
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
        <title>{props.blog?.data?.title || `Orlando Health | Home`}</title>
        <meta
          name="description"
          content={
            blog?.data?.description ||
            `Orlando Health - Florida's largest and most comprehensive health network, with more than 450 locations and 36,000 team members.`
          }
        />
        {/* <meta
          name="keywords"
          content={
            props?.page?.data?.keywords ||
            `Healthcare , Health Network, Health Network Florida, Orlando Health`
          }
        /> */}

        <meta
          property="og:image"
          content={blog?.data?.image || null}
        />

        <meta property="og:title" content={blog?.data?.title || null} />
        <meta
          property="og:description"
          content={
            props?.blog?.data?.description ||
            `Orlando Health - Florida's largest and most comprehensive health network, with more than 450 locations and 36,000 team members.`
          }
        />
      </Head>
      <header>
        <TopNavBar content={props?.topnavbar || undefined} />
        <HeaderBar
          logoImage="/images/orh-logo.png"
          mobileLogoImage="/images/orh-logo-mobile.png"
          logoAlt="Orlando Health Logo"
          content={props?.headerbar || undefined}
        />
      </header>
      <main>
        <div className="site-container">
          <h5>&lt; View All Articles</h5>
          <img src={blog?.data?.image} alt={blog?.data?.title} />
          <div
            className="lazy-background"
            role="img"
            aria-label={blog?.data?.altText}
            style={{
              backgroundImage: `url('${blog?.data?.image}')`,
            }}
          ></div>

          <div className="post-blog-details">
            <TaxonomyTags taxonomies={blog?.data?.taxonomies} />
            <h1 className="pt-2">{blog?.data?.title}</h1>
            <div className="page-visit-count" data-page-id={blog?.data?.sitecoreId}>
              <span className="count-text">122 views</span>
            </div>
          </div>
          <div className="blog-content clearfix">
            <BuilderComponent model="blog" content={blog} />
          </div>
        </div>
      </main>

      <Footer
        navigation={props?.footer || undefined}
        socialLinks={props?.socialLinks || undefined}
        copyright={props?.settings?.copyright || undefined}
      />
    </>
  );
}

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps = async ({ params }) => {
  // Fetch the builder content for the given page


  console.log("Getting topNav");
  const topNavContent = await builder
    .get("navigation", { query: { name: "top-nav-bar" }, enrich: true })
    .promise();

  console.log("Getting headerBarContent");

  const headerBarContent = await builder
    .get("navigation", { query: { name: "headerbar" }, enrich: true })
    .promise();

  console.log("Getting blog for slug:", params.slug);

  const blog = await builder
    .get("blog", {
      userAttributes: {
        "data.name": params.slug,
      },
    })
    .toPromise();


  return {
    props: {
      blog: blog?.data || null,
      slug: params.slug,
      topnavbar: topNavContent?.data || null,
      headerbar: headerBarContent?.data || null,
    },
    revalidate: 5,
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default BlogPage;
