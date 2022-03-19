


// const c = document.getElementById("cc")

// const c = document.querySelector("#cc")

// const c = document.querySelector("#list :nth-child(2)")
// console.log(c);


const d = document.querySelector("#list :last-child")
console.log(d);

const li = document.querySelector("#list :nth-child(2)")

li.textContent = "xx" 
// 把b 換成 xx



//////////////////////////////////////////////////////////////




const items1 = document.getElementsByClassName("item")
console.log(items1); //array-like 做成偽陣列
console.log(items1[0]); 
// 有key所以可以用中括號抓取 做成偽陣列所以可以用[]抓取

const items2 = document.querySelectorAll(".item")
console.log(items2); //array-like
console.log(items2[0])

items2.forEach((參數) => console.log(參數)) //印出每個 item


////////////////////////////////////////////////////////////

// const itemsss = document.querySelectorAll(".item")

// itemsss.forEach((item) => 
// item.textContent = item.textContent.repeat(5) // 讓每個字變成五倍長
// )

////////////////////////////////////////////////////////////

//      HTMLCollection vs NodeList
// node 會多出一些功能 EX 歷變for each

const t = document.querySelector("#hello")

t.textContent = "<h1>444</h1>"
// t.innerHTML = "<h1>444</h1>"

// t.style.color = "red"
t.style["color"] = "red"

t.style["background-color"] = "#fa0"





///////////////////////////////////////////////


// t.classList.add("hi")    // 新增class 名稱 

t.classList.remove("c")  // 減去class 名稱


const items = document.querySelectorAll(".item")


items.forEach((item) =>
  item.classList.add("hi")

)    ///全紅色


// const aaaaa = document.querySelectorAll(".item")   

                    //用索引值去找 135
items.forEach((item, index) =>{
  if (index % 2 == 0){
    item.classList.add("hi")    ///1 3 5 紅色
  }
})


///////////////////////////////////////////////////////////////


// 事件

// document 整份文件



// 參數1 動作   參數2 fn   

// 1. defer 延遲  2.script 標籤放到最後   

// 3. document.addEventListener("DOMContentLoaded" , function(){
// })  

const p = document.querySelector("#hello")
console.log(p);

p.addEventListener("click" , function(){
  console.log("點了");


})


// 高階函數
// Higher-Order Function
// 1. 可以接別的函數當參數／引數
// 2. 可以回傳一個函數

function a(){
  const b = function () {
    console.log(123);
  }
  return b
}

const cc = a()


// a()()() // undefined()     >not a function

// a() = b   所以 a()()  //b()

console.log(cc);


///////////////////////////////////////////////////////////

//fn 在 JS 是 「一般公民」

const h = document.querySelector("#hello")

const hey = function () {
  console.log("點了");
}
// 外面先設定函數
                        //帶到參數裡
h.addEventListener("click", hey)