var initialTime = Date.now();

console.log("start");
setTimeout(() => {
    console.log("In");
    var finalTime = Date.now();
    console.log(`time difference : ${finalTime - initialTime}`);
},1500);
console.log("End");