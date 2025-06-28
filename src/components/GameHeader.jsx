// components/GameHeader.jsx
import Confetti from "react-confetti";

export default function GameHeader({ isGameWon, width, height }) {
  return (
    <header>
      {isGameWon && <Confetti width={width} height={height} />}
      <h1>Assembly: Endgame</h1>
      <p>
        Guess the word within 8 attempts to keep the programming world safe from
        Assembly!
      </p>
    </header>
  );
}
