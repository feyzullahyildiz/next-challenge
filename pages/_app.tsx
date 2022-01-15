import React from "react";
import { AppProps } from "next/app";
import "@styles/global.scss";

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { Footer, Header } from "@components/scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [queryClient] = React.useState(() => new QueryClient())
  return <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Hydrate>
  </QueryClientProvider>
}

export default MyApp;
