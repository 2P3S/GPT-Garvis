import type { DocumentContext } from 'next/document'

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  // Add style-components to next.js and start using it
  static async getInitialProps(
    ctx:DocumentContext
  ) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App:any) => (props:object) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx) ;

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }


  // Document template
  render() {
    return (
      <Html>
        {/* Meta Data */}
        <Head>
        </Head>
        <body>
          <div>
            {/* Pages rendering */}
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }

}

