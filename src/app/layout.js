import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Mery",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
