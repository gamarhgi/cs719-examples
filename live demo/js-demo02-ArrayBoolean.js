// let age = 99;

// if (age > 18 && age <= 99) {
//     console.log("User is within age range!");
// } else if (age < 18) {
//     console.log("User is not an adult!");
// } else {
//     console.log("User very old!");
// }


// // EXAMPLE 02 ########################################################
// let counter = 0;

// while (counter <= 10) {
//     console.log(counter);
//     counter++;
// }

// EXAMPLE 03 ########################################################
// for (let i = 0; i <= 10; i++){

// }


// ############## HOW TO SET AN ARRAY ####################################
// let testArray = [3, 2, 1, "0", true, null, "potato"];

// testArray[5] = "carrot";

// console.log(testArray[5]);

let testArray = ["January", "February", "March", "April"];

testArray.forEach(function(month, index) {
    console.log(index + ": " + month);
})

// ##### OR USE ARROW #####################################
testArray.forEach((month, index) => {
    console.log(index + ": " + month);
})