const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 7000

app.use(cors())

let rappers = {
   '21 savage': {
      'age': 28,
      'motherName': 'iya emma',
      'favFood': 'Amala'
   },
   'chance the rapper': {
      'age': 27,
      'motherName': 'iya feyi',
      'favFood': 'Eba'
   },
   'unknown': {
      'age': 0,
      'motherName': 'Unknown',
      'favFood': 'Unknown'
   }
}


app.get('/', (request, response) => {
   response.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (request, response) => {
   const rapName = request.params.rapperName.toLowerCase()
   console.log(rapName);
   if(rappers[rapName]){
      response.json(rappers[rapName])
   }else {
      response.json(rappers['unknown'])
   }
   
})

app.listen(PORT, ()=>{
   console.log(`Server running on post ${PORT}`);
})