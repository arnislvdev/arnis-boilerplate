/**
 * Root Layout Component
 * 
 * This is the root layout that wraps all pages in the application.
 * It sets up fonts, themes, and the basic HTML structure.
 */

import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

import Footer from "@/layouts/footer";

// Configure Geist Sans font for modern typography
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure Geist Mono font for code blocks and monospace text
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata for the application
export const metadata: Metadata = {
  title: "Arnis Boilerplate",
  description: "This is a boilerplate made for Shadcn/UI and Next.js",
};

/**
 * RootLayout Component
 * 
 * @param children - The page content to be rendered
 * @returns The complete HTML structure with theme provider and footer
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased flex flex-col`}
        suppressHydrationWarning
      >
        
        {/* Theme provider for dark/light mode support */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          {/* Main content area that grows to fill available space */}
          <main className="flex-1">
            {children}
          </main>

          <Footer />

        </ThemeProvider>
      </body>
    </html>
  )
}
