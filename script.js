/*          This is a simple script that will be used to demonstrate the use of the temperature converter class.

The script will create an instance of the TemperatureConverter class and use it to convert temperatures between Fahrenheit, Celsius, and Kelvin.

The html file will accept a temperature input and a select dropdown to choose the unit of the input temperature. The user will then be able to select the unit they would like to convert the temperature to and click a button to perform the conversion.

The result of the conversion will be displayed on the page.

if the temperature is above 85 degrees Fahrenheit, the result will be displayed in red text to indicate that it is a high temperature.

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

// Add Heading Letter Animation
function randomRGB() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}


// Change the color of the letters every second
const letters = document.querySelectorAll('.letters');
const interValid = setInterval(function(){
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000);



// Create a class called TemperatureConverter.
class TemperatureConverter {
  constructor() {
      this.celsius = 0;
      this.fahrenheit = 0;
      this.kelvin = 0;
  }


  convert(temperature, fromUnit, toUnit) {
    if (fromUnit === toUnit) {
          return temperature + " " + toUnit;
      } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
          return (Math.round(((temperature * 9/5) + 32) * 10) / 10) + " Fahrenheit";
      } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
          return (Math.round((temperature + 273.15) * 10) / 10) + " Kelvin";
      } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
          return (Math.round(((temperature - 32) * 5/9) * 10) / 10) + " Celsius";
      } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
          return (Math.round(((temperature - 32) * 5/9 + 273.15) * 10) / 10) + " Kelvin";
      } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
          return (Math.round((temperature - 273.15) * 10) / 10) + " Celsius";
      } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
          return (Math.round(((temperature - 273.15) * 9/5 + 32) * 10) / 10) + " Fahrenheit";
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
function displayResult(result, temperature, toUnit) {
  const resultElement = document.getElementById("result");
  const background = document.getElementsByTagName("body")[0];
  resultElement.textContent = result;
  console.log(result, temperature, toUnit);

  /* 85F = 29.4C = 302.6K bg color red
  0C = 32F = 273.15K bg color blue
  0F = -17.8C = 255.4K bg color purple
  100C = 212F = 373.15K bg color orange
  */

  // Clear any previous color
  background.style.backgroundColor = "gray";

  
  if (toUnit === "Fahrenheit" && parseFloat(result) < 0) {
    background.style.backgroundColor = "purple";
    } else if (toUnit === "Kelvin" && parseFloat(result) < 255.4) {
        background.style.backgroundColor = "purple";
    } else if (toUnit === "Celsius" && parseFloat(result) < -17.8) {
        background.style.backgroundColor = "purple";
    } else if (toUnit === "Celsius" && parseFloat(result) <= 0) {
        background.style.backgroundColor = "blue";
    } else if (toUnit === "Kelvin" && parseFloat(result) <= 273.2) {
        background.style.backgroundColor = "blue";
    } else if (toUnit === "Fahrenheit" && parseFloat(result) <= 32) {
        background.style.backgroundColor = "blue";
    } else if (toUnit === "Kelvin" && parseFloat(result) >= 373.2) {
        background.style.backgroundColor = "#e28409";
    } else if (toUnit === "Celsius" && parseFloat(result) >= 100) {
        background.style.backgroundColor = "#e28409";
    } else if (toUnit === "Fahrenheit" && parseFloat(result) >= 212) {
        background.style.backgroundColor = "#e28409";
    } else if (toUnit === "Celsius" && parseFloat(result) >= 29.4) {
        background.style.backgroundColor = "#85120a";
    } else if (toUnit === "Kelvin" && parseFloat(result) >= 302.6) {
        background.style.backgroundColor = "#85120a"; 
    } else if (toUnit === "Fahrenheit" && parseFloat(result) >= 85) {
        background.style.backgroundColor = "#85120a";
    }
}

// Step 5: Add event listener to the button to perform the conversion.
const convertButton = document.getElementById("btn");
convertButton.addEventListener("click", function (e) {
  e.preventDefault();
  const temperatureInput = document.getElementById("temperature").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (validateTemperature(temperatureInput) === true) {
      const temperature = parseFloat(temperatureInput);
      const result = convertTemperature(temperature, fromUnit, toUnit);
      displayResult(result, temperature, toUnit);
  } else {
      const resultElement = document.getElementById("result");
      resultElement.textContent = validateTemperature(temperatureInput);
      resultElement.style.color = "red";
  }
});

