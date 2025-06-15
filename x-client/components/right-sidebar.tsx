"use client";

import React, { useCallback } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";

export default function RightSidebar() {
  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      if (!googleToken) {
        return toast.error("Google token not found!!");
      }

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyUserGoogleTokenQuery,
        { token: googleToken }
      );

      toast.success("Verification successfull!!");
      // console.log(verifyGoogleToken);
      if (verifyGoogleToken) {
        window.localStorage.setItem("token", verifyGoogleToken)
      }
    },
    []
  );

  return (
    <div className="border border-gray-600 rounded-lg sm:mt-5 xl:ml-5 p-3 xl:w-[300px]">
      <h1 className="text-lg font-extrabold text-gray-300">New to X?</h1>

      <p className="text-gray-400 mb-2 text-sm">
        Signup and start sharing your thoughts!!.
      </p>

      <GoogleLogin onSuccess={handleLoginWithGoogle} />
    </div>
  );
}
