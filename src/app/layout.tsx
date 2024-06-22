import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Impact",
  description: "Full maintenance for admission to TOP universities",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.className}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
      </head>
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
