# [Click here to play!](https://assembly-endgame-hangman.vercel.app/)

# Assembly Endgame

---

## Overview

**Assembly Endgame** is a word-guessing game inspired by the classic game Hangman. Developed as part of Scrimba's course project, the goal is to guess the hidden word within a limited number of attempts while avoiding incorrect guesses. Each incorrect guess "eliminates" a programming language, and the game is over when all languages are lost.

---

## Features

- Interactive word-guessing gameplay.
- Keyboard-based letter selection for a seamless user experience.
- Tracks correct and incorrect guesses dynamically.
- "Game Over" mechanic when too many incorrect guesses occur.
- Option to reset the game and start fresh.
- Random farewell messages for eliminated programming languages.

---

## How to Play

1. A random programming-related word is selected (e.g., `react`).
2. You start with all programming languages "active."
3. Guess the word one letter at a time by clicking the displayed keyboard buttons.
4. **Correct Guesses**: Revealed in the hidden word.
5. **Incorrect Guesses**: A programming language is eliminated.
6. Lose the game if you make too many incorrect guesses.
7. Win the game by correctly guessing all letters in the word.

---

## Technologies Used

- **React**: For building the interactive UI.
- **JavaScript**: For game logic and dynamic rendering.
- **CSS**: For styling and animations.

---

## Project Features

1. **Dynamic Letter Guessing**:
   - Displays letters when guessed correctly.
   - Tracks incorrect guesses visually on the keyboard.

2. **Keyboard Interaction**:
   - Buttons dynamically update to reflect "correct" or "wrong" states.
   - Disabled buttons prevent duplicate guesses.

3. **Language Elimination**:
   - Incorrect guesses "remove" a language visually from the list.
   - Random farewell messages (e.g., "RIP, JavaScript!") are displayed for eliminated languages.

4. **Game Over Mechanic**:
   - Ends the game after exceeding the incorrect guess limit.
   - Displays a "New Game" button to restart.

5. **Responsive Design**:
   - Optimized for various screen sizes for a great user experience.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/assembly-endgame.git
   cd assembly-endgame
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser at `http://localhost:3000` to play the game.

---

## Project Structure

```
src/
│
├── components/         # React components
│   ├── App.jsx         # Main component
│   ├── Keyboard.jsx    # Letter keyboard component
│   ├── GameStatus.jsx  # Displays game status (win/lose)
│   └── Languages.jsx   # Programming languages visualization
│
├── utils/              # Utility functions
│   └── getFarewellText.js # Generates farewell messages
│
├── assets/             # Static files (e.g., icons, images)
│
├── App.css             # Main stylesheet
├── index.js            # Application entry point
└── index.html          # Static HTML template
```

---

## How It Works

1. **Game Initialization**:
   - The game selects a random word.
   - The user starts with 8 "lives" (number of languages).

2. **Game Loop**:
   - Players click a letter to guess.
   - Correct guesses reveal the letter in the word.
   - Incorrect guesses eliminate a language with a farewell message.

3. **End States**:
   - **Win**: All letters guessed correctly.
   - **Lose**: More than 8 incorrect guesses.

---

## Features to Add

1. **Dynamic Word List**:
   - Support multiple random words instead of a hardcoded one.

2. **Score Tracking**:
   - Keep track of wins/losses across sessions.

3. **Hints**:
   - Provide optional hints for tricky words.

4. **Multiplayer Mode**:
   - Allow one player to set a custom word for another to guess.

---

## Credits

This project was developed as part of [Scrimba's Frontend Developer Path](https://scrimba.com). A big thanks to the instructors and Scrimba community for their support.
