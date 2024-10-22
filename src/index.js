const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/proyecSchema');
const resolvers = require('./resolvers/proyecResolver');

const startServer = async () => {
    await mongoose.connect('mongodb+srv://adramirezga:Tormenta@servicioweb.sotvo.mongodb.net/');
    const server = new 
    ApolloServer({ typeDefs, resolvers });

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });
};

startServer();
