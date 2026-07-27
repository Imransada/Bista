import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bilalsadatravels.com"),

  title: {
    default: "Bilal Sada Travelling Agency | Global Travel & Tour Experts",
    template: "%s | Bilal Sada Travelling Agency",
  },

  description:
    "Bilal Sada Travelling Agency is your trusted partner for international travel, visa assistance, flight booking, and unforgettable tour experiences across the globe.",

  keywords: [
    "Bilal Sada Travels",
    "travel agency",
    "international travel",
    "visa assistance",
    "flight booking",
    "tour packages",
    "Hajj and Umrah travel",
    "holiday packages",
    "cheap flights",
    "travel services",
  ],

  authors: [{ name: "Bilal Sada Travelling Agency" }],
  creator: "Bilal Sada Travelling Agency",
  publisher: "Bilal Sada Travelling Agency",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://bilalsadatravels.com",
    title: "Bilal Sada Travelling Agency | Explore the World with Confidence",
    description:
      "Book flights, get visa support, and discover unforgettable travel experiences with Bilal Sada Travelling Agency.",
    siteName: "Bilal Sada Travelling Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bilal Sada Travelling Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bilal Sada Travelling Agency",
    description:
      "Your trusted partner in creating unforgettable travel experiences around the globe.",
    images: ["/og-image.jpg"],
  },

  category: "Travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Nigeria" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://bilalsadatravels.com" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}