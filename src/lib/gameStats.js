import { GAME_DATA } from "./gameConfig";

export function getCanonicalLanguage() {
  return "en";
}

export function getAllNodes() {
  const lang = getCanonicalLanguage();
  return GAME_DATA[lang]?.nodes || {};
}

export function getEndingNodes() {
  const nodes = getAllNodes();
  return Object.values(nodes).filter((node) => node?.type === "ending");
}

export function getTotalEndingCount() {
  return getEndingNodes().length;
}

export function isEndingNode(language, nodeId) {
  const nodes = GAME_DATA[language]?.nodes || {};
  return nodes[nodeId]?.type === "ending";
}

export function getEndingLabel(language, endingId) {
  const nodes = GAME_DATA[language]?.nodes || {};
  const node = nodes[endingId];
  return node?.ending?.label || node?.title || endingId;
}

export function getProgressPercent(unlockedCount, totalCount) {
  if (!totalCount) return 0;
  return Math.round((unlockedCount / totalCount) * 100);
}