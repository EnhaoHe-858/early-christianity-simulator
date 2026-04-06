import { LANGUAGE_LABELS } from "../lib/gameConfig";

function GameHeader({ language, onLanguageChange, onBack, onRestart, canGoBack }) {
  return (
    <header className="game-toolbar">
      <div className="lang-switch" role="group" aria-label="Language switch">
        {["en", "zh"].map((lang) => (
          <button
            key={lang}
            type="button"
            className={`lang-switch__btn ${
              language === lang ? "lang-switch__btn--active" : ""
            }`}
            onClick={() => onLanguageChange(lang)}
          >
            {LANGUAGE_LABELS[lang]}
          </button>
        ))}
      </div>

      <div className="game-toolbar__actions">
        <button
          type="button"
          className="secondary-btn"
          onClick={onBack}
          disabled={!canGoBack}
        >
          {language === "zh" ? "返回上一步" : "Back"}
        </button>

        <button type="button" className="secondary-btn" onClick={onRestart}>
          {language === "zh" ? "重置" : "Reset"}
        </button>
      </div>
    </header>
  );
}

export default GameHeader;
