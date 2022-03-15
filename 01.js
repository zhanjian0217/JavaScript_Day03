const btn = document.querySelector("#btn")

//addEventListener 會同時存在聽取

btn.addEventListener("click", () => {
  console.log("yes");
})


btn.addEventListener("click", () => {
  console.log("no");
})

//侵入式

btn.onclick = function (){
  console.log("123");
}


btn.onclick = function (){
  console.log("456");
}
//後面會改掉蓋掉前面



// btn.onclick = 2    //no adunction




///////////////////////////////////////////////


//預設行為 preventDefault

const ln = document.querySelector("#link")


ln.addEventListener("click", (e) =>{
  e.preventDefault()
  console.log("hi");

})



document.addEventListener("contextmenu" , (e) => {
  e.preventDefault()
  console.log("不能按右鍵");
})