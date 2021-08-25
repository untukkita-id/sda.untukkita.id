/* eslint-disable global-require */
import Head from 'next/head';
import PageTitle from 'components/page-title';
import Footer from 'components/footer';
import Header from 'components/header';

export default function LayoutMarkdownPages({
  children,
  title,
  description,
  pageTitle,
  pageDescription,
}) {
  return (
    <div id="home" className="text-gray-700">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="title" content={title} />
        <meta property="og:url" content="https://covid.sda.untukkita.my.id/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Head>
      <Header title={title} />
      <PageTitle title={pageTitle} description={pageDescription} />
      <article className="py-4 px-8 prose prose-blue prose-lg">{children}</article>
      <Footer />
    </div>
  );
}
