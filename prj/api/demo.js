const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')

const typeDefs = gql`

    enum ShoeType{
     JORDAN
     NIKE
     ADIDDAS
     TIMBERLANDS
    }

    enum ShoeSize{
     _10
     _11
     _12
     _13
     _14
    }

    type User {
        email: String!
        avatar: String!
        friends: [User]!
    }

    interface Shoe {
        brand: ShoeType!
        size: String
    }

    # Now I can write types that implement the interface
    type Sneaker implements Shoe {
        brand: ShoeType!
        size: String
        sport: String!
    }

    type Boot implements Shoe {
        brand: ShoeType!
        size: String!
        hasGrip: Boolean!
    }

    input ShoeInput{
        brand: ShoeType
        size: String
    }

    input NewShoeInput{
        brand: ShoeType!
        size: ShoeSize!
    }

    type Query {
        me: User!
        shoes(input: ShoeInput): [Shoe]!
    }

    type Mutation{
        newShoe(input: NewShoeInput!): Shoe!
    }

`

const resolvers ={
    Query: {
        me(){
         return{
            email: "yoda@me.com",
            avatar: "yoda.png",
            friends: []
         }
        },
        shoes(_, {input}){
            return[
                {
                brand: "NIKE",
                size: "12",
                sport: "basketball"
                }, 
                {
                brand: "TIMBERLANDS",
                size: "14",
                hasGrip: true
                }, 
                {
                brand: "NIKE",
                size: "14",
                hasGrip: true
                },
        ]
        }
    },
    Mutation: {
        newShoe(_, {input}){
            return input
        }
    },
    Shoe: {
        __resolveType(shoe){
              if(shoe.sport){
                  return 'Sneaker'
              } else {
                  return 'Boot'
              }
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen(4000)
    .then(()=> console.log('on port 4000'))
