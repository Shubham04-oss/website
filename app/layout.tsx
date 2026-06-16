import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Navigation } from "@/components/navigation";
import { AmbientBackground } from "@/components/ambient-background";
import { BackgroundProvider } from "@/components/background-context";
import { BackgroundLoader } from "@/components/background-loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ORYXA — The Weirdly ODD Commerce OS",
  description:
    "A 24/7 proactive multi-agent workspace for commerce operations. Your team gets AI. The work gets done while you sleep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="/" />
        <link rel="preload" href="/night.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/dawn.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/morning.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/afternoon.svg" as="image" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">
        <BackgroundProvider>
          <BackgroundLoader />
          <SmoothScroll />
          <AmbientBackground />
          <Navigation />
          {children}
        </BackgroundProvider>
      </body>
    </html>
  );
}
