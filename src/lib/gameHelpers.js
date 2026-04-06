import { DEFAULT_LANGUAGE, GAME_DATA } from "./gameConfig";

export function getGameData(language = DEFAULT_LANGUAGE) {
  return GAME_DATA[language] || GAME_DATA[DEFAULT_LANGUAGE];
}

export function getNode(language, nodeId) {
  const data = getGameData(language);
  return data?.nodes?.[nodeId] || null;
}

export function getStartNodeId(language = DEFAULT_LANGUAGE) {
  const data = getGameData(language);
  return data?.startNodeId || "intro";
}

export function isValidNode(language, nodeId) {
  return Boolean(getNode(language, nodeId));
}

export function createInitialState(language = DEFAULT_LANGUAGE) {
  const startNodeId = getStartNodeId(language);

  return {
    language,
    currentNodeId: startNodeId,
    history: [startNodeId],
    unlockedEndings: [],
  };
}

export function normalizeLoadedState(rawState) {
  if (!rawState || typeof rawState !== "object") {
    return createInitialState(DEFAULT_LANGUAGE);
  }

  const language =
    rawState.language === "zh" || rawState.language === "en"
      ? rawState.language
      : DEFAULT_LANGUAGE;

  const fallback = createInitialState(language);

  const currentNodeId =
    typeof rawState.currentNodeId === "string" &&
    isValidNode(language, rawState.currentNodeId)
      ? rawState.currentNodeId
      : fallback.currentNodeId;

  const history = Array.isArray(rawState.history)
    ? rawState.history.filter(
        (id) => typeof id === "string" && isValidNode(language, id)
      )
    : [currentNodeId];

  const unlockedEndings = Array.isArray(rawState.unlockedEndings)
    ? [...new Set(rawState.unlockedEndings.filter((id) => typeof id === "string"))]
    : [];

  return {
    language,
    currentNodeId,
    history: history.length > 0 ? history : [currentNodeId],
    unlockedEndings,
  };
}