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
builder.apiVersion = "v3";

function BlogArticle(props) {
  const article = props.article;
  const pageUrl = `https://www.orlandohealth.com/content-hub/${props.handle}`;

  const isPreviewing = useIsPreviewing();
  if (!article && !isPreviewing) {
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
      <BuilderContent
        content={article}
        options={{ includeRefs: true }}
        model="blog"
      >
        {(data, loading, fullContent) => (
          <React.Fragment>
            <Head>
              {/* Render meta tags from custom field */}
              <title>{data?.title || `Orlando Health | Home`}</title>
              <meta name="description" content={data?.blurb} />
              {/* <meta property="og:image" content="http://www.jhsdigitalconsulting.com/images/logo-blue.png" /> */}
              <meta property="og:image" content={data?.image} />
              <meta property="og:title" content={data?.title || null} />
              <meta property="og:description" content={data?.blurb} />
              <meta property="og:type" content="article" />
              <meta name="twitter:title" content={data?.title} />
              <meta name="twitter:image" content={data?.image} />
              <meta property="og:url" content={pageUrl} />
              <meta property="og:site_name" content="Orlando Health" />
              {/* <meta property="article:author" content="John Schneider" /> */}
              {/* <meta
                    property="article:published_time"
                    content={props?.createDate}
                  />
                  <meta
                    property="article:modified_time"
                    content={props?.lastUpdateDate}
                  /> */}
            </Head>
            <main>
              <header>
                <TopNavBar content={props?.topnavbar || undefined} />
                <HeaderBar
                  logoImage="/images/orh-logo.png"
                  mobileLogoImage="/images/orh-logo-mobile.png"
                  logoAlt="Orlando Health Logo"
                  content={props?.headerbar || undefined}
                />
              </header>
              <div className="site-container">
                <h5>&lt; View All Articles</h5>
                <img src={data?.image} alt={data?.title} />
                <div
                  className="lazy-background"
                  role="img"
                  aria-label={data?.altText}
                  style={{
                    backgroundImage: `url('${data?.image}')`,
                  }}
                ></div>
                <article className="post-blog-details">
                  <TaxonomyTags taxonomies={data?.taxonomies} />
                  <h1 className="pt-2">
                    {data?.title || "Headline Goes Here"}
                  </h1>
                  <div
                    className="page-visit-count"
                    data-page-id={data?.sitecoreId}
                  >
                    <span className="count-text">122 views</span>
                  </div>

                  <BuilderComponent
                    name="blog-article"
                    content={fullContent}
                    options={{ includeRefs: true }}
                  />
                </article>
              </div>
            </main>
            <Footer
              navigation={props?.footer || undefined}
              socialLinks={props?.socialLinks || undefined}
              copyright={props?.settings?.copyright || undefined}
            />
          </React.Fragment>
        )}
      </BuilderContent>
    </>
  );
}

export async function getStaticProps({ params }) {
  console.log("Calling getStaticProps for:", params);

  
  const topNavContent = await builder
    .get("navigation", { query: { name: "top-nav-bar" }, enrich: true })
    .promise();

  
  const headerBarContent = await builder
    .get("navigation", { query: { name: "headerbar" }, enrich: true })
    .promise();

  console.log("Getting blog for slug:", params.handle);

  const article =
    (await builder
      .get("blog", {
        // Include references, like our `author` ref
        options: { includeRefs: true },
        userAttributes: {
          "data.name": params.handle,
        },
        options: {
          vercelPreview: true,
        },
        enrich: true,
      })
      .promise()) || null;

  console.log("blog:", article);

  return {
    props: {
      article: article || null,
      topnavbar: topNavContent || null,
      headerbar: headerBarContent || null,
      handle: params.handle || null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const blogs = await builder.getAll('blog', {
    options: { noTargeting: true },
    fields: 'data.slug',
  });

  return {
    paths: blogs.map((blog) => `/content-hub/${blog.data?.slug}`),
    fallback: true,
  };
}


export default BlogArticle;
