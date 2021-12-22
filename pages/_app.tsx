import React from "react";
import { AppProps } from "next/app";
import "@styles/global.scss";

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // return <Component {...pageProps} />;
  const [queryClient] = React.useState(() => new QueryClient())
  return <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </Hydrate>
  </QueryClientProvider>
}

export default MyApp;
