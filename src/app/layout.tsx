import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prezso Labs - AI Productivity",
  description: "Supercharge Your Team's Productivity with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://code.iconify.design/3/3.1.0/iconify.min.js" async></script>
      </head>
      <body className="bg-[#030304] text-slate-400 antialiased selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
