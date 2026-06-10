import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MIT & MITM Farewell 2026",
  description: "Official Information Portal for MIT & MITM B.Tech Batch 2026 Farewell Celebration.",
  keywords: ["MIT Farewell 2026", "MITM Farewell 2026", "B.Tech Batch 2026", "Mahakal Institute of Technology", "Farewell Party", "Ujjain"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#03000a] text-slate-100 overflow-x-hidden selection:bg-purple-600/30 selection:text-yellow-400">
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
