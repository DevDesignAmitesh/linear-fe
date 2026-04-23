import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
