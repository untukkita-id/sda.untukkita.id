/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          {/* Default OpenGraph Meta tag */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://covid.sda.untukkita.my.id/" />
          <meta property="og:image" content="/opengraph.jpg" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://covid.sda.untukkita.my.id/" />
          <meta property="twitter:image" content="/opengraph.jpg" />

          {/* Manifest Meta Tag */}
          <link rel="manifest" href="manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Laman Informasi Vaksinasi" />
          <meta name="apple-mobile-web-app-title" content="Laman Informasi Vaksinasi" />
          <meta name="theme-color" content="#374151" />
          <meta name="msapplication-navbutton-color" content="#374151" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="msapplication-starturl" content="/" />
          <link rel="icon" type="image/png" sizes="192x192" href="/maskable_icon_x192.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/maskable_icon_x96.png" />

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
