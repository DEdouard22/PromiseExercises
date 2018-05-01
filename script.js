//Part 1
var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];

var getDogImage = $.get('https://dog.ceo/api/breeds/image/random');
/*
getDogImage
    .then(function(){
        $.get(urls[0]);
        console.log("data was fetched!");
    })
    .then(function(){
        $.get(urls[1]);
        console.log("data was fetched!");
    })
    .then(function(){
        $.get(urls[2]);
        console.log("data was fetched!");
    })
    .then(function(){
        $.get(urls[3]);
        console.log("data was fetched!");
    })
    .then(function(){
        $.get(urls[4]);
        console.log("data was fetched!");
    });
*/

//Part 2

let promise1 = $.get(urls[0]);
let promise2 = $.get(urls[1]);
let promise3 = $.get(urls[2]);
let promise4 = $.get(urls[3]);
let promise5 = $.get(urls[4]);
Promise.all([promise1, promise2, promise3, promise4, promise5]).then(function(response){
    console.log(response);
    console.log("all the data was fetched");
});

//Part 3
function addNumbers(x, y) {
    return new Promise(function (resolve, reject){
        if ((!isNaN(x)) && (!isNaN(y))){
            let answer = x + y;
            resolve(answer);
        }
        else {
            reject(error);
        }       
    })
}
//addNumbers(2,3);


addNumbers(2, 5)
   .then(function (answer) {  
    console.log(answer);
   })
   .catch(function (error) {
      console.log(error);
    });

//Part 4
/*
let dropButteredToastOnFloor = (success, failure) => {
    let drop = Math.random();
    if (drop < 0.5) {
        console.log("Landed butter-side up!");
        success();
    } else {
        console.log("Landed butter-side down...");
        failure();
    }
}
*/

function dropToastPromisified() {
    return new Promise((resolve, reject) => {
        let drop = Math.random();
        if (drop < 0.5) {
            console.log("Landed butter-side up!");
            resolve();
        } else {
            console.log("Landed butter-side down...");
            reject();
        }
 })
     return p;
 }

dropToastPromisified()
.then(() => {
   alert('Whew, that was close!');
}).catch(() => {
   alert('Well shucks, there goes my toast...');
});