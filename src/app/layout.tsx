import type { Metadata } from "next";

import "@/styles/globals.css";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Aleko Sokurashvili",
  description: "Секреты Вирусных Видео",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
