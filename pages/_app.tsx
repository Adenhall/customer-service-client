import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core";
import theme from "theme";
import Layout from "components/Layout";

/** Custom App overidding Next.js */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
