import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SimpliLyfe - Simplify Your Life",
  description: "SimpliLyfe builds products to simplify your life. Our first product, TheFocusPath, helps students organize their studies and achieve their academic goals.",
  keywords: ["student productivity", "study app", "task management", "AI study tools", "focus techniques"],
  authors: [{ name: "SimpliLyfe" }],
  openGraph: {
    title: "SimpliLyfe - Simplify Your Life",
    description: "SimpliLyfe builds products to simplify your life. Discover TheFocusPath - the smart study companion for students.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
