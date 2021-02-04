import { Doggo } from '../entities/Doggo'
import { MyContext } from '../types'
import { Resolver, Query, Ctx, Int, Arg } from 'type-graphql'

@Resolver()
export class DoggoResolver {
    @Query(()=> [Doggo])
    dogs(
        @Ctx() {em}: MyContext): Promise<Doggo[]> {
        return em.find(Doggo, {})
    }

    @Query(()=> Doggo, {nullable: true})
    dog(
        @Arg('id', ()=> Int) id: number,
       @Ctx() {em}: MyContext): Promise<Doggo | null> {
        return em.findOne(Doggo, { id })
    }
} 