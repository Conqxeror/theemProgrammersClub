import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import 'react-quill/dist/quill.snow.css'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
	  <NextUIProvider>
        <NextThemesProvider>
          <SessionProvider session={session}>
            	<Component {...pageProps} />
          </SessionProvider>
        </NextThemesProvider>
      </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
