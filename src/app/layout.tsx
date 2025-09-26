import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "@/components/TransitionProvider";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamad Abdolahi Portfolio App",
  description: "Front end developer portfolio app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} overflow-x-hidden bg-stone-50 text-gray-900 transition-colors duration-200 dark:bg-black`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TransitionProvider>{children}</TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
