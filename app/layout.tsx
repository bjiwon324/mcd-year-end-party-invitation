import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const pretendard = localFont({
  src: "../public/fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  weight: "45 900",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "당신을 송년회에 초대합니다",
  description: "다른 크루한테 들키지말고 혼자만보세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body>{children}</body>
    </html>
  );
}
