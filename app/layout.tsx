import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { twMerge } from 'tailwind-merge'
import Header from "./components/common/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Little Ely Shop",
  description: "The little ely shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(montserrat.className, 'bg-[#FEFEFE] max-w-screen-2xl mx-auto')}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
