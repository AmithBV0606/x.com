import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { User } from "./users";

export async function initServer() {
  const app = express();

  app.use(bodyParser.json());

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

  const graphqlServer = new ApolloServer({
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

  app.use("/graphql", expressMiddleware(graphqlServer));

  return app;
}
