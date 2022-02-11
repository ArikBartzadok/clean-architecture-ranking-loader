import { setupApolloServer } from '@/main/config/apollo-server'
import { setupRoutes } from '@/main/config/routes'

import express from 'express'

const app = express()

setupApolloServer(app)
  .then(server => console.log(`🚀 GraphQL Server ready at http://localhost:5000${server.graphqlPath}`))
  .catch(error => console.log(`🚦 Error ro ready GraphQL server: ${error.message}`))
setupRoutes(app)

export default app
