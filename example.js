const BulkSMS = require('./')
const SMS = new BulkSMS('[USER]', '[PASSWORD]', '[NUMBER]')
SMS.send('Hi!', (err, result) => {
  if (err)
    return console.error(err)

  console.log(result)
})