import { Doggo } from '../entities/Doggo'
import { MyContext } from '../types'
import { Resolver, Query, Ctx, Int, Arg, Mutation } from 'type-graphql'

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

    @Mutation(()=> Doggo, {nullable: true})
      async createDog(
          @Arg('name', ()=> String ) name: string,
          @Ctx() {em}: MyContext): Promise<Doggo> {
          const dog= em.create(Doggo, { name })
          await em.persistAndFlush(dog)
          return dog

        } 
    @Mutation(()=> Doggo, {nullable: true})
      async updateDog(
          @Arg('id', ()=> Int ) id: number,
          @Arg('name', ()=> String ) name: string,
          @Ctx() {em}: MyContext): Promise<Doggo | null> {
          let dog = await em.findOne(Doggo, {id})
          if (dog){
          dog.name = name
          await em.persistAndFlush(dog)
          return dog
        }else{
            return null
        }
    } 

    @Mutation(()=> Boolean, {nullable: true})
    async deleteDog(
        @Arg('id', ()=> Int) id: number,
        @Ctx() {em}: MyContext
    ): Promise<boolean>{
        
    if (em.nativeDelete(Doggo, {id})){
        return true
    }else{
        return false
    }
    }
}