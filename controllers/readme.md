# REST-API
Building a REST API  using NODE JS EXPRESS 

How to Build a Simple CRUD API using NodeJS, Express,

Introduction
CRUD stands for Create(Insert data to database), Read (Retrieve data from database), Update (Edit data from database), and Delete (delete data from database)

It is a popular design through which Web APIs interact with databases.Howbeit i did not connect the project with mongodb database.

Prerequisites
At least node 8.10 and npm >= 5.6
Working knowledge of nodeJS
JavaScript concepts like arrow functions, object destructuring, and async/await.
I am using VS Code editor

Create a new folder
Open your terminal and create a new folder and move into it.
mkdir crud-api-nodejs && cd crud-api-nodejs
Initialize npm. You can change the options or you can accept the default options.
npm init -y
Create an Express Server
Install Express and Mongoose or just express js, 
npm i express mongoose
Create server.js and open VS Code
touch server.js
code .
In ./server.js, add the following code
// Require express
const express = require('express')
// Initialize express
const app = express()
 const PORT=5000

 app.use(bodyParser.joson())

 app.listen(PORT, () =>console.log ('server ruuning on port": http://localhost:${PORT}));


// create a server
const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT  }`)
}
In the above code, we have,

Added express to our app
Initialized express
Added middleware to parse JSON and URL encoded data.
Started a server
Connect to database
In ./db.js
const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost:27017/bookDb'
mongoose.connect(dbURI, {useNewUrlParser:true})
// connect to database
const db = mongoose.connection
// if error
db.on("error", (err) => {
  console.error(`err: ${err}`)
})// if connected
db.on('connected', (err, res) => {
  console.log('Connected to database')
})```



Import `./db.js` to `./server.js`


```javascript
   const express= require('express')const app = express()
   const db = require('./db')
   ...