import { useState } from "react";
import EndingCollection from "./components/EndingCollection";
import GameHeader from "./components/GameHeader";
import ProgressOverview from "./components/ProgressOverview";
import SceneCard from "./components/SceneCard";
import { useGame } from "./hooks/useGame";

function LandingPage({ language, onLanguageChange, onStart }) {
  const content = {
    zh: {
      title: "早期基督教模拟器",
      subtitle: "三位一体如何成为正统",
      intro: [
        "本游戏以公元一至四世纪的基督教发展为背景，通过分支选择的方式，模拟不同神学立场如何形成并走向各自的历史结局。",
        "你将扮演一位身处其中的普通人，在有限的信息与处境中作出选择，这些选择对应当时真实存在的思想路径。",
        "本游戏不对各立场作价值判断，而是呈现早期基督教内部多样且相互竞争的解释传统。建议多次尝试不同路径，以理解各立场背后的逻辑与分歧。",
      ],
      author: "作者：何恩豪",
      start: "开始游戏",
      lang: "语言切换",
    },
    en: {
      title: "Early Christianity Simulator",
      subtitle: "How the Trinity Became Orthodox",
      intro: [
        "This game is set in the development of Christianity from the 1st to the 4th century. Through branching choices, it simulates how different theological positions emerged and led to distinct historical outcomes.",
        "You take the role of an ordinary person within this world, making decisions under limited knowledge and circumstances. Each choice corresponds to a real historical trajectory.",
        "The game does not judge which position is correct. Instead, it presents the diversity of competing interpretations within early Christianity. Exploring multiple paths will help you understand the logic behind each tradition.",
      ],
      author: "Author: Enhao He",
      start: "Start Game",
      lang: "Language switch",
    },
  }[language];

  return (
    <main className="landing-shell">
      <div className="landing-card fade-in">
        <div className="landing-topbar">
          <span className="landing-badge">
            {language === "zh" ? "历史模拟小游戏" : "Historical Narrative Game"}
          </span>

          <div className="landing-lang" role="group" aria-label={content.lang}>
            {["en", "zh"].map((lang) => (
              <button
                key={lang}
                type="button"
                className={`lang-switch__btn ${
                  language === lang ? "lang-switch__btn--active" : ""
                }`}
                onClick={() => onLanguageChange(lang)}
              >
                {lang === "zh" ? "中文" : "English"}
              </button>
            ))}
          </div>
        </div>

        <h1 className="landing-title">{content.title}</h1>
        <p className="landing-subtitle">{content.subtitle}</p>

        <section className="landing-section">
          <h2 className="landing-section__title">
            {language === "zh" ? "游戏说明" : "Game Introduction"}
          </h2>
          <div className="landing-text">
            {content.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <p className="landing-author">{content.author}</p>

        <button type="button" className="landing-start" onClick={onStart}>
          {content.start}
        </button>
      </div>
    </main>
  );
}

function App() {
  const {
    language,
    currentNode,
    choose,
    goBack,
    restart,
    resetProgress,
    setLanguage,
    canGoBack,
    totalEndings,
    unlockedEndingCount,
    progressPercent,
    unlockedEndingLabels,
  } = useGame();

  const [hasEnteredGame, setHasEnteredGame] = useState(false);

  const handleRestart = () => {
    restart();
  };

  const handleStart = () => {
    setHasEnteredGame(true);
    choose("prologue");
  };

  if (!hasEnteredGame) {
    return (
      <LandingPage
        language={language}
        onLanguageChange={setLanguage}
        onStart={handleStart}
      />
    );
  }

  return (
    <div className="app-shell">
      <div className="app-background" />

      <main className="app-container app-container--in-game">
        <GameHeader
          language={language}
          onLanguageChange={setLanguage}
          onBack={goBack}
          onRestart={handleRestart}
          canGoBack={canGoBack}
        />

        <div className="content-layout fade-in">
          <div className="content-main">
            <SceneCard
              node={currentNode}
              onChoose={choose}
              language={language}
            />
          </div>

          <aside className="content-side">
            <ProgressOverview
              language={language}
              unlockedEndingCount={unlockedEndingCount}
              totalEndings={totalEndings}
              progressPercent={progressPercent}
              onResetProgress={resetProgress}
            />

            <EndingCollection
              language={language}
              unlockedEndingLabels={unlockedEndingLabels}
              unlockedEndingCount={unlockedEndingCount}
              totalEndings={totalEndings}
            />
          </aside>
        </div>

        <footer className="game-footer">
          <p>
            {language === "zh"
              ? "Version 1.0"
              : "Version 1.0"}
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;