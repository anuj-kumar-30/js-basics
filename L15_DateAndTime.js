// Date
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); // converts it into the ISD form
console.log(myDate.toDateString()); // Only shows date in ISD form
console.log(myDate.toISOString()); // show the date in ISO form
console.log(myDate.toJSON()); // Looks same as original date formate but in Json formate
console.log(myDate.toLocaleDateString("en-US")); // Shows date in en-US locale standanrd
console.log(myDate.toLocaleString("en-US")); // Shows date and time in en-US locale standard.
console.log(typeof(myDate)); // object of Date()

let myCreatedDate = new Date(2001, 9, 30); //Date(YYYY, M, DD)
console.log(`myCreatedDate: ${myCreatedDate.toString()}`);
let x = () => {
    var y=10;
}
// console.log(y);
