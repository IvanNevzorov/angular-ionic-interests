const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User { 
    _id: ID! 
    firstName: String!
    secondName: String!
    city: String
    email: String!
    password: String!
  }

  type Interest {  
    _id: ID!  
    title: String!
    description: String!
    category: String
    type: String!
    user: ID!
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

  input InterestInput {  
    title: String!
    description: String!
    category: String
    type: String!
    user: ID!
  }

  type Query {
    login(login: LoginInput!): User
    getInterests(id: ID!): [Interest]!
  }

  type Mutation {
    register(user: UserInput!): User
    createInterest(interest: InterestInput!): Boolean!
    deleteInterest(id: ID!): Boolean!
  }
`);
