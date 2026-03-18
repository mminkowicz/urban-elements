import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urbanelementsatlanta.com"),
  title: {
    default: "Urban Elements Atlanta | Premium Landscape Design & Maintenance",
    template: "%s | Urban Elements Atlanta"
  },
  description:
    "Licensed, insured, and owner-operated landscaping company in Atlanta. Specializing in premium landscape design, installation, hardscaping, and property maintenance.",
  keywords: [
    "landscaping Atlanta",
    "landscape design Atlanta",
    "hardscaping Atlanta",
    "outdoor living Atlanta",
    "property maintenance Atlanta",
    "lawn care Atlanta",
    "Urban Elements Atlanta",
    "landscape installation",
    "stone pavers Atlanta"
  ],
  authors: [{ name: "Urban Elements Atlanta" }],
  creator: "Urban Elements Atlanta",
  publisher: "Urban Elements Atlanta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Urban Elements Atlanta | Premium Landscape Design & Maintenance",
    description:
      "Artistry in every acre. Premium landscaping, hardscaping, and property maintenance services in Atlanta, GA.",
    url: "https://urbanelementsatlanta.com",
    siteName: "Urban Elements Atlanta",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Urban Elements Atlanta Landscaping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Elements Atlanta | Premium Landscape Design",
    description: "Artistry in every acre. Premium landscaping services in Atlanta, GA.",
    images: ["https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapeProfessional",
  "@id": "https://urbanelementsatlanta.com",
  name: "Urban Elements Atlanta",
  description:
    "Licensed, insured, and owner-operated landscaping company in Atlanta. Precision design, property care, and outdoor living.",
  url: "https://urbanelementsatlanta.com",
  telephone: "+1-404-555-0199",
  image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.749,
    longitude: -84.388,
  },
  areaServed: [
    { "@type": "City", name: "Atlanta" },
    { "@type": "City", name: "Decatur" },
    { "@type": "City", name: "Tucker" },
    { "@type": "City", name: "Chamblee" },
    { "@type": "City", name: "Avondale Estates" },
    { "@type": "Neighborhood", name: "Druid Hills" },
    { "@type": "Neighborhood", name: "Morningside" },
    { "@type": "Neighborhood", name: "Virginia Highland" },
    { "@type": "Neighborhood", name: "Poncey-Highland" },
    { "@type": "Neighborhood", name: "Brookhaven" }
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
