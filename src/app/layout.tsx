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
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased dark`}>
        <div className="h-min sm:h-screen">
          <header className="flex border-b p-4">
            <h1 className="text-lg font-bold">GeoTricks</h1>
          </header>
          {children}
        </div>
        <footer className="border-t p-4">Images and Map locations courtesy of <Link className="text-primary hover:underline" href="https://geotips.com">GeoTips</Link></footer>
      </body>
    </html>
  );
}
