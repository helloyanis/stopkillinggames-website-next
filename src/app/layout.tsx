import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import './i18n';
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import AnalyticsAlert from "@/components/analyticsAlert";

export const metadata: Metadata = {
  title: "Stop Killing Games",
  description: "This site is dedicated to the real-world action on ending the practice of publishers destroying videogames they have sold to customers.",
  openGraph: {
    title: "Stop Killing Games",
    description: "This site is dedicated to the real-world action on ending the practice of publishers destroying videogames they have sold to customers.",
    type: "website",
    locale: "en",
    siteName: "Stop Killing Games",
    images: [
      {
        url: "https://stopkillinggames.xn--0ci5768mq9c.ws/assets/images/skglogo.svg",
        width: 1248,
        height: 1248,
        alt: "Stop Killing Games logo",
      },
    ],
  },
  keywords: ["stop killing games", "skg", "videogames", "gaming", "publishers", "destroying", "end", "real-world action"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gpcHeader = (await headers()).get('sec-gpc');
  const shouldLoadAnalytics = gpcHeader !== '1';
  
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        {shouldLoadAnalytics && <Analytics />}
        <AnalyticsAlert shouldLoadAnalytics={shouldLoadAnalytics} />
      </body>
    </html>
  );
}
