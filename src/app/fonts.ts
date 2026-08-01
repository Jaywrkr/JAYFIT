import localFont from "next/font/local";

export const geistMono = localFont({
  variable: "--font-geist-mono",
  display: "swap",
  src: [
    { path: "./fonts/GeistMono-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/GeistMono-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/GeistMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/GeistMono-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/GeistMono-Bold.ttf", weight: "700", style: "normal" },
  ],
});
