import type { Metadata } from "next";
import "./globals.css";
import { Host_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const inter = Host_Grotesk({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Systems Academy",
  description:
    "Stay ahead of the game with real-time live updates and expert picks for every NBA matchup. Gain the competitive edge you need to place smarter, more profitable bets.",
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
