
const textToTypeElement = document.getElementById('text-to-type');
const userInputElement = document.getElementById('text24');
const startButton = document.getElementById('start-button');
const resultElement = document.getElementById('result');

let textToType = "This is a typing test.";
let isTyping = false;

const typingSounds = [
    'sounds/click1_1.wav',
    'sounds/click1_2.wav',
    'sounds/click1_3.wav',
    'sounds/click1_4.wav',
    'sounds/click1_5.wav',
    'sounds/click1_6.wav',
    'sounds/click1_7.wav',
    'sounds/click1_8.wav',
    'sounds/click1_9.wav',
    'sounds/click1_10.wav',
    'sounds/click1_11.wav',
    'sounds/click1_12.wav'
];

startButton.addEventListener('click', () => {
    if (!isTyping) {
        isTyping = true;
        userInputElement.value = 'Start typing here...';
        userInputElement.focus();
        resultElement.textContent = '';
        startTypingTest();
    }
});

userInputElement.addEventListener('input', () => {

    const randomSoundIndex = Math.floor(Math.random() * typingSounds.length);
    const typingSound = new Audio(typingSounds[randomSoundIndex]);

    typingSound.play().catch(error => console.error("Audio playback error:", error));

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