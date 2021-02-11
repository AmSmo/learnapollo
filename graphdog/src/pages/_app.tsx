import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

import theme from "../theme";

import { withApollo } from "../utils/createWithApollo";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default withApollo()(MyApp);
