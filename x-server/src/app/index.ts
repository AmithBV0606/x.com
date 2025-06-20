import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { User } from "./users";
import cors from "cors";
import DecodeJWT from "../services/decodeJWT";
import { GraphqlContext } from "../types";

export async function initServer() {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  // Graphql DEMO :

  // const graphqlServer = new ApolloServer({
  //   typeDefs: `
  //     type Query {
  //       sayHello: String
  //       greet(name: String!): String
  //     }
  //   `,
  //   resolvers: {
  //     Query: {
  //       sayHello: () => "Hello from Graphql server!!!",
  //       greet: (parent, { name }: { name: string }) => `Good morning ${name}`
  //     },
  //   },
  // });

  const graphqlServer = new ApolloServer<GraphqlContext>({
    typeDefs: `#graphql

      ${User.types}

      type Query {
        ${User.queries}
      }
    `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
    },
  });

  await graphqlServer.start();

  app.use(
    "/graphql",
    expressMiddleware(graphqlServer, {
      context: async ({ req, res }) => {
        return {
          user: req.headers.authorization
            ? DecodeJWT(req.headers.authorization.split('Bearer ')[1])
            : undefined,
        };
      },
    })
  );

  return app;
}
