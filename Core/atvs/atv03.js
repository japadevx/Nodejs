const os = require('node:os')

console.log((os.totalmem() / 1e+9).toFixed())//gigabyte
console.log((os.totalmem() / 1000).toFixed())//kilobyte
console.log((os.totalmem() / 1e+6).toFixed())//megabyte