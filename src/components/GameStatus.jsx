// components/GameStatus.jsx
export default function GameStatus({ isGameOver, isGameWon }) {
  if (!isGameOver) return null;

  return (
    <section className="game-status" style={{ display: "flex" }}>
      {isGameWon ? (
        <div className="won">
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </div>
      ) : (
        <div className="lose">
          <h2>You lose!</h2>
          <p>Try to Learn Assembly better! 😢</p>
        </div>
      )}
    </section>
  );
}
