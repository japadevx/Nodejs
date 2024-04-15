const colors = require('colors')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            name:'p1',
            message:'qual a primeira nota'
        },
        {
            name:"p2",
            message:'qual a segunda nota'
        }
    ])
    .then((answers)=>{
        console.log(answers);
        const media = ((Number(answers.p1)+ Number(answers.p2))/ 2).toFixed(2)
        if ( media >= 6) {
            if ( (answers.p1 >= 0 && answers.p1 <= 10) && (answers.p2 >= 0 && answers.p2 <= 10)) {
                console.log(`Voce foi aprovado: ${media}` .bgGreen) 
            }
            console.log('Tente novamente, pois os números não podem ser nem abaixo de 0 ou acima de 10')
        } else {
            console.log(`Voce foi reprovado!` .rainbow)
        } 
    })
    .catch();