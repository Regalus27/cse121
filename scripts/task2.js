/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = "Cooper";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.getElementById("name").textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = 2023;

// Step 4: place the value of the current year variable into the HTML file
let section = document.getElementById("infoSection");
let p = document.createElement("p");
section.append("Year: " + currentYear, p);

// Step 5: declare and instantiate a variable to hold the name of your picture
let picturePath = "images/ME.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.getElementById("selfPicture").setAttribute("src", picturePath);
document.getElementById("selfPicture").setAttribute("width", 240);

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let foods = ["Potatoes", "Pastas", "Pies"];

// Step 2: place the values of the favorite foods variable into the HTML file
let foodSpan = document.getElementById("food");
foodSpan.innerHTML = foods;

// Step 3: declare and instantiate a variable to hold another favorite food
let newFood = "Pizza";

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(newFood);

// Step 5: repeat Step 2
foodSpan.innerHTML = foods;

// Step 6: remove the first element in the favorite foods array
foods.shift();

// Step 7: repeat Step 2
foodSpan.innerHTML = foods;

// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2
foodSpan.innerHTML = foods;


