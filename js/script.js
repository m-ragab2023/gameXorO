let contain_rule  = document.querySelector(".contain-rule")
let title = document.querySelector(".title")
let contain_row = document.querySelector(".contain-row")
let array_item =[]


function ShortHandwin(num1 , num2 , num3){
       title.innerHTML=`${array_item[num3]} is Winner `
           document.getElementById("item"+num1).style.background = "#000"
           document.getElementById("item"+num2).style.background = "#000"
           document.getElementById("item"+num3).style.background = "#000"
           setInterval(() => {
              title.innerHTML += `.`
           }, 1000);
           setTimeout(function(){
                 window.location.reload()
           },4000)
}
// get Winner func 
function getWinner(){
   for(let i =1 ; i <=9 ; i++){
      array_item[i] =document.getElementById("item"+ i).innerHTML;
   }
   if(array_item[1]==array_item[2]&& array_item[2]==array_item[3] && array_item[1]!=""){
         ShortHandwin(1,2,3)
   }else if(array_item[4]==array_item[5]&& array_item[5]==array_item[6] && array_item[5]!=""){
            ShortHandwin(4,5,6)
   }else if(array_item[7]==array_item[8]&& array_item[7]==array_item[9] && array_item[7]!=""){
             ShortHandwin(7,8,9)
   }else if(array_item[1]==array_item[4] && array_item[4]==array_item[7] && array_item[4]!=""){
            ShortHandwin(1,4,7)
   }else if(array_item[2]==array_item[5]&& array_item[2]==array_item[8] && array_item[2]!=""){
            ShortHandwin(2,5,8)
   }else if(array_item[3]==array_item[6]&& array_item[6]==array_item[9] && array_item[3]!=""){
             ShortHandwin(3,6,9)
   }else if(array_item[1]==array_item[5]&& array_item[5]==array_item[9] && array_item[1]!=""){
             ShortHandwin(1,5,9)
   }else if(array_item[3]==array_item[5]&& array_item[3]==array_item[7] && array_item[7]!=""){
           ShortHandwin(3,5,7)
   }
}

// replace rule
 let  rule = "X";
function rule_game(id){
    let ele = document.getElementById(id)
    if(rule==="X" && ele.innerHTML ==""){
         ele.innerHTML ="X"
         rule = "O"
         title.innerHTML = "O"
    }else if(rule==="O" && ele.innerHTML ===""){
        ele.innerHTML ="O"
         rule = "X"
         title.innerHTML = "X"  
    }
    getWinner()
}
