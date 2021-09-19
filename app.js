require("dotenv").config();

const personalPhoneNumber = process.env.YOUR_PHONE_NUMBER.toString();
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER.toString();

// sanity check
console.log(personalPhoneNumber);
console.log(twilioPhoneNumber);

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// just making sure it works u k
function logStuff(twilioResponse = null){
  if (twilioResponse !== null){
    console.log(twilioResponse.status);
    console.log(twilioResponse.error_code);
    console.log(twilioResponse.error_message);
  }
}

// ctrl+c + ctrl+v via Twilio
client.messages
      .create({
         body: 'Twilio test message - success!',
         from: twilioPhoneNumber,
         statusCallback: 'http://postb.in/1234abcd',
         to: personalPhoneNumber
       })
      .then(message => logStuff(message));

// Example JSON response
// {
//   "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//   "api_version": "2010-04-01",
//   "body": "McAvoy or Stewart? These timelines can get so confusing.",
//   "date_created": "Thu, 30 Jul 2015 20:12:31 +0000",
//   "date_sent": "Thu, 30 Jul 2015 20:12:33 +0000",
//   "date_updated": "Thu, 30 Jul 2015 20:12:33 +0000",
//   "direction": "outbound-api",
//   "error_code": null,
//   "error_message": null,
//   "from": "+15017122661",
//   "messaging_service_sid": "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//   "num_media": "0",
//   "num_segments": "1",
//   "price": null,
//   "price_unit": null,
//   "sid": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//   "status": "sent",
//   "subresource_uris": {
//     "media": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json"
//   },
//   "to": "+15558675310",
//   "uri": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json"
// }