import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'The Pizza House & Donair | Unforgettable Flavor',
  description: 'Small-town favorite serving unexpectedly incredible pizza and savory donair. The spot you never expect, the flavor you never forget.',
  keywords: ["pizza, donair, restaurant, small town, takeout, local food, gourmet, fresh ingredients, order online"],
  openGraph: {
    "title": "The Pizza House & Donair | Unforgettable Flavor",
    "description": "Small-town favorite serving unexpectedly incredible pizza and savory donair.",
    "url": "https://www.thepizzahousedonair.com",
    "siteName": "The Pizza House & Donair",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/close-up-delicious-slice-pizza_23-2149232896.jpg",
        "alt": "Cinematic pizza and donair"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "The Pizza House & Donair | Unforgettable Flavor",
    "description": "Small-town favorite serving unexpectedly incredible pizza and savory donair.",
    "images": [
      "http://img.b2bpic.net/free-photo/close-up-delicious-slice-pizza_23-2149232896.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
