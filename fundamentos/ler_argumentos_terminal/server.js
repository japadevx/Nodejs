const minist = require('minimist')
const args = minist(process.argv.slice(2))
console.log(args)
const nome = args['nome']
const idade = args['idade']
console.log(`Nome${nome} e idade ${idade}anos`)