// components/LanguageChips.jsx
import { clsx } from "clsx";

export default function LanguageChips({ languages, wrongGuessCount }) {
  return (
    <section className="language-chips">
      {languages.map((lang, index) => {
        const styles = {
          backgroundColor: lang.backgroundColor,
          color: lang.color,
        };
        return (
          <span
            key={lang.name}
            style={styles}
            className={clsx("chip", {
              lost: wrongGuessCount > index,
            })}
          >
            {lang.name}
          </span>
        );
      })}
    </section>
  );
}
