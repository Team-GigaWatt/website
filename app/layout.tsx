import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Gigawatt",
  description: "Team Gigawatt is a Formula student team from BITS Goa",
  icons: {
    icon: "/gigawatt-logo.png",
    apple: "/gigawatt-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/gigawatt-logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full bg-gw-white text-gw-black antialiased">
        {children}
      </body>
    </html>
  );
}
