function numberToTWCurrency(amount) {

  const a = { 0:'零', 1:'壹', 2:'貳', 3:'參', 4:'肆', 5:'伍', 6:'陸', 7:'柒', 8:'捌', 9:'玖'}


  




}








// console.log(numberToTWCurrency(1450))    // 印出 壹仟肆佰伍拾圓整
console.log(numberToTWCurrency(817))     // 印出 捌佰壹拾柒圓整
// console.log(numberToTWCurrency(9527))    // 印出 玖仟伍佰貳拾柒圓整
// console.log(numberToTWCurrency(120000))  // 印出 壹拾貳萬圓整
// console.log(numberToTWCurrency(1000001)) // 印出 壹佰萬零壹圓整








// let TW = ['零', '壹', '貳', '參', '肆', '伍', '陸', '柒', '捌', '玖']
//   // let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//   thousand = Math.floor(amount / 1000)
//   hundred = Math.floor((amount - (thousand *1000)) / 100)
//   ten = Math.floor((amount - (thousand *1000)- (hundred *100)) / 10)
//   one = Math.floor(amount - (thousand *1000)- (hundred *100) - (ten *10))



//   function transform(money) {
//     if (money > 0) {
//       return money
//     }else
//     return " "
//   }

//   return TW[transform(thousand)] + TW[hundred] + TW[ten]+TW[one]








  // console.log (String(amount).split(``))  ;

//   array = String(amount).split(``)
//   // console.log(array);

//   a = array.map((x)=> {
//     return parseInt(x, 10);
//   }) 

//   let TW = ['零', '壹', '貳', '參', '肆', '伍', '陸', '柒', '捌', '玖']
  
//   b = a.map((y) => {
//     return TW[y]
//   })
//   console.log(b);
// }