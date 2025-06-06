"use client";

import React, { useCallback } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

export default function RightSidebar() {
  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {},
  []);

  return (
    <div className="border border-gray-600 rounded-lg mt-5 ml-5 p-5">
      <h1 className="text-xl font-bold text-gray-300">New to X?</h1>

      <p className="text-gray-400 my-2">
        Signup and start sharing your thoughts!!.
      </p>

      <GoogleLogin onSuccess={(cred) => console.log(cred)} />
    </div>
  );
}