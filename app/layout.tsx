import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Car Hub",
  description: "Suited to provide you ranges of premium cars to choose from",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className="relative">

        <Navbar/>
        {children}
        <Footer/>
        
      </body>
      
    </html>
  );
}
