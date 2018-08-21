//JSON 
//stringify - convert a ojbect to JSON string
//parce - convert JSON string to a ojbect

var myDog = {
    name: 'trung',
    weight: 1, 
    dead: false,
}

var myDogString = JSON.stringify(myDog);

var myPet = JSON.parse(myDogString);
console.log(myPet);