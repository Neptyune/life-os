import "~/styles/globals.css";

import { Exo_2 } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { Providers } from "./providers";

const exo2 = Exo_2({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Life OS",
  description: "Play your life!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${exo2.className}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <Providers>{children}</Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
