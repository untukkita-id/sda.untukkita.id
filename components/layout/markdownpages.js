/* eslint-disable global-require */
import Head from 'next/head';
import PageTitle from 'components/page-title';
import Footer from 'components/footer';
import Header from 'components/header';

export default function LayoutMarkdownPages({
  children,
  metaTitle,
  metaDescription,
  pageTitle,
  pageDescription,
}) {
  return (
    <div id="home" className="text-gray-700">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="title" content={metaTitle} />
        <meta property="og:url" content="https://covid.sda.untukkita.my.id/" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
      </Head>
      <Header title={pageTitle} />
      <PageTitle title={pageTitle} description={pageDescription} />
      <article className="py-4 px-8 prose prose-blue prose-lg">{children}</article>
      <Footer />
    </div>
  );
}
