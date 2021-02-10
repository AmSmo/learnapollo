import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import theme from "../theme";

function MyApp({ Component, pageProps }: any) {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",

    cache: new InMemoryCache(),
    credentials: "include",
  });
  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
