import axios from "axios";
import { GoogleTokenResult, GraphqlContext } from "../../types/index";
import { prismaClient } from "../../client/db";
import generateTokenForUser from "../../services/jwt";

const queries = {
  verifyGoogleToken: async (parent: any, { token }: { token: string }) => {
    const googleToken = token;
    const googleOauthURL = new URL("https://oauth2.googleapis.com/tokeninfo");
    googleOauthURL.searchParams.set("id_token", googleToken);

    const { data } = await axios.get<GoogleTokenResult>(
      googleOauthURL.toString(),
      {
        responseType: "json",
      }
    );

    // console.log(data);

    // Check if the user is already present in our database or not.
    const user = await prismaClient.user.findUnique({
      where: {
        email: data.email,
      },
    });

    // If there is no such user found, create an entry of that user in our database
    if (!user) {
      const newUser = await prismaClient.user.create({
        data: {
          firstName: data.given_name,
          lastName: data.family_name,
          email: data.email,
          profileImageURL: data.picture,
        },
      });

      const jwtToken = await generateTokenForUser(newUser);
      return jwtToken;
    }

    const jwtToken = await generateTokenForUser(user);
    return jwtToken;
  },

  getCurrentUser: async (parent: any, args: any, ctx: GraphqlContext) => {
    // console.log(ctx);
    const user = await ctx.user;

    if (!user?.id) {
      return null;
    }

    const userExists = await prismaClient.user.findUnique({
      where: { id: user.id },
    });

    return userExists;
  },
};

export const resolvers = { queries };
