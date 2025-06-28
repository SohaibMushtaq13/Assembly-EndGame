// components/NewGameButton.jsx
export default function NewGameButton({ isGameOver, resetGame }) {
  if (!isGameOver) return null;

  return (
    <button className="new-game" onClick={resetGame}>
      New Game
    </button>
  );
}
