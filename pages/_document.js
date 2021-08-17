import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://covid.sda.untukkita.my.id/" />
          <meta property="og:image" content="OpenGraph.jpg" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://covid.sda.untukkita.my.id/" />
          <meta property="twitter:image" content="OpenGraph.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
