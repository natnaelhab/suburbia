import type { Metadata } from "next";
import { Bowlby_One_SC, DM_Sans } from "next/font/google";
import "./globals.css";
import { SVGFilters } from "@/components/SVGFilters";
import { createClient } from "@/prismicio";

const Bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  variable: "--font-bowlby-sc",
  display: "swap",
  weight: "400",
});

const DMMono = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: "400",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");
  return {
    title: settings.data.site_title,
    description: settings.data.meta_description,
    openGraph: {
      images: settings.data.fallback_og_image.url ?? undefined,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Bowlby.variable} ${DMMono.variable} antialiased font-mono font-medium text-zinc-800`}
      >
        <main>{children}</main>
        <SVGFilters />
      </body>
    </html>
  );
}
