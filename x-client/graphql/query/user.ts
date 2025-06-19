import { graphql } from "../../gql";

export const verifyUserGoogleTokenQuery = graphql(`
  query verifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`
  query GetCurrentUser {
    getCurrentUser {
      id
      firstName
      lastName
      email
      profileImageURL
    }
  }
`);
