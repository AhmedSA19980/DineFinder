import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dinefinder.example"),

  title: {
    default: "DineFinder | Discover Restaurants",
    template: "%s | DineFinder",
  },

  description:
    "Discover restaurants, explore menus, read reviews, and reserve a table.",

  openGraph: {
    title: "DineFinder | Discover Restaurants",
    description:
      "Discover restaurants, explore menus, read reviews, and reserve a table.",
    url: "https://dinefinder.example",
    siteName: "DineFinder",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold">
              DineFinder
            </Link>

            <div className="flex gap-6">
              <Link href="/">Home</Link>

              <Link href="/restaurants">Restaurants</Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
