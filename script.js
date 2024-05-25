/*          This is a simple script that will be used to demonstrate the use of the temperature converter class.

The script will create an instance of the TemperatureConverter class and use it to convert temperatures between Fahrenheit, Celsius, and Kelvin.

The html file will accept a temperature input and a select dropdown to choose the unit of the input temperature. The user will then be able to select the unit they would like to convert the temperature to and click a button to perform the conversion.

The result of the conversion will be displayed on the page.

if the temperature is above 100 degrees Fahrenheit, the result will be displayed in red text to indicate that it is a high temperature.

if the temperature is below 0 degrees Celsius, the result will be displayed in blue text to indicate that it is a low temperature.

if the temperature is below 0 degrees Fahrenheit, the result will be displayed in purple text to indicate that it is a very low temperature.

if the temperature is above 100 degrees Celsius, the result will be displayed in orange text to indicate that it is a very high temperature.

if the temperature is between 0 and 100 degrees Fahrenheit, the result will be displayed in gray text.

The script will include a class called TemperatureConverter that will have methods to convert temperatures between Fahrenheit, Celsius, and Kelvin.

The script will include a function to convert the temperature based on the selected units.

The script will also include a function to validate the input temperature and display an error message if the input is not a valid number.

Steps:

1. Create an instance of the TemperatureConverter class.
2. Create a function to validate the input temperature.
3. Create a function to convert the temperature.
4. Create a function to display the result of the conversion.
5. Add event listener to the button to perform the conversion.
6. Display the result on the page.
7. Create a function to add styling to the result based on the temperature.
8. Test the script by entering different temperatures and units.
9. Refactor the code if necessary.



*/

// Solution:

// Create a class called TemperatureConverter.
class TemperatureConverter {
  constructor() {
      this.celsius = 0;
      this.fahrenheit = 0;
      this.kelvin = 0;
  }

  convert(temperature, fromUnit, toUnit) {
      // Test to see if the function is being called
      console.log('I\'m here');

      if (fromUnit === toUnit) {
          return temperature + " " + toUnit;
      } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
          return (temperature * 9/5) + 32 + " Fahrenheit";
      } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
          return temperature + 273.15 + " Kelvin";
      } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
          return (temperature - 32) * 5/9 + " Celsius";
      } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
          return (temperature - 32) * 5/9 + 273.15 + " Kelvin";
      } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
          return temperature - 273.15 + " Celsius";
      } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
          return (temperature - 273.15) * 9/5 + 32 + " Fahrenheit";
      } else {
          return "Invalid conversion";
      }
  }
}

// Step 1: Create an instance of the TemperatureConverter class.
const converter = new TemperatureConverter();

// Step 2: Create a function to validate the input temperature.
function validateTemperature(temperature) {
  if (isNaN(temperature)) {
      return "Please enter a valid number for the temperature.";
  } else {
      return true;
  }
}

// Step 3: Create a function to convert the temperature.
function convertTemperature(temperature, fromUnit, toUnit) {
  return converter.convert(temperature, fromUnit, toUnit);
}

// Step 4: Create a function to display the result of the conversion.
function displayResult(result, temperature) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = result;

  if (temperature > 100) {
      resultElement.style.color = "red";
  } else if (temperature < 0) {
      if (result.includes("Fahrenheit")) {
          resultElement.style.color = "purple";
      } else {
          resultElement.style.color = "blue";
      }
  } else {
      resultElement.style.color = "gray";
  }
}

// Step 5: Add event listener to the button to perform the conversion.
const convertButton = document.getElementById("convert");
convertButton.addEventListener("click", function () {
  const temperatureInput = document.getElementById("temperature").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (validateTemperature(temperatureInput) === true) {
      const temperature = parseFloat(temperatureInput);
      const result = convertTemperature(temperature, fromUnit, toUnit);
      displayResult(result, temperature);
  } else {
      const resultElement = document.getElementById("result");
      resultElement.textContent = validateTemperature(temperatureInput);
      resultElement.style.color = "red";
  }
});


// Step 8: Test the script by entering different temperatures and units.

// Step 9: Refactor the code if necessary.

