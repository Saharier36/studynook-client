import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "StudyNook - Library Study Room Booking",
  description: "Book your perfect study space easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=technor@400,500,600,700&f[]=supreme@400,500,700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
