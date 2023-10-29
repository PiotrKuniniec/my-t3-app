import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootLayout from "~/pages/layout";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <ClerkProvider {...pageProps} className={poppins.className}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
