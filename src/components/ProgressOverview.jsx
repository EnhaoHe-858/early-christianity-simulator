function ProgressOverview({
  language,
  unlockedEndingCount,
  totalEndings,
  progressPercent,
  onResetProgress,
}) {
  const title = language === "zh" ? "探索进度" : "Exploration Progress";
  const summary =
    language === "zh"
      ? `已解锁 ${unlockedEndingCount} / ${totalEndings}`
      : `Unlocked ${unlockedEndingCount} / ${totalEndings}`;

  return (
    <section className="progress-overview">
      <div className="progress-overview__top">
        <div>
          <h3 className="panel-title">{title}</h3>
          <p className="progress-overview__summary">{summary}</p>
        </div>

        <button type="button" className="ghost-btn" onClick={onResetProgress}>
          {language === "zh" ? "清空记录" : "Reset"}
        </button>
      </div>

      <div className="progress-bar" aria-label={title}>
        <div
          className="progress-bar__fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <p className="progress-overview__percent">{progressPercent}%</p>
    </section>
  );
}

export default ProgressOverview;