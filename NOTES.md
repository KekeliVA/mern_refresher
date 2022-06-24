FLOW OF OPERATIONS

- figure out dependencies
  - probably: nodemon, mongoose, env, express
- create simple server.js app.listen(PORT, () => console.log("Server started on ${PORT}"));
- config file contains
  - db.js => this is our mongoose connection, we also use newUrlParser in the second argument of our connection function
  - default.json => mongoURI
- express router => this is required if we want to have our routes in different files - this prevents spaghetti code in server.js
  - we break this up by resource
  - users
  - auth
  - profile
  - post
  * do not forget to export the router in every route file
- new collections or folders for groups of related requests (by resource)
  - this is definitely a good idea especially when we have auth things which I think you what to be encapsulated
  -
- in order to interact with the db, we need to create a model for each resource
  - naming conventions for models are uppercase
  - models contain a schema, which are properties we want a resource to have
