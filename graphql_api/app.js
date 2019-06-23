const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const port = 8700;
const app = express();

app.use('/graphql',expressGraphQL({
    schema,
    graphiql:true
}) )

app.listen(port, () => {
    console.log('running')
})