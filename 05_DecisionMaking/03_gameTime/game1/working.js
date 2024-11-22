
    function makeChoice(choice) {
        const messageElement = document.getElementById('message');
        const optionsElement = document.querySelector('.options');

        // Clear previous options
        optionsElement.innerHTML = '';

        if (choice === 'forest') {
            messageElement.textContent = "You enter the forest and encounter a wild animal! Do you fight or run?";
            optionsElement.innerHTML = `
                <button onclick="makeChoice('fight')">Fight the animal</button>
                <button onclick="makeChoice('run')">Run away</button>
            `;
        } else if (choice === 'mountains') {
            messageElement.textContent = "You climb the mountain and find a treasure chest. Do you open it or leave it alone?";
            optionsElement.innerHTML = `
                <button onclick="makeChoice('open')">Open the chest</button>
                <button onclick="makeChoice('leave')">Leave the chest alone</button>
            `;
        } else if (choice === 'fight') {
            messageElement.textContent = "You bravely fight the animal and win! You find a hidden treasure. You are victorious!";
            optionsElement.innerHTML = `
                <button onclick="resetGame()">Play Again</button>
            `;
        } else if (choice === 'run') {
            messageElement.textContent = "You run away and get lost in the forest. Game over!";
            optionsElement.innerHTML = `
                <button onclick="resetGame()">Play Again</button>
            `;
        } else if (choice === 'open') {
            messageElement.textContent = "You open the chest and find a magical sword! You are now a hero!";
            optionsElement.innerHTML = `
                <button onclick="resetGame()">Play Again</button>
            `;
        } else if (choice === 'leave') {
            messageElement.textContent = "You leave the chest alone, but later regret it. You wander aimlessly. Game over!";
            optionsElement.innerHTML = `
                <button onclick="resetGame()">Play Again</button>
            `;
        }
    }

    function resetGame() {
        document.getElementById('message').textContent = "You are standing at a crossroad. There are two paths: one leads into the forest, the other into the mountains. What do you do?";
        document.querySelector('.options').innerHTML = `
            <button onclick="makeChoice('forest')">Take the forest path</button>
            <button onclick="makeChoice('mountains')">Take the mountain path</button>
        `;
    }

