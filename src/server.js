const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

mongoose.connect(
    'mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
}
)

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
})


server.start(() => console.log(`The server is running on http://localhost:4000`))