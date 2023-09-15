// скрипт калькулятора

document.getElementById("calorie-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseFloat(document.getElementById("age").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const activity = parseFloat(document.getElementById("activity").value);

    let bmr;

    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const calories = bmr * activity;

    document.getElementById("calories").textContent = `Необхідна кількість калорій: ${calories.toFixed(2)} ккал/день`;
    document.getElementById("result").style.display = "block";
});

// ========================================================================

document.addEventListener("DOMContentLoaded", function () {
  const mealButtons = document.querySelectorAll(".meal-button");
  const mealLists = document.querySelectorAll(".meal-list");

  mealButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mealType = button.getAttribute("data-meal");

      // Переключайте видимість списку страв в залежності від кнопки
      mealLists.forEach((list) => {
        list.style.display = list.id === `${mealType}-list` ? "block" : "none";
      });
    });
  });
});

// =============================================================

// Отримуємо кнопку "Сніданок" за її ідентифікатором
var breakfastButton = document.getElementById('breakfastButton');

// Отримуємо список страв за ідентифікатором
var mealList = document.getElementById('mealList');

// Додаємо обробник події для кнопки "Сніданок"
breakfastButton.addEventListener('click', function () {
  // Перевіряємо, чи список видимий
  if (mealList.style.display === 'block') {
    // Якщо так, то ховаємо список
    mealList.style.display = 'none';
  } else {
    // Якщо ні, то показуємо список
    mealList.style.display = 'block';
  }
});
// 2================================================

// Отримуємо кнопку "Сніданок" за її ідентифікатором
var lunchButton = document.getElementById('lunchButton');

// Отримуємо список страв за ідентифікатором
var mealListTwo = document.getElementById('mealListTwo');

// Додаємо обробник події для кнопки "Сніданок"
lunchButton.addEventListener('click', function () {
  // Перевіряємо, чи список видимий
  if (mealListTwo.style.display === 'block') {
    // Якщо так, то ховаємо список
    mealListTwo.style.display = 'none';
  } else {
    // Якщо ні, то показуємо список
    mealListTwo.style.display = 'block';
  }
});

// 3================================================

// Отримуємо кнопку "Сніданок" за її ідентифікатором
var snackButton = document.getElementById('snackButton');

// Отримуємо список страв за ідентифікатором
var mealListThree = document.getElementById('mealListThree');

// Додаємо обробник події для кнопки "Сніданок"
snackButton.addEventListener('click', function () {
  // Перевіряємо, чи список видимий
  if (mealListThree.style.display === 'block') {
    // Якщо так, то ховаємо список
    mealListThree.style.display = 'none';
  } else {
    // Якщо ні, то показуємо список
    mealListThree.style.display = 'block';
  }
});
// 4================================================

// Отримуємо кнопку "Сніданок" за її ідентифікатором
var dinnerButton = document.getElementById('dinnerButton');

// Отримуємо список страв за ідентифікатором
var mealListFour = document.getElementById('mealListFour');

// Додаємо обробник події для кнопки "Сніданок"
dinnerButton.addEventListener('click', function () {
  // Перевіряємо, чи список видимий
  if (mealListFour.style.display === 'block') {
    // Якщо так, то ховаємо список
    mealListFour.style.display = 'none';
  } else {
    // Якщо ні, то показуємо список
    mealListFour.style.display = 'block';
  }
});


