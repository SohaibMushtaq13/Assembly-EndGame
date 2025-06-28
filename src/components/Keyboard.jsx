// components/Keyboard.jsx
import { clsx } from "clsx";

export default function Keyboard({
  guessedLetters,
  currentWord,
  addGuessedLetter,
  isGameOver,
}) {
  const keyboardLetters = "abcdefghijklmnopqrstuvwxyz";

  return (
    <section className="keyboard">
      {keyboardLetters.split("").map((letter) => {
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = isGuessed && currentWord.includes(letter);
        const isWrong = isGuessed && !currentWord.includes(letter);

        return (
          <button
            key={letter}
            className={clsx({
              correct: isCorrect,
              wrong: isWrong,
              disable: isGameOver,
            })}
            disabled={isGameOver || isGuessed}
            onClick={() => addGuessedLetter(letter)}
          >
            {letter.toUpperCase()}
          </button>
        );
      })}
    </section>
  );
}
