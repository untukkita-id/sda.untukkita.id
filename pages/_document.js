/* eslint-disable react/no-danger */
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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
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
