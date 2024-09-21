function checkFields() {
    const field1 = document.getElementById("field1").value;
    const field2 = document.getElementById("field2").value;
    const message1 = document.getElementById("message1");

    if (field1 && field2) {
        message1.textContent = "Обидва поля заповнені";
    } else {
        message1.textContent = "Не всі поля заповнені";
    }
}

function checkNum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const suma = num1 + num2;
    const message2 = document.getElementById('message2');

    if (suma > 10) {
        message2.textContent = "Сума більша за 10";
    } else {
        message2.textContent = "Сума менша або дорівнює 10";
    }
}

function checkText() {
    const text = document.getElementById('textField').value;
    const message3 = document.getElementById('message3');
    
    if (text.includes("JavaScript")) {
        message3.textContent = "Текст містить слово JavaScript";
    } else {
        message3.textContent = "Текст не містить слово JavaScript";
    }
}

function checkInput() {
    const number = parseFloat(document.getElementById('numberInput').value);
    const message4 = document.getElementById('message4');

    if (number > 10 && number < 20) {
        message4.textContent = "Число входить в діапазон від 10 до 20";
    } else {
        message4.textContent = "Число не входить в діапазон від 10 до 20";
    }
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message5 = document.getElementById('message5');

    if (name.length < 3) {
        message5.textContent = "Ім'я має містити не менше 3 символів.";
        return;
    }
    if (!email.includes('@') || !email.includes('.', email.indexOf('@'))) {
        message5.textContent = "Email має містити символ @ та крапку після нього.";
        return;
    }
    if (password.length < 6) {
        message5.textContent = "Пароль має містити не менше 6 символів.";
        return;
    }

    window.location.href = "https://www.youtube.com/watch?v=dMXJHw2z8s4";
}