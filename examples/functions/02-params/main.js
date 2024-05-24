// Define a function with two parameters
function greet(name, age) {
  console.log(`Hello ${name}! You are ${age} years old.`);
}

// Call the function with arguments
greet("John", 25);

// Define a function with multiple parameters
function createCity(inhabitants, foundingYear, hoursOfSunperYear, name, location, country, continent, annualBudget) {
  // Perform some complex operations using the parameters
  console.log(`Inhabitants: ${inhabitants}`);
  console.log(`Founding Year: ${foundingYear}`);
  console.log(`Hours of Light per Year: ${hoursOfSunperYear}`);
  console.log(`Name: ${name}`);
  console.log(`Location: ${location}`);
  console.log(`Country: ${country}`);
  console.log(`Continent: ${continent}`);
  console.log(`Annual Budget: ${annualBudget}`);
}

// Call the function with arguments
createCity(15461681, 1850, 2000, "Springfield", { latitude: 37.220165, longitude: -95.699059}, "United States", "North America", 5000000000);

// Define a function with an object parameter
function printPerson(person) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`City: ${person.city}`);
}

// Call the function with an object argument
printPerson({
  name: "John",
  age: 25,
  city: "New York"
});