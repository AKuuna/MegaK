//SET
const mySet = new Set([1,2,3,3,5,6,6,7,5,5,4,3]);
console.log(mySet);

//similar to Object.entries()
for (const entry of mySet.entries()) {
    console.log(entry);
}

console.log(mySet.has(2));

const ar = [...mySet];
console.log(ar); 


mySet.clear();
console.log(mySet);

//MAP

const obj = {
    cucumber: 7.3,
    watermelon: 4,
    grapes: 12,
};

const map = new Map (Object.entries(obj));

//other option to define map, with new Map();
// map.set('cucumber', 7.3);
// map.set('watermelon', 4);
// map.set('grapes', 12);

map.set('cucumber', 9); //overwriting value

const itemToCheck = 'cucumber';

console.log('Check item is worth', map.get(itemToCheck));
