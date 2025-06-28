import { useState, useEffect } from "react";
import { languages } from "../Js/languages";
import { getFarewellText } from "../Js/utils";
import getRandomColor from "../Js/color";
import { getRandomWord } from "../randomWord";
import { useWindowSize } from "@react-hook/window-size";

import GameHeader from "./components/GameHeader";
import GameStatus from "./components/GameStatus";
import FarewellMessage from "./components/FarewellMessage";
import LanguageChips from "./components/LanguageChips";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import NewGameButton from "./components/NewGameButton";
import { LossVoice } from "../Js/LoseMsg";

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState(getRandomWord);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [fareWellMsg, setFareWellMsg] = useState("");
  const [isFareWell, setIsFareWell] = useState(false);
  const [fareWellColor, setFareWellColor] = useState(getRandomColor);
  const [colorCount, setColorCount] = useState(0);

  const [width, height] = useWindowSize();

  const wrongGuessCount = guessedLetters.filter(
    (l) => !currentWord.includes(l)
  ).length;
  const isGameWon = currentWord
    .split("")
    .every((l) => guessedLetters.includes(l));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  useEffect(() => {
    if (isFareWell) {
      const timer = setTimeout(() => setIsFareWell(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isFareWell]);
  useEffect(() => {
    if (isGameLost) {
      LossVoice("Hahahaha! You Lost.. Try to Learn Assembly better!");
    }
  }, [isGameLost]);
  useEffect(() => {
    if (isGameWon) {
      LossVoice("You Won! Keep Winning");
    }
  }, [isGameWon]);

  function addGuessedLetter(letter) {
    if (guessedLetters.includes(letter) || isGameOver) return;

    const isWrong = !currentWord.includes(letter);
    const newWrongGuessCount =
      guessedLetters.filter((l) => !currentWord.includes(l)).length +
      (isWrong ? 1 : 0);

    if (isWrong && newWrongGuessCount <= languages.length) {
      const lostLanguage = languages[newWrongGuessCount - 1];
      const farewell = getFarewellText(lostLanguage.name);
      setFareWellMsg(farewell);
      setIsFareWell(true);
      setColorCount((prev) => {
        const newCount = prev + 1;
        setFareWellColor(getRandomColor(newCount));
        return newCount;
      });
    }

    setGuessedLetters((prev) => [...prev, letter]);
  }

  function resetGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
    setFareWellMsg("");
    setIsFareWell(false);
    setFareWellColor(getRandomColor());
    setColorCount(0);
  }

  return (
    <main>
      <GameHeader isGameWon={isGameWon} width={width} height={height} />
      <GameStatus isGameOver={isGameOver} isGameWon={isGameWon} />
      <FarewellMessage
        isFareWell={isFareWell}
        fareWellColor={fareWellColor}
        fareWellMsg={fareWellMsg}
      />
      <LanguageChips languages={languages} wrongGuessCount={wrongGuessCount} />
      <WordDisplay
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameOver={isGameOver}
      />
      <Keyboard
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        addGuessedLetter={addGuessedLetter}
        isGameOver={isGameOver}
      />
      <NewGameButton isGameOver={isGameOver} resetGame={resetGame} />
    </main>
  );
}
