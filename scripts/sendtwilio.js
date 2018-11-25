const accountSid = 'ACd3153105e04575233d9ed18e4899323a';
const accountSid2 = 'AC307f83011f4e85c3b80560128a3ada18'
const authToken = 'ee64bf998e59b27fc07e9a7c1c4d4544';
const authToken2 = 'd51c1d548802903df37dd15b32f2d882'
//account2
const client = require('twilio')(accountSid2, authToken2);
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

  