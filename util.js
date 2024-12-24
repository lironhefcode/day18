function getRandomInt(min,max){
    return Math.floor(Math.random() * min) + max;
}

function getRandomColor(){
   return ('#'+ Math.floor(Math.random()*16777215).toString(16) )
}