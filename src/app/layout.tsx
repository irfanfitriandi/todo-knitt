"use client";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/utils/redux/store";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
