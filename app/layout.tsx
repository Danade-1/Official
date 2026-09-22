import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Vessel — A Quiet Space for Your Sermon Notes & Spiritual Reflection",
  description: "Vessel is a beautiful, local-first digital sanctuary designed for gathering, organizing, and meditating on sermon notes, Bible studies, and prayer reflections. Available on Web, Windows & Android.",
  keywords: [
    "sermon notes app",
    "bible study app",
    "christian note taking",
    "devotional journal",
    "local-first notes",
    "scripture lookup",
    "vessel notes"
  ],
  authors: [{ name: "Vessel Team" }],
  openGraph: {
    title: "Vessel — A Quiet Space for Your Sermon Notes",
    description: "Capture, organize, and reflect on God's Word without distraction. Local-first speed, one-click scripture citation, and cross-platform sync.",
    type: "website",
    url: "https://github.com/Danade-1/Official",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vessel — A Quiet Space for Your Sermon Notes",
    description: "A distraction-free, local-first sanctuary for sermon notes, Bible studies, and spiritual devotion.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d10",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} data-theme="sage">
      <body className="min-h-screen flex flex-col bg-[#0b0d10] text-[#f1f3f6]">
        {children}
      </body>
    </html>
  );
}
