let jdUrl = require('./jdUrl.cjs')

console.log(JSON.stringify(jdUrl.app('genToken', {
  "to": "https%3a%2f%2fplogin.m.jd.com%2fjd-mlogin%2fstatic%2fhtml%2fappjmp_blank.html",
  "action": "to"
}, 'post', '1')))
