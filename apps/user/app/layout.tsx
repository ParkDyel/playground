import type { Metadata } from "next";
import "./globals.css"  //or import 'tailwindcss/tailwind.css'

import "@repo/ui/styles.css";

export const metadata: Metadata = {
  title: "Playground",
  description: "회사에서는 하지 못하는 맘대로 코드 써보기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}
