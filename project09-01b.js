"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Oleksii Fon Krupp
      Date:   05/12/2024

      Filename: project09-01b.js
*/

// Extract the query string text after the first character
let query = location.search.slice(1);

// Replace every occurrence of the + character with a blank space
// Decode URI-encoded characters in the query string
query = decodeURIComponent(query.replace(/\+/g, ' '));

// Split the query string into name=value pairs and store them in an array
let cardFields = query.split('&');

// Iterate through each name=value pair in the array
for (let field of cardFields) {
   // Split each pair at the = character to separate the name and value
   let [name, value] = field.split('=');
   // Set the text content of the document element with id equal to the name to the value
   document.getElementById(name).textContent = value;
}