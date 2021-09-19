const express = require("express");
const app = express();
const data = require("./data.json");

let port = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send("Hello, World!");
})

app.get('/test', (req, res) => {
  res.send(data);
})

// app.post('/sms', (req, res) => {
  
//   console.log(res.body);
  
//   res.send("Successful retrival of body ", res.body);
// })

app.listen(port, () => {
  console.log("App is listening on port ", port);
})