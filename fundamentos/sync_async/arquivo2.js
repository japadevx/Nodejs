const fs = require('node:fs')

console.log('start')

fs.writeFile('arquivo2.txt', 'ola', ()=>{
    setTimeout(()=>{
        console.log('arquivo criado')
    },3000)
})

console.log('end')
