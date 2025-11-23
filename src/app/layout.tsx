import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "@/components/TransitionProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamad Abdolahi Portfolio App",
  description: "Front end developer portfolio app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="" lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            if (
              localStorage.theme === 'dark' ||
              (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} overflow-x-hidden bg-stone-50 text-gray-900 transition-colors duration-200 dark:bg-black`}
      >
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
