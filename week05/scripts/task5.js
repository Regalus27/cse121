/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date

// Step 2: Declare another variable to hold the day of the week

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

// Step 4: Declare a variable to hold a message that will be displayed

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'

let newDate = new Date();
let dayOfWeek = newDate.getDay();
let message = "Hang in there!";

if (dayOfWeek > 5) {
    message = "Woohoo! It is the weekend!";
}



/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

let dayMessage = "";

switch (dayOfWeek) {
    case 1:
        dayMessage = "Monday";
        break;
    case 2:
        dayMessage = "Tuesday";
        break;
    case 3:
        dayMessage = "Wednesday";
        break;
    case 4:
        dayMessage = "Thursday";
        break;
    case 5:
        dayMessage = "Friday";
        break;
    case 6:
        dayMessage = "Saturday";
        break;
    case 7:
        dayMessage = "Sunday";
        break;
    default:
        console.error("Unexpected value in dayOfWeek: ${dayOfWeek}.");
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

let outputElement1 = document.getElementById("message1");
outputElement1.appendChild(document.createTextNode(message));
let outputElement2 = document.getElementById("message2");
outputElement2.appendChild(document.createTextNode(dayMessage));

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples

let templeArray = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

function output(temples) {
    let templeElement = document.getElementById("temples");

    temples.forEach(function (element) {
        let articleElement = document.createElement("article");
        
        let nameElement = document.createElement("h3");
        let textNode = document.createTextNode(element.templeName);
        nameElement.appendChild(textNode);
        articleElement.appendChild(nameElement);

        let locationElement = document.createElement("h4");
        textNode = document.createTextNode(element.location);
        locationElement.appendChild(textNode);
        articleElement.appendChild(locationElement);

        let dedicatedElement = document.createElement("h4");
        textNode = document.createTextNode(element.dedicated);
        dedicatedElement.appendChild(textNode);
        articleElement.appendChild(dedicatedElement);

        let imgElement = document.createElement("img");
        imgElement.setAttribute("src", element.imageUrl);
        imgElement.setAttribute("alt", element.templeName);
        articleElement.appendChild(imgElement);

        templeElement.appendChild(articleElement);
    });
}



// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

async function getTemples () {
    const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
    const results = await fetch(url);

    if (results.ok) {
        templeArray = await results.json();
        output(templeArray);
    }
}
getTemples();
// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    let templeElement = document.getElementById("temples");

    while (templeElement.firstChild) {
        templeElement.removeChild(templeElement.firstChild);
    }
}
// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy() {
    reset();

    let s = document.getElementById("sortBy");
    let val = s.value;

    switch (val) {
        case "templeNameAscending":
            templeArray = templeArray.sort(
                (t1, t2) => (t1.templeName < t2.templeName) ? 1 : (t1.templeName > t2.templeName) ? -1 : 0
            );
            break;
        case "templeNameDescending":
            templeArray = templeArray.sort(
                (t1, t2) => (t1.templeName > t2.templeName) ? 1 : (t1.templeName < t2.templeName) ? -1 : 0
            );
            break;
        default:
            console.err("Unexpexted value in sortBy");
    }

    output(templeArray);
}
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

const sortElement = document.getElementById("sortBy");
sortElement.addEventListener("change", sortBy());
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
