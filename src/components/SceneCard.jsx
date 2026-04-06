import ChoiceList from "./ChoiceList";

function SceneCard({ node, onChoose, language }) {
  if (!node) {
    return (
      <section className="scene-card fade-in">
        <h2 className="scene-title">
          {language === "zh" ? "内容未找到" : "Content not found"}
        </h2>
        <p className="scene-paragraph">
          {language === "zh"
            ? "当前节点不存在。请返回上一步或重新开始。"
            : "This node does not exist. Please go back or restart."}
        </p>
      </section>
    );
  }

  const isEnding = node.type === "ending";

  return (
    <section className={`scene-card fade-in ${isEnding ? "scene-card--ending" : ""}`}>
      <div className="scene-card__inner">
        <div className="scene-card__meta">
          {isEnding && (
            <span className="ending-badge">
              {language === "zh" ? "结局" : "Ending"}
            </span>
          )}
        </div>

        <h2 className="scene-title">
          {isEnding && node.ending?.label ? node.ending.label : node.title}
        </h2>

        <div className="scene-body">
          {node.text?.map((paragraph, index) => (
            <p key={`${node.id}-p-${index}`} className="scene-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <ChoiceList choices={node.choices} onChoose={onChoose} />
      </div>
    </section>
  );
}

export default SceneCard;
