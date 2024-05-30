import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { Providers } from "components/Providers";

import "styles/tailwind.css";

export const dynamic = "force-dynamic";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Astra: a charity platform for any cause.",
    template: "%s | Astra",
  },
  description: 'Welcome to "Astra" charity platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={"en"}
      className={`${montserrat.variable} bg-astra-950 text-white antialiased`}
    >
      <body>
        <Providers>
          <div className={"flex h-full flex-col"}>
            <Header />
            <main className={"flex-1 pt-[70px]"}>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
