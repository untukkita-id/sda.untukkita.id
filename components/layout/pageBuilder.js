import Head from 'next/head';

import PageTitle from 'components/common/page-title';
import Footer from 'components/common/footer';
import Header from 'components/common/header';

export default function PageBuilder({
  children,
  metaTitle,
  metaDescription,
  pageTitle,
  pageDescription,
  headerTitle,
}) {
  return (
    <>
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
      <Header title={headerTitle} />
      <PageTitle title={pageTitle} description={pageDescription} />
      {children}
      <Footer />
    </>
  );
}
