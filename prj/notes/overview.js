// Overview: 
// - - How do I set up a GraphQL API? What are its basic components? 

// 1) Type Definitions
// - - Consist of Fields and Scalars
// 2) Querys
// - - Consist of Fields that you can call to that return a spcified Type. 
// - - Used to get information. 
// 3) Mutations
// - - Used to CUD Create, Update, Delete data. 
// Querys/Mutations Can take inputs that are used to filter what data you want to to CRUD
// 4) Resolvers
// - - Used to actually resolve the request. 
// - - Resolvers can take 4 possible arguments that are used to help you maninpualte the data you want. Often uses input, and models arguments in order to access the input value, and models to use specific databases queries to access data on the input. Models are usually passed through your server
// 5) Server to run the API
// - - The server in our example is an Apollo server that takes in all the schemas values, types, querys, muatation, and database queries 
// 6) Schema to hold querying info 
// - - The schema is the file that stores (compiles) your Types, Querys, Mutations, Inputs. 

// 7) The database: In this example I am using a in memory example of a database that has 3 parts
// - - a. The actuall database that holds the data
// - - b. Query functions that can prefom certain operation on the data in my database
// - - c. A base index.js that complies the database and exports my database using "lowdb" to make and in memory db, and imports my pet and user models and passes the database as an argument to them and exports them as a module so my API can access them.
// - - - I eventually pass the database and operations exports to my API's server