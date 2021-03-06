const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema')
const resolver = require('./graphql/resolver')
const keys = require('./config/keys')
const app = express()

app.use(cors())

app.use(graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true
}))

mongoose.connect(keys.mongoURI, { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
})
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error))

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


module.exports = app