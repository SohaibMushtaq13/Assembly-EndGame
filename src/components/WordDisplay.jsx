// components/WordDisplay.jsx
export default function WordDisplay({
  currentWord,
  guessedLetters,
  isGameOver,
}) {
  return (
    <section className="word">
      {currentWord.split("").map((letter, index) => (
        <span key={index}>
          {guessedLetters.includes(letter) || isGameOver
            ? letter.toUpperCase()
            : ""}
        </span>
      ))}
    </section>
  );
}
