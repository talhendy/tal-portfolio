import type { Metadata } from "next";
import { DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Tal Hendy - Product Designer",
  description:
    "Tal Hendy - a product designer specializing in complex systems and data-heavy products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${caveat.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-bg-canvas">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
