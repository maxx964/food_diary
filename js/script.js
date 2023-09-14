const registrationForm = document.getElementById('registration-form');
const loginForm = document.getElementById('login-form');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = e.target.elements['reg-username'].value;
    const password = e.target.elements['reg-password'].value;
    // Додайте код для реєстрації користувача
    console.log('Реєстрація: Ім\'я користувача:', username, 'Пароль:', password);
    e.target.reset();
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = e.target.elements['login-username'].value;
    const password = e.target.elements['login-password'].value;
    // Додайте код для входу користувача
    console.log('Вхід: Ім\'я користувача:', username, 'Пароль:', password);
    e.target.reset();
});
