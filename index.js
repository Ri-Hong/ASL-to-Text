const express = require("express");
const app = express();
let cors = require('cors')
const data = require("./data.json");
const http = require('http');

let port = process.env.PORT || 3001;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


function logStuff(twilioResponse = null){
  if (twilioResponse !== null){
    console.log(twilioResponse.status);
    console.log(twilioResponse.error_code);
    console.log(twilioResponse.error_message);
  }
}

app.get('/', (req, res) => {
  res.send("Hello, World!");
})

app.get('/test', (req, res) => {
  res.send(data);
})

app.post('/sms', (req, res) => {
  console.log(res.body);
  res.send("Successful retrival of body ", res.body);

  client.messages
      .create({
         body: res.body.message,
         from: process.env.TWILIO_PHONE_NUMBER,
         to: res.body.phoneNumber
       })
      .then(message => logStuff(message));
})

app.listen(port, () => {
  console.log("App is listening on port ", port);
})

