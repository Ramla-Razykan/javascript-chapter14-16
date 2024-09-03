// ==============Quetion1: Declare an empty array using JS literal notation to store student names in future.
// var studentNames = [];

// ==============Quetion2: Declare an empty array using JS object notation to store student names in future. 
// var studentNames = new Array();

// ==============Quetion3: Declare and initialize a strings array.
// var studentNames = ["Alice", "Bob", "Charlie", "David", "Eva"];

// ==============Quetion4: Declare and initialize a numbers array. 
// var numbersArray = [10, 20, 30, 40, 50];

// ==============Quetion5: Declare and initialize a boolean array.
// var booleanArray = [true, false, true, false, true];

// ==============Quetion6: Declare and initialize a mixed array.
// var mixedArray = ["Alice", 25, true, null, { key: "value" }, [1, 2, 3]];

// ==============Quetion7: Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like: 
// Declare and initialize the array with education qualifications
// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Create a new <ul> element
// var ul = document.createElement("ul");

// // Iterate through the array and create list items
// educationQualifications.forEach(function(qualification) {
//     var li = document.createElement("li");
//     li.textContent = qualification;
//     ul.appendChild(li);
// });

// // Append the <ul> element to the body of the document
// document.body.appendChild(ul);

// ==============Quetion8: Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like
// Arrays to store student names and scores
// var studentNames = ["Michael", "John", "Tony"];
// var studentScores = [320, 230, 480]; // Assume scores out of 500 for each student

// // Total marks for each student
// const totalMarks = 500;

// // Iterate through the arrays to calculate and display scores and percentages
// studentNames.forEach((name, index) => {
//     var score = studentScores[index];
//     var percentage = (score / totalMarks) * 100;
    
//     document.write(`Score of ${name} is ${score}. Percentage: ${percentage.toFixed(2)}% <br>`);
// });

// ==============Quetion9:
// // Initialize the array with color names
// var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// alert(colors);

// // Function to display the array
// function displayArray(arr) {
//     console.log("Current colors:", arr);
// }

// // a. Ask the user what color they want to add to the beginning
// var colorToAddAtBeginning = prompt("Enter a color to add to the beginning of the array:");
// if (colorToAddAtBeginning) {
//     colors.unshift(colorToAddAtBeginning);
//     displayArray(colors);
// }

// // b. Ask the user what color they want to add to the end
// var colorToAddAtEnd = prompt("Enter a color to add to the end of the array:");
// if (colorToAddAtEnd) {
//     colors.push(colorToAddAtEnd);
//     displayArray(colors);
// }

// // c. Add two more colors to the beginning
// colors.unshift("Orange", "Pink");
// displayArray(colors);

// // d. Delete the first color in the array
// colors.shift();
// displayArray(colors);

// // e. Delete the last color in the array
// colors.pop();
// displayArray(colors);

// // f. Ask the user at which index they want to add a color & color name
// var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
// var colorToAddAtIndex = prompt("Enter the color to add at the specified index:");
// if (Number.isInteger(indexToAdd) && colorToAddAtIndex) {
//     colors.splice(indexToAdd, 0, colorToAddAtIndex);
//     displayArray(colors);
// }

// // g. Ask the user at which index they want to delete color(s) & how many colors to delete
// var indexToDelete = parseInt(prompt("Enter the index at which you want to delete color(s):"));
// var numberToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// if (Number.isInteger(indexToDelete) && Number.isInteger(numberToDelete)) {
//     colors.splice(indexToDelete, numberToDelete);
//     displayArray(colors);
// }

// ==============Quetion10: Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 
// // Initialize the array with student scores
// var studentScores = [320, 230, 480, 120];

// // Sort the array in ascending order
// studentScores.sort((a, b) => a - b);

// // Display the sorted array
// document.write("Ordered Scores of Students:", studentScores);

// ==============Quetion11: Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
// // Initialize the array with city names
// var cities = ["karachi, Lahore, Islamabad, Quetta, Peshawar"];

// // Copy 3 elements from cities array to selectedCities array
// var selectedCities = cities.slice(0, 3);

// // Display the arrays
// document.write("Cities array:", cities, "<br>");
// document.write("Selected cities array:", selectedCities);

// ==============Quetion12: Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method) 
// var arr = ["This ", " is ", " my ", " cat"];
// var result = arr.join('');
// console.log(result);

// ==============Quetion13: Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 
// var fifoArray = [];

// // Adding values to the array
// fifoArray.push('First');
// fifoArray.push('Second');
// fifoArray.push('Third');

// // Accessing values in FIFO order
// console.log(fifoArray.shift()); // Outputs: First
// console.log(fifoArray.shift()); // Outputs: Second
// console.log(fifoArray.shift()); // Outputs: Third

// ==============Quetion14: Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 
// var lifoArray = [];

// // Adding values to the array
// lifoArray.push('First');
// lifoArray.push('Second');
// lifoArray.push('Third');

// // Accessing values in LIFO order
// console.log(lifoArray.pop()); // Outputs: Third
// console.log(lifoArray.pop()); // Outputs: Second
// console.log(lifoArray.pop()); // Outputs: First

// ==============Quetion15: Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 
// // Array of phone manufacturers
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Generate dropdown menu
// document.write('<select name="phones">');
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }
// document.write('</select>');
