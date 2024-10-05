
const textToTypeElement = document.getElementById('text-to-type');
const userInputElement = document.getElementById('user-input');
const startButton = document.getElementById('start-button');
const resultElement = document.getElementById('result');

let textToType = "This is a typing test.";
let isTyping = false;

startButton.addEventListener('click', () => {
    if (!isTyping) {
        isTyping = true;
        userInputElement.value = '';
        userInputElement.focus();
        resultElement.textContent = '';
        startTypingTest();
    }
});

userInputElement.addEventListener('input', () => {
    if (userInputElement.value === textToType) {
        resultElement.textContent = "Well done!";
        isTyping = false;
    } else if (!textToType.startsWith(userInputElement.value)) {
        resultElement.textContent = "Oops! Keep trying!";
    } else {
        resultElement.textContent = '';
    }
});

function startTypingTest() {
    textToTypeElement.textContent = textToType;
}