import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "X.com",
  description: "Clone of x.com!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleOAuthProvider clientId="1013399091835-rp8j3j1ihljvuk2u0krs2l75b01lsfsc.apps.googleusercontent.com">
      <html lang="en">
        <body className={`${roboto.className}  antialiased`}>
          {children}
          <Toaster />
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
