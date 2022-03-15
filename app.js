// filter

const lmmm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(list.filter((x)=> x > 3))

console.log(lmmm.filter((x)=> x % 2 == 1))


//let new = list.filter(function(x){
//   return x % 2 == 1
// })

// console.log(new);

//////////////////////////////////////////////////////

const list = [1, 2, 3, 4, 5]

// let a = list.reduce((acc, cur) => acc + cur)

let a = list.reduce(function(acc , cv){
  console.log(acc , cv);
  return acc + cv
}, )  //跑四圈



let b = list.reduce(function(acc , cv){
  console.log(acc , cv);
  return acc + cv
}, 0)  //跑五圈

// console.log(a);

//acc 若沒有預設的，話會搶第一個元素做累加值 導致少跑一圈


const list1 = [19, 23, 3, 2, 24 , 1 , 60]

let x = list1.reduce(function(acc, cv){
  console.log("acc=" , acc , "cv=" ,cv);
  if (cv > acc) {
    return cv
  }
  return acc
})

console.log(x);

/////////////////////////////////////////////////////////////

//object 物件

const cat = {
  age: 18,
  name: "an",
  attack: function () {
    console.log("gogo!");
  }
}

cat.attack()
// cat.age()     // not a function


cat.whatever = 1  //增加屬性 可以隨時增加
console.log(cat);


delete cat.age //移除屬性
console.log(cat);


cat.name = "asdasdadasdada" //改變屬性


console.log(cat.age);
console.log(cat.name);
console.log(cat["age"]);






/////////////////////////////////////////////////////////////

// DOM  => Document Object Model 文件物件模型
// js 抓到 DOM 並操作它
















