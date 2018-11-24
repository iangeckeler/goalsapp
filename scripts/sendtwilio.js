const accountSid = 'ACd3153105e04575233d9ed18e4899323a';
const authToken = 'ee64bf998e59b27fc07e9a7c1c4d4544';
const client = require('twilio')(accountSid, authToken);
const twilioPhone = '+14422640754 '
const myPhone = '+17604207520'
const stakeHolder = '+17608140102'

const sendTwilio= (from,to,body) => {
    client.messages
    .create({
     body: body,
     from: from,
     to: to
   })
  .then(message => {
    console.log(message.sid)
    console.log('sent from '+from)
  })
  .done();
}


module.exports = {
    sendTwilio: sendTwilio,
    twilioPhone:twilioPhone,
    myPhone: myPhone,
    stakeHolder:stakeHolder
}

  