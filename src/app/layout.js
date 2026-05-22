import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "sonner";
import localFont from "next/font/local";

const technor = localFont({
  src: [
    { path: "../../fonts/Technor-Extralight.woff2", weight: "200" },
    { path: "../../fonts/Technor-Light.woff2", weight: "300" },
    { path: "../../fonts/Technor-Regular.woff2", weight: "400" },
    { path: "../../fonts/Technor-Medium.woff2", weight: "500" },
    { path: "../../fonts/Technor-Semibold.woff2", weight: "600" },
    { path: "../../fonts/Technor-Bold.woff2", weight: "700" },
    { path: "../../fonts/Technor-Black.woff2", weight: "900" },
  ],
  variable: "--font-technor",
});

const supreme = localFont({
  src: [
    { path: "../../fonts/Supreme-Thin.woff2", weight: "100" },
    { path: "../../fonts/Supreme-Extralight.woff2", weight: "200" },
    { path: "../../fonts/Supreme-Light.woff2", weight: "300" },
    { path: "../../fonts/Supreme-Regular.woff2", weight: "400" },
    { path: "../../fonts/Supreme-Medium.woff2", weight: "500" },
    { path: "../../fonts/Supreme-Bold.woff2", weight: "700" },
    { path: "../../fonts/Supreme-Extrabold.woff2", weight: "800" },
  ],
  variable: "--font-supreme",
});

export const metadata = {
  title: "StudyNook - Library Study Room Booking",
  description: "Book your perfect study space easily",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${technor.variable} ${supreme.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Providers>
          <Toaster richColors position="top-right" />
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
