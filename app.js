var myName = "Nate";
const numStates = 50;

var num1 = 5;
var num2 = 4;
var sum = num1 + num2; // takes value of num1 and adds it to value of num2 and stores the result in sum.
console.log(sum);



sayHello(); // This is the call to the sayHello function.

function sayHello(message) {  // returns Hello World! alert box
    alert("Hello World");
}


var verify = checkAge("John", 17); //This is the call to the checkAge function.
console.log(verify);

function checkAge(name, age) {  // verifies name and age and returns message based on age.
    if (age < 21) {
        return "Sorry " + name + ", you aren't old enough to view this page!";
    } else {
        return "Welcome " + name;
    }
}

var favVeg = ["broccoli", "tomato", "green beans", "cauliflower", "asparagus"];  // an array with my favorite vegetables in it.

for (var x = 0; x < favVeg.length; x++) {  //lists all of the vegetables in the favVeg array.
    console.log(favVeg[x]);
}


let newUser = [{ // this is an object array that defines 5 peoples names and ages.
    title: 'user1',
    name: "Chuck",
    age: 55
}, {
    title: 'user2',
    name: 'Larry',
    age: 20
}, {
    title: 'user3',
    name: 'Margaret',
    age: 21
}, {
    title: 'user4',
    name: 'Joe',
    age: 17
}, {
    title: 'user5',
    name: 'jack',
    age: 19
}];


for (var u = 0; u < newUser.length; u++) { //this is a loop that passes the name and age values from the object array above it into the checkAge function above and returns a message based off of the users age.
    var name = newUser[u].name;
    var age = newUser[u].age;
    checkAge(name, age);
    console.log(checkAge(name, age));
}

function getLength() { // this WILL BE my function for determing number of characters in a word and returning odd or even.
    
    return ;
}








  



































