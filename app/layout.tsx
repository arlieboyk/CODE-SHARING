import "../styles/globals.css";
import Header from "../app/components/Header/page";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
