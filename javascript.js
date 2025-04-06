
// // // pic 1 id
// let food1s = document.getElementById('food1');
// // // pic 2 id
// let food2s = document.getElementById('food2');
// // // mainsection pic id
// let foods = document.getElementById('food');
// // // js function here
// // // food 1 click so in mainsection food 1 pic appear
// food1s.addEventListener('click',()=>{
//     foods.style.backgroundImage="url('food1.png')";
// })
// / // food 2 click so in mainsection food 2 pic appear
// food2s.addEventListener('click',()=>{
//     foods.style.backgroundImage="url('food2.jpg')";
// })

let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let foods = document.getElementById('food');
food1s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('food1.png')";
});

food2s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('food2.jpg')";
});