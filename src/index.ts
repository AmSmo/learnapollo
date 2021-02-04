import {MikroORM} from "@mikro-orm/core"
import { __prod__ } from './constants'
// import {Doggo} from "./entities/Doggo"
import microConfig from "./mikro-orm.config"
import express from 'express'

const main = async () => {
    const orm = await  MikroORM.init(microConfig);
    await orm.getMigrator().up()


    const app = express()
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