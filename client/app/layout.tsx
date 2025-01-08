import type { Metadata } from "next";
import { Work_Sans, } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nani: Aba hajurko sirani",
  description: "Nani is an elderly AI companion just for your grandparents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${workSans.variable} antialiased`}
      >
        <Navbar />
        <main className="mt-24 p-5 w-full flex-center max-w-[1320px]">
          {children}
        </main>
      </body>
    </html>
  );
}
