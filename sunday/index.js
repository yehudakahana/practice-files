
const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: 10001
    },
    hobbies: ["reading", "running", "gaming"],
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        age: 25
      },
      {
        id: 3,
        name: "Bob Johnson",
        age: 35
      }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    address: {
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zip: 90001
    },
    hobbies: ["hiking", "cooking", "traveling"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 4,
        name: "Samantha Brown",
        age: 28
      }
    ]
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    address: {
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: 60001
    },
    hobbies: ["fishing", "golfing", "watching TV"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 5,
        name: "Emily Davis",
        age: 32
      }
    ]
  }
];

// FILTER

// Exercise 1: Use the filter method to get all the friends of John Doe

let afterFilter = data.filter(person => person.name === "John Doe");

// if (afterFilter.length > 0) {
//     let friendsNames = afterFilter[0].friends.map(friend => friend.name); 
//     console.log(friendsNames);
// } else {
//     console.log("John Doe not found");
// }



// Exercise 2: Use the filter method to get all the people who live in New York
let afterFilter2 = data.filter(person => person.address.city === "New York");
// console.log(afterFilter2);

// Exercise 3: Use the filter method to get all the people who are older than 30
let afterFilter3 = data.filter(person => person.age > 30);
// console.log(afterFilter3);

// MAP

// Exercise 1: Use the map method to put the names of all the friends of John Doe in a single array (use also the flat method)
let friendsNames = data
    .filter(person => person.name === "John Doe") 
    .map(person => person.friends.map(friend => friend.name))
    .flat(); 

// console.log(friendsNames);


// Exercise 2: Use the map method to get the full addresses (street, city, state, and zip) of all the people in the data array
const addresArray = data.map(person => `${person.address.street}, ${person.address.city}, ${person.address.state}, ${person.address.zip}`);
// console.log(addresArray);

// Exercise 3: Use the map method to get the hobbies of all the people in the data array in a single array
const hobbyArray = data.map(person => person.hobbies);
// console.log(hobbyArray);

// FIND

// Exercise 1: Use the find method to find the first person who lives in Chicago
const chicagoPerson = data.find(person => person.address.city === "Chicago");

//  console.log(chicagoPerson);


// Exercise 2: Use the find method to find the first person who is older than 30
const olderThan30 = data.find(person => person.age > 30);
// console.log(olderThan30);


// Exercise 3: Use the find method to find the first person who has "reading" as a hobby

const readingHobby = data.find(person => person.hobbies.includes("reading"));
// console.log(readingHobby);


// FOREACH

// Exercise 1: Use the forEach method to print out the names of all the people in the data array
 data.forEach(person =>console.log( person.name));


// Exercise 2: Use the forEach method to add a new property "isAdult" to each person object and set it to true if the person is over 18 and false if not
data.forEach(person => {
    person.isAdult = person.age > 18;
})
// console.log(data);

// Exercise 3: Use the forEach method to print out the names of all the friends of each person
// data.forEach(person => {
//     console.log(person.friends.map(friend => friend.name));
// })

// SOME

// Exercise 1: Use the some method to check if any of the people in the data array have "cooking" as a hobby
const cookingHobby = data.some(person => person.hobbies.includes("cooking"));
//  console.log(cookingHobby);

// Exercise 2: Use the some method to check if any of the people in the data array live in California

// Exercise 3: Use the some method to check if any of the friends of each person in the data array are older than 30


// EVERY

// Exercise 1: Use the every method to check if all the people in the data array have "reading" as a hobby

// Exercise 2: Use the every method to check if all the people in the data array live in the same state

// Exercise 3: Use the every method to check if all the friends of each person in the data array are older than 25


// REDUCE

// Exercise 1: Use the reduce method to get the total age of all the people in the data array

// Exercise 2: Use the reduce method to get the number of people who live in each state

// Exercise 3: Use the reduce method to get the average age of all the people in the data array


// INCLUDES

// Exercise 1: Use the includes method to check if the hobbies of John Doe include "gaming"

// Exercise 2: Use the includes method to check if the friends of Jane Smith include someone with the id of 4

// Exercise 3: Use the includes method to check if the data array includes a person with the name "Emily Davis"

