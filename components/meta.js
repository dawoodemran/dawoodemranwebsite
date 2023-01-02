import React from 'react'
import Head from 'next/head'
import Script from 'next/script';
// import SocialImage from '/public/social-share-image.png'
import FavIcon from '/public/images/dawood-favoicon.png'

export default function Meta(props) {
  const meta = {
    title: "Dawood Emran - Creative UX/UI Developer",
    description: "I'm Dawood",
    url: "https://dawoodemran.com/",
    metaTitle: props.meta?.metaTitle || "Dawood Emran - Creative UX/UI Developer",
    socialDescription: "I'm Dawood",
    imageUrl: ''
  }
  return (
    <>

      {/* Google Analytics */}
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>

      <Head>
        <title>{props.meta?.title || meta.title}</title>
        <meta name="description" content={props.meta?.description || meta.description} />
        <meta name="author" content="Dawood Emran" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/svg" href={FavIcon.src} sizes="16x16" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.meta?.url || meta.url} />
        <meta property="og:title" content={props.meta?.metaTitle || meta.metaTitle} />
        <meta property="og:description" content={props.meta?.socialDescription || meta.socialDescription} />
        <meta property="og:image" content={props.meta?.imageUrl || meta.imageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={props.meta?.url || meta.url} />
        <meta name="twitter:title" content={props.meta?.metaTitle || meta.metaTitle} />
        <meta name="twitter:description" content={props.meta?.socialDescription || meta.metaDescription} />
        <meta name="twitter:image" content={props.meta?.imageUrl || meta.imageUrl} />

        <link rel="stylesheet" type='text/css' href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
      </Head>
    </>
  )
}
