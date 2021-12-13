const connectToMongo=require('./db')
connectToMongo()
const cors=require('cors')

const express = require('express')
const app = express()
const port = 5000
 
app.use(cors())

 
// Middleware 
// What is Middleware? It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.
app.use(express.json())

//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
// app.use('/api/starNotes', require('./routes/starNotes'))

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})