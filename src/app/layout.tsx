import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Your ad",
  description: "Studastic posting screen prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} font-sans`}>{children}</body>
    </html>
  );
}
