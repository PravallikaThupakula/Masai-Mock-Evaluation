// Question 8
let nums = [10, 3, 7, 20, 13, 2];
let squares = nums.map(n=> n*n);
console.log(squares)

let primes = nums.filter(n=>{
    if (n<2)
        console.log(false)
    for(let i=2 ;i<= Math.sqrt(n);i++){
        if(n%i===0)
            console.log(false)
    }
    console.log(true)
})

let total= nums.reduce((sum,n)=> sum+n,0)
console.log(total)

let desc= nums.slice().sort((a,b)=>b-a)
console.log(desc)

// Question 9
function displayCar(){
    console.log("Car")
}
function displayTruck(){
    console.log("Truck")
}
function displayBike(){
    console.log("Bike")
}

function vehicleInfo(vehicleCategory, callbackFn){
        callbackFn();
}

vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)
