const original = {
    name: "Poojitha",
    age: 22,
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

// Shallow copy using Object.assign
const shallowCopy1=Object.assign({},original);

// Shallow copy using spread operator
const shallowCopy2 = { ...original };

// Modifying a nested object
shallowCopy1.address.city = "Delhi"; // Changes the city in the original object too
console.log(original.address.city); // Output: "Delhi"
console.log(shallowCopy1.address.city);

shallowCopy2.address.city = "Bangalore"; // Changes only in shallowCopy2
console.log(original.address.city); // Output: "Delhi"


const car = { 
    make: "Toyota", 
    model: "Corolla", 
    year: 2021 
   };

const k=Object.keys(car);
console.log(k);
const v=Object.values(car)
console.log(v);
const e=Object.entries(car);
console.log(e);

const numbers=[1,2,3,4,5];
const subArray = numbers.slice(0, 4); 
console.log(subArray); //
