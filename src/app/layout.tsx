import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "./component/ui/Navbar";
import { Footer } from "./component/ui/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ระบบสมัครเข้าศึกษา TCAS69 | พอร์ตโฟลิโอออนไลน์",
  description: "แพลตฟอร์มสำหรับการจัดการใบสมัครเข้าศึกษาต่อในระดับมหาวิทยาลัย ระบบ Portfolio ที่ทันสมัยและใช้งานง่าย สำหรับ TCAS รอบที่ 1-4",
  keywords: "TCAS, สมัครเข้าศึกษา, พอร์ตโฟลิโอ, มหาวิทยาลัย, ใบสมัคร, การศึกษา",
  authors: [{ name: "Computer Science Department" }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "ระบบสมัครเข้าศึกษา TCAS69",
    description: "แพลตฟอร์มสำหรับการจัดการใบสมัครเข้าศึกษาต่อในระดับมหาวิทยาลัย",
    type: "website",
    locale: "th_TH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer txt="2025 Computer Science"/>
      </body>
    </html>
  );
}
