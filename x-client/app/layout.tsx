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
    <GoogleOAuthProvider clientId="1013399091835-q1mit2g8oh5dsesr5p02qr6g5i0ijsd0.apps.googleusercontent.com">
      <html lang="en">
        <body className={`${roboto.className}  antialiased`}>
          {children}
          <Toaster />
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
