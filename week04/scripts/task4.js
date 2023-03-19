/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo.name = "Cooper";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = "images/ME.jpg";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favoriteFoods = ["food1", "food2", "food3"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.hobbies = ["hobby1", "hobby2", "hobby3"];
// Step 6: Add another property named placesLived with a value of an empty array
myInfo.placesLived = [
    {place: "Arizona", length: "3 Years"},
    {place: "Utah", length: "12 Years"},
    {place: "Colorado", length: "8 Years"}
];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
let span = document.getElementById("name");
let text = document.createTextNode(myInfo.name);
span.appendChild(text);
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
let img = document.getElementById("photo");
img.setAttribute("src", myInfo.photo);
img.setAttribute("height", 400);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
img.setAttribute("alt", myInfo.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
for (const i of myInfo.favoriteFoods) {
    let list = document.getElementById("favorite-foods");
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(i));
    list.appendChild(item);
}
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
for (const i of myInfo.hobbies) {
    let list = document.getElementById("hobbies");
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(i));
    list.appendChild(item);
}
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
for (const i of myInfo.placesLived) {
    let list = document.getElementById("places-lived");
    let item1 = document.createElement("dt");
    let item2 = document.createAttribute("dd");
    item1.appendChild(document.createTextNode(i.place));
    list.appendChild(item1);
}
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
