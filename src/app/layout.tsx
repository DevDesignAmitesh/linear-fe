import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Linear – The system for product development",
  description: "Purpose-built for planning and building products with AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full bg-neutral-950">
        <Header />
        <div className="mt-17" />
        <hr className="w-full bg-neutral-900 h-0.5" />
        <div className="w-full max-w-7xl mx-auto relative">
          {children}
        </div>
      </body>
    </html>
  );
}
