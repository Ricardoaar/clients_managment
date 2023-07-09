const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./graphql/schemas");
const { resolvers } = require("./graphql/resolvers");


const { connectDB } = require("./lib/mongoose");

connectDB();

const server = new ApolloServer({
  typeDefs, resolvers, context: ({ req }) => {
    return {
      name: "RUn"
    };
  }
});

server.listen().then(({ url }) => {
  console.log("Server running at port 4000");

});




