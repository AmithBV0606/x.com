import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";

export async function initServer() {
  const app = express();

  app.use(bodyParser.json());

  const graphqlServer = new ApolloServer({
    typeDefs: `
      type Query {
        sayHello: String
        greet(name: String!): String
      }
    `,
    resolvers: {
      Query: {
        sayHello: () => "Hello from Graphql server!!!",
        greet: (parent, { name }: { name: string }) => `Good morning ${name}`
      },
    },
  });

  await graphqlServer.start();

  app.use("/graphql", expressMiddleware(graphqlServer));

  return app;
}