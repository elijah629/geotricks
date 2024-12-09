import type { Metadata } from "next";
import Link from "next/link";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

export const metadata: Metadata = {
  title: "GeoTricks",
  description: "Tricks for GeoGuessr or alternatives. Road sign database.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased dark`}
      >
        {children}
        <footer>Images and Map locations courtesy of <Link className="hover:underline" href="https://geotips.com">GeoTips</Link></footer>
      </body>
    </html>
  );
}
