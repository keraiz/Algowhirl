// Random Dad Jokes API (Tech-themed!)
fetch("https://icanhazdadjoke.com/slack")
    .then(response => response.json())
    .then(data => {
        document.getElementById('dad-joke').textContent = `🤖 Tech Joke: ${data.attachments[0].text}`;
    })
    .catch(() => {
        document.getElementById('dad-joke').textContent = "Why don’t jokes work in code? Because every time they ‘return’! 🤦‍♂️";
    });

// CTA Button with Fake Loading
const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('click', () => {
    ctaButton.textContent = "Generating pizza...";
    setTimeout(() => {
        ctaButton.textContent = "ERROR 404: Pizza not found. Here’s a 🍪 instead!";
        setTimeout(() => {
            ctaButton.textContent = "Fine, take this virtual high-five ✋";
        }, 1500);
    }, 2000);
});

// Guessing Game with Roasts
const secretCategory = categories[Math.floor(Math.random() * categories.length)];
guessButton.addEventListener('click', () => {
    const guess = guessInput.value.trim().toLowerCase();
    const roasts = [
        "Bruh.", 
        "My grandma guesses better.", 
        "Are you even trying?", 
        "🤡 Clown behavior."
    ];
    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];

    if (guess === secretCategory) {
        gameResult.textContent = `🎉 Correct! You’re smarter than a chess bot (maybe).`;
    } else if (categories.includes(guess)) {
        gameResult.textContent = `${randomRoast} Hint: It rhymes with "${secretCategory.replace(/./g, '🫠')}"`;
    } else {
        gameResult.textContent = "🚨 Invalid input. This isn’t a Turing test... or is it?";
    }
});

// Easter Egg
function revealSecret() {
    document.getElementById('secret').style.display = "block";
}";
}