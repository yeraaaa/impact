import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Impact",
  description: "Full support for admission to TOP universities",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={montserrat.className}>
        <head />
        <body>
          
            <Header />
            <div>{children}</div>
            <Footer />
        </body>
      </html>
    </>
  );
}
