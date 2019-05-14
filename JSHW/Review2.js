var food = [
    'Pizza', 
    'Mango',
    'Ice cream', 
    'Watermelon'
]; 

food.forEach(element => {
     
    console.log(element); 
    console.log('loop'); 
}); 



for(var i = 0; i < food.length; i++) {
    console.log(i);
    var x = food[i];
    console.log(x); 
}


var food2 = food.map (item  => {
    return item + 'Watermelon';
}); 

console.log(food2);



var food3 = food.filter(item => {
    return item.length > 3; 

}); 
console.log(food3); 