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
