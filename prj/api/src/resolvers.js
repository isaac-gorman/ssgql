/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

const { default: userEvent } = require("@testing-library/user-event")

module.exports = {
  Query: {
    pets(_, {input}, ctx){
      return ctx.models.Pet.findMany(input)
    },
    pet(_, {input}, ctx){
      console.log("Query=> pet")
      return ctx.models.Pet.findOne(input)
    },
    user(_, {input}, ctx){
      console.log("1: Query => user")
      console.log("1: Input =>", input)
      return  ctx.models.User.findOne(input)
    }

  },
  Mutation: {
    newPet(_, {input}, ctx){
      const pet = ctx.models.Pet.create(input)
      return pet
    }
  },
  Pet: {
    owner(pet, __, ctx){
      console.log("PET => owner", pet)
      const owner = ctx.models.User.findOne()
      return owner
    }
  },
  User: {
    pets(user, __, ctx){
      console.log("2: Query => user")
      console.log("2: Input =>", user)
      const pets = ctx.models.Pet.findMany()
      return pets
    },
    
  }
}
