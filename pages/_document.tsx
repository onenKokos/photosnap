import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// mostly taken from styled-components github tutorial

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />

          <meta name="description" content="Photosnap website as part of a frontend challenge." />

          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://photosnap-nine.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Photosnap" />
          <meta
            property="og:description"
            content="Photosnap website as part of a frontend challenge."
          />
          <meta
            property="og:image"
            content="https://photosnap-nine.vercel.app/images/stories/desktop/moon-of-appalacia.jpg"
          />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="photosnap-nine.vercel.app" />
          <meta property="twitter:url" content="https://photosnap-nine.vercel.app/" />
          <meta name="twitter:title" content="Photosnap" />
          <meta
            name="twitter:description"
            content="Photosnap website as part of a frontend challenge."
          />
          <meta
            name="twitter:image"
            content="https://photosnap-nine.vercel.app/images/stories/desktop/moon-of-appalacia.jpg"
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

export default CustomDocument;
