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

function BlogPage(props) {
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
        <title>{props?.page?.data?.title || `Orlando Health | Home`}</title>
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
            class="lazy-background"
            role="img"
            aria-label="0617 Concussion Image"
            style={{
              backgroundImage: `url('${blog?.data?.image}')`,
            }}
          ></div>

          <div class="post-blog-details">
            <div class="texonomy-tag">
              <a
                href="/content-hub/categories/patient-care/tests-and-treatments/rehabilitation/"
                target="_self"
                class="view-all-link view-all-category-links"
              >
                Rehabilitation
              </a>
            </div>
            <h1 class="blog-details-title">{blog?.data?.title}</h1>

            <div
              class="page-visit-count"
              data-page-id={blog?.data?.sitecoreId}
            >
              <span class="count-text">103 views</span>
            </div>
          </div>
          <div class="blog-content clearfix">
            <BuilderComponent model="blog" content={blog} />
          </div>
          <div class="blog-call-to-action large clearfix">
            <div class="blog-cta-image-wrapper">
              <a href="https://www.orlandohealth.com/newsletter-signup?ref=557ED11EDD6A4DB2B78F3270C3F08276">
                <img
                  src="https://www.orlandohealth.com/-/media/images/shared/call-to-action-target/man-and-woman-laughing.jpg?w=600"
                  alt="man and woman laughing"
                  class="blog-cta-image"
                />
              </a>
            </div>

            <div class="blog-cta-info">
              <h3 class="blog-cta-title">Choose to Stay in Touch </h3>
              <p>
                Sign up to receive the latest health news and trends, wellness
                &amp; prevention tips, and much more from Orlando Health.
              </p>

              <a
                href="https://www.orlandohealth.com/newsletter-signup?ref=557ED11EDD6A4DB2B78F3270C3F08276"
                class="btn large-btn-dark  "
                aria-label="Sign Up"
                title="Newsletter SignUp"
              >
                Sign Up
              </a>
            </div>
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

  console.log("****PARAMS:", params);
  const blog = await builder
    .get("blog", {
      userAttributes: {
        "data.name": params.slug,
      },
    })
    .toPromise();

  return {
    props: {
      blog: blog,
      slug: params.slug,
      page: page || null,
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
