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
      <body className="relative overflow-x-hidden">
        <div className="lg:hidden absolute rounded-full bg-purple-300 blur-[120px] w-[184px] h-[173px] right-0 top-20 z-0" />

        <Header />
        <main className="overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
