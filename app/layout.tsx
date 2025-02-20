import type { Metadata } from "next";
import localFont from 'next/font/local'
import Navbar from "@/components/Navbar";
import "./globals.css";

const eudoxus = localFont({
  variable: '--font-eudoxus',
  src: [
    {
      path: './Eudoxus-Sans-font/EudoxusSans-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Eudoxus-Sans-font/EudoxusSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Eudoxus-Sans-font/EudoxusSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Eudoxus-Sans-font/EudoxusSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Eudoxus-Sans-font/EudoxusSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Eudoxus-Sans-font/EudoxusSans-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${eudoxus.variable} antialiased 
        max-w-6xl
      selection:bg-yblack
      selection:text-ywhite `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
