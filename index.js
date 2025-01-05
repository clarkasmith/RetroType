
const textToTypeElement = document.getElementById('text-to-type');
const userInputElement = document.getElementById('text24');
const startButton = document.getElementById('start-button');
const resultElement = document.getElementById('result');

let textToType = "This is a typing test.";
let isTyping = false;

// WAV files for each typing sound (from MonkeyType) to randomly select from upon each keypress
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

let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
let restart_btn = document.querySelector(".restart_btn");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");


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