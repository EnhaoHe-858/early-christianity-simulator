function EndingCollection({
  language,
  unlockedEndingLabels,
  unlockedEndingCount,
  totalEndings,
}) {
  const title = language === "zh" ? "已解锁结局" : "Unlocked Endings";

  const subtitle =
    language === "zh"
      ? `已收集 ${unlockedEndingCount} / ${totalEndings}`
      : `Collected ${unlockedEndingCount} / ${totalEndings}`;

  const emptyText =
    language === "zh"
      ? "还没有解锁任何结局。"
      : "No endings unlocked yet.";

  return (
    <aside className="ending-collection">
      <div className="ending-collection__head">
        <h3 className="panel-title">{title}</h3>
        <p className="ending-collection__subtitle">{subtitle}</p>
      </div>

      {unlockedEndingLabels.length === 0 ? (
        <p className="ending-collection__empty">{emptyText}</p>
      ) : (
        <div className="ending-grid">
          {unlockedEndingLabels.map((item, index) => (
            <div
              key={item.id}
              className={`ending-tile ${
                item.isCurrent ? "ending-tile--current" : ""
              }`}
            >
              <div className="ending-tile__index">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="ending-tile__label">{item.label}</div>
              {item.isCurrent && <div className="ending-tile__active-dot" />}
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default EndingCollection;
