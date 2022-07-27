interface Person {
    age: number;
    name: string;
    profession: string;
}

let person = { } as Person;
person.age = 29;
person.name = "Maria";
person.profession = "Atriz";

let person2 = { } as Person;
person2.age = 19;
person2.name = "Roberto";
person2.profession = "Padeiro";

let person3: Person  = {
    age: 32,
    name: "Laura",
    profession: "Atriz"
}

let person4: Person  = {
    age: 19,
    name: "Carlos",
    profession: "Padeiro"
}