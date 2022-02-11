import resolvers from '@/main/graphql/resolvers'
import typeDefs from '@/main/graphql/type-defs'

import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'

export const setupApolloServer = async (app: Express): Promise<ApolloServer> => {
  const server = new ApolloServer({
    resolvers,
    typeDefs
  })
  await server.start()
  server.applyMiddleware({ app })
  return server
}

// doc: https://www.apollographql.com/docs/apollo-server/api/apollo-server/
