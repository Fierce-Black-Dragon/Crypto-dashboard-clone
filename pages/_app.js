import "../styles/globals.css";

import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import customTheme from "../theme";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "dark",
          useSystemColorMode: false,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
