# 🌡️ Temperature Conversion App

**Live Demo:** [View on CodePen](https://codepen.io/bnelsonemail-the-bold/pen/Exzgpej)  
**Author:** [Brice A. Nelson](https://www.linkedin.com/in/brice-a-nelson-p-e-mba-36b28b15/) • [devbybrice.com](https://www.devbybrice.com)

---

## 🧭 Overview

The **Temperature Conversion App** is a lightweight web tool built in **pure JavaScript, HTML, and CSS**.  
It converts values between **Fahrenheit (°F)**, **Celsius (°C)**, and **Kelvin (K)** — dynamically updating both the input and visual feedback.

This project was one of my early front-end exercises, designed to practice **DOM manipulation**, **event handling**, and **UI responsiveness**.

---

## 🧩 Features

- 🔁 Convert between **Fahrenheit**, **Celsius**, and **Kelvin**  
- ⚡ Built entirely with **vanilla JavaScript** — no frameworks or libraries  
- 🎨 Interactive color feedback for each temperature range  
- 🧠 Simple, intuitive interface built with **semantic HTML**  
- 📱 Fully responsive layout using CSS Flexbox  
- ☁️ Hosted via **GitHub Pages** for instant access  

---

## ⚙️ How It Works

- The user inputs a temperature and selects a conversion unit.  
- JavaScript handles conversion logic using direct mathematical relationships.  
- The UI instantly updates with the new temperature and visual cues (e.g., color changes for hot/cold).  

Example logic:
```js
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
```

---

## 🧠 Lessons Learned

This project helped reinforce:
- DOM access and manipulation (`document.getElementById`, `querySelector`)  
- Event-driven programming in JavaScript  
- Working with input validation and dynamic UI updates  
- Using CSS to create visual indicators and responsive layouts  
- Debugging and iterative improvement through `console.log()` testing  

---

## 🧰 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6) |
| **Deployment** | GitHub Pages |
| **Tools** | CodePen for live demo testing and iteration |

---

## 🌐 Live Demo

Try it here 👉 [CodePen Demo](https://codepen.io/bnelsonemail-the-bold/pen/Exzgpej)

---

## 🪪 License & Author

This project is open source under the **MIT License** — free to use, modify, and share.

**Author:** Brice A. Nelson  
🌐 [devbybrice.com](https://www.devbybrice.com)  
💼 [LinkedIn](https://www.linkedin.com/in/brice-a-nelson-p-e-mba-36b28b15/)  

---

> _“Every engineer starts by converting one thing into another — this just happens to be temperature.”_ 🔥❄️
