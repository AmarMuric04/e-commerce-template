import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { StoreProvider } from "@/lib/store";
import { SessionProvider } from "@/components/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ModernShop - Premium Fashion & Lifestyle",
  description: "Discover curated fashion for the modern lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > 
          <SessionProvider>
            <StoreProvider>{children}</StoreProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
