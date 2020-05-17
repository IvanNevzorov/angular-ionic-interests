const {buildSchema} = require('graphql')

module.exports = buildSchema(`

  type User {    
    firstName: String!
    secondName: String!
    city: String
    email: String!
    password: String!
  }

  input UserInput {    
    firstName: String!
    secondName: String!
    city: String
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    login(login: LoginInput!): User!
  }

  type Mutation {
    register(user: UserInput!): User!
  }
`)