const { gql } = require('apollo-server');

const typeDefs = gql`
    type Proyec {
        _id: ID!
        title: String!
        description: String!
        startDate: String!
        endDate: String!
        status: String!
        budget: Float!
        completed: Boolean!
    }

    type Query {
        proyec: [Proyec]!
    }

    type Mutation {
        createProyec(
            title: String!,
            description: String!,
            startDate: String!,
            endDate: String!,
            status: String!,
            budget: Float!
        ): Proyec!

        updateProyec(
            _id: ID!,
            completed: Boolean,
            title: String,
            description: String,
            startDate: String,
            endDate: String,
            status: String,
            budget: Float
        ): Proyec!

        deleteProyec(_id: ID!): Proyec!
    }
`;

module.exports = typeDefs;

