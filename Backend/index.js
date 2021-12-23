const connectToMongo=require('./db')
connectToMongo()
const cors=require('cors')
require('dotenv').config({path:'./.env'});

const express = require('express')
const app = express()
const port = 5000
const path=require('path')
 
app.use(cors())

 
// Middleware 
// What is Middleware? It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.
app.use(express.json())

//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
// serve static assets if in production
if (process.env.NODE_ENV ==='production') {
  // set static folder
  app.use(express.static(path.resolve('./Client/build')))
  app.get('/*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./Client/build','index.html'))
  })
  
}
app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})