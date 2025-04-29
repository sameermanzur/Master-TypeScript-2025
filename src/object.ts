// Object works in the key and value pair. 
// Using object specific elemements can be called w/o using index;use property directly 
// Unlike Arrays, Values can be arranged in the proper order 
let person = {
    personName: "Sameer",
    personAge: "sam",
    isMarried: false
};

console.log(person);
console.log(person.personAge);
console.log(person.isMarried);

let person1: { personName: string, personAge: number, isMarried: boolean } = {
    personName: "Sameer",
    personAge: 29,
    isMarried: false
}

// type alliases 
type studentDetails = {
    name: string
    age: number
    location: string
}

const hiba: studentDetails = {
    name: "Hiba",
    age: 18,
    location: "Chennai"
}

const hasina: studentDetails = {
    name: "Hasina",
    age: 52,
    location: "Chennai"
}

let manzur: studentDetails = {
    name: "Manzur",
    age: 60,
    location: "Tiruvottiyur"
}

console.log(manzur);


