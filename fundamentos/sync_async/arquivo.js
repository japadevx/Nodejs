//sincrona - statica
// file system

const fs = require('node:fs')

console.log('start')

fs.writeFileSync('arquivo1.txt', 'ola', ()=>{
    setTimeout(()=>{
        console.log('arquivo criado')
    },3000)
})

console.log('end')