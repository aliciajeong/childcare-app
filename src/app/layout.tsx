import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "호주 차일드케어 레퍼런스",
  description: "NQF, EYLF V2.0, NSW 법규, 시급표, 포트폴리오 가이드",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
