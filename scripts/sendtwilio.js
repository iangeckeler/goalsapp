const accountSid = require('../routes/constants').accountSid
const authToken = require('../routes/constants').authToken
//account
const client = require('twilio')(accountSid, authToken);
const twilioPhone = '+14422640754 '
const myPhone = '+17604207520'
const stakeHolder = '+17608140102'

const sendTwilio= (from,to,body) => {
  return new Promise((resolve,reject)=>{
    if (from==undefined||to==undefined) {
      reject('error,from or to number undefined')
    } else{
      client.messages.create({
       body: body,
       from: from,
       to: to
     }).then(message => {
      resolve(message.sid+'sent from '+from+' to '+to)
    }).catch(err=>{reject(err)})
    .done();
    }
  })
}


module.exports = {
    sendTwilio: sendTwilio,
    twilioPhone:twilioPhone,
    myPhone: myPhone,
    stakeHolder:stakeHolder
}

  