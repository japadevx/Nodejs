// try{
//    //instução de demora pra acontecer
// }catch(error){
//     console.log(error)
// }
const b = "10"
if(!Number.isInteger(b)){
    //return 
    throw new Error('o valor de b não for um valor inteiro')
}
console.log('resto do código')