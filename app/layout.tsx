import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notion Habit Streak Tracker — Beautiful Habit Tracking for Notion Users",
  description: "Connect your Notion databases to visualize habit streaks, charts, and goal progress in a beautiful dashboard. $8/mo."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f4d4ac90-7da6-4867-9164-5fad8d8279b5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
