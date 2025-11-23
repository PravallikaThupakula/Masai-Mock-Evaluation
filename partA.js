// Question 1
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
let combined =[...arr1, ...arr2];
console.log(combined)

// Question 2
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
let profile = {...person, ...extra}
console.log(profile)

// Question 3
function sumAll(...numbers){
    let sum=0;

    for(let num of numbers){
        sum+=num;
    }
    return sum;
}
console.log(sumAll(1,2,3,4));

// Question 4
let numbers = [10, 20, 30, 40, 50];
let [a, ...remaining] = numbers
console.log(a)
console.log(remaining)

// Question 5
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let {
    address: {
    city,
    geo:{lat,ing}
}
} =user
console.log(user)

// Question 6

let multiply =(a,b) => a*b;
console.log( multiply(2,3))

// Question 7
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
let role = emp?.profile?.role;
console.log(role)
