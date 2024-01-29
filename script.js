document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.register-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const userName = document.getElementById('userName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!userName || !lastName || !email || !newPassword || !confirmPassword) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Пожалуйста, введите корректный адрес электронной почты.');
            return;
        }

        if (!isValidName(userName) || !isValidName(lastName)) {
            alert('Имя и фамилия должны содержать только буквы и быть не пустыми.');
            return;
        }

        if (newPassword.length < 8) {
            alert('Пароль должен содержать не менее 8 символов.');
            return;
        }

        if (!/\d/.test(newPassword)) {
            alert('Пароль должен содержать хотя бы одну цифру.');
            return;
        }

        if (!/[A-Z]/.test(newPassword)) {
            alert('Пароль должен содержать хотя бы одну букву верхнего регистра.');
            return;
        }

 
        if (newPassword !== confirmPassword) {
            alert('Пароли не совпадают. Пожалуйста, повторите ввод пароля.');
            return;
        }

        alert('Регистрация успешна!');
        form.submit();
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidName(name) {
        return /^[a-zA-Z]+$/.test(name);
    }
});