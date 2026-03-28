let word = "";
let display = [];
let attempts = 6;
let score = 0;

const words = {
    4: ["TREE", "GAME", "FISH"],
    5: ["APPLE", "HOUSE"],
    6: ["JACKET", "ELEPHANT"]
};

function showDifficulty() {
    hideAll();
    document.getElementById("difficulty").classList.remove("hidden");
}

function backMenu() {
    hideAll();
    document.getElementById("menu").classList.remove("hidden");
}

function hideAll() {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("difficulty").classList.add("hidden");
    document.getElementById("game").classList.add("hidden");
    document.getElementById("gameOver").classList.add("hidden");
}

function showInstructions() {
    alert("Guess the word within 6 attempts!");
}

function exitGame() {
    alert("Close the browser to exit.");
}

function startGame(length) {
    let list = words[length];
    word = list[Math.floor(Math.random() * list.length)];

    display = Array(word.length).fill("_");
    attempts = 6;
    score = 0;

    updateUI();
    hideAll();
    document.getElementById("game").classList.remove("hidden");
}

function submitGuess() {
    let guess = document.getElementById("guessInput").value.toUpperCase();
    document.getElementById("guessInput").value = "";

    if (!guess) return;

    if (guess.length === 1) {
        let correct = false;

        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                display[i] = guess;
                score += 5;
                correct = true;
            }
        }

        if (!correct) attempts--;

    } else if (guess === word) {
        display = word.split("");
        score += 20;
    } else {
        attempts--;
    }

    updateUI();

    if (display.join("") === word) {
        endGame("YOU WIN! Score: " + score);
    }

    if (attempts === 0) {
        endGame("Game Over! Word was: " + word);
    }
}

function updateUI() {
    document.getElementById("wordDisplay").innerText = display.join(" ");
    document.getElementById("info").innerText =
        "Attempts: " + attempts + " | Score: " + score;
}

function endGame(message) {
    hideAll();
    document.getElementById("gameOver").classList.remove("hidden");
    document.getElementById("resultText").innerText = message;
}