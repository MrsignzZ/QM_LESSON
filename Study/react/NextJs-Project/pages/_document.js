import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

function withLog(Comp) {
  return(props) => {
    console.log(props)
    return <Comp {...props} />

  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enchange: App => props => sheet.collectStyles(<App {...props} />),
        enhanceComponent: Component => withLog(Component)
      })

      const props = await Document.getInitialProps(ctx)
      return {
        ...props,
        style: <>{props.styles}{sheet.getStyleElement()}</>
      }
    } finally {
      sheet.seal()
    }




  }
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument