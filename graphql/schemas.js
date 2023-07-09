const { gql } = require("apollo-server");
const typeDefs = gql`
    type Query {
        hello: String
    }

    type User {
        id: ID
        name: String
        lastName: String
        email: String
        createdAt: String
    }

    type Mutation {
        createUser(name: String!, lastName: String!, email: String!, password: String!) : User
    }
`;

module.exports = { typeDefs };
