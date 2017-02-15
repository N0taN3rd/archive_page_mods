const Nightmare = require('nightmare')
const nightmare = Nightmare({show: true,fullscreen:true})

nightmare
  .goto('http://www.cnn.com/')
  .screenshot('fukc.png')
  .end(() => console.log('done'))
