import Document, { Html, Head, Main, NextScript } from "next/document";

/** Custom HTML document overidding Next.js */
class AppDocument extends Document {
  //   static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx);
  //     return { ...initialProps };
  //   }

  render() {
    return (
      <Html>
        <Head />
        <body style={{ margin: "0" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
