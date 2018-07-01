const CronJob = require('cron').CronJob
const InstaModule = require('./insta')
const Insta = new InstaModule()

// CRONJOB EXPLORE
let time1 = '0 */10 * * * *'
Insta.explore()

// new CronJob(time1, () => {
//     console.log("Started instalike : ", new Date())
//     explore()
// }, null, true, 'Asia/Jakarta')