function ChoiceList({ choices = [], onChoose }) {
  if (!choices.length) return null;

  return (
    <div className="choice-list">
      {choices.map((choice) => (
        <button
          key={choice.id}
          type="button"
          className="choice-card"
          onClick={() => onChoose(choice.nextId)}
        >
          <span className="choice-card__text">{choice.label}</span>
          <span className="choice-card__arrow" aria-hidden="true">
            →
          </span>
        </button>
      ))}
    </div>
  );
}

export default ChoiceList;