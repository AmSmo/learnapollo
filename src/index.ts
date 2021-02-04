import {MikroORM} from "@mikro-orm/core"
import { __prod__ } from './constants'
import "reflect-metadata"
import microConfig from "./mikro-orm.config"
import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql'
import { DoggoResolver } from "./resolvers/doggo"
import { UserResolver } from "./resolvers/user"


const main = async () => {
    const orm = await  MikroORM.init(microConfig);
    await orm.getMigrator().up()
    
    const app = express()

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [DoggoResolver, UserResolver],
            validate: false,
        
        }),
        context: () => ({em: orm.em})
    })

    apolloServer.applyMiddleware({app})

    app.get('/', (_,res) =>{
        res.send("POTATO")
    }) 
    app.listen(5000, () => {
        console.log('Server successfully created')
    })
}

main().catch(err => {
    console.error(err)
})