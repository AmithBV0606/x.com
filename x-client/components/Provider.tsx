"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId="1013399091835-q1mit2g8oh5dsesr5p02qr6g5i0ijsd0.apps.googleusercontent.com">
        {children}
        <Toaster />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}
