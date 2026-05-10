import { Poppins, Sora, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Tent On Rent — Premium Event Setup & Rental Marketplace | Indore",
  description:
    "Book tents, wedding decorations, event planning, venue booking, DJ systems, catering & more instantly. Find trusted vendors in Indore. India's most premium event-tech marketplace.",
  keywords:
    "tent rental, wedding decoration, event planning, venue booking, Indore, wedding marketplace, tent on rent",
  openGraph: {
    title: "Tent On Rent — Premium Event Setup & Rental Marketplace",
    description:
      "India's most premium event-tech marketplace. Book tents, decor & events instantly.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${sora.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen noise-bg">{children}</body>
    </html>
  );
}
