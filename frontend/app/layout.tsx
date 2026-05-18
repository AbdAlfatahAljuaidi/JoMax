import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JoMaxSoft",
  description: "The bridge between complex data and simple decisions. Scalable ERP solutions, certified e-invoicing, and AI-driven architectures for leading enterprises",
  icons: {
    icon: "/icon.png", // سيقوم Next.js بالبحث عنه في المجلدات العامة
    apple: "/icon.png", // لأجهزة الآيفون عند حفظ الموقع على الشاشة الرئيسية
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
