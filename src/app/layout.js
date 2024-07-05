import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
