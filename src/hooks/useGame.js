import { useEffect, useMemo, useState } from "react";
import { STORAGE_KEY } from "../lib/gameConfig";
import {
  createInitialState,
  getNode,
  normalizeLoadedState,
  isValidNode,
} from "../lib/gameHelpers";
import {
  getEndingLabel,
  getProgressPercent,
  getTotalEndingCount,
  isEndingNode,
} from "../lib/gameStats";

export function useGame() {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return createInitialState("en");
      return normalizeLoadedState(JSON.parse(raw));
    } catch {
      return createInitialState("en");
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore storage errors
    }
  }, [state]);

  const currentNode = useMemo(() => {
    return getNode(state.language, state.currentNodeId);
  }, [state.language, state.currentNodeId]);

  useEffect(() => {
    if (!currentNode) return;
    if (currentNode.type !== "ending") return;

    setState((prev) => {
      if (prev.unlockedEndings.includes(prev.currentNodeId)) return prev;

      return {
        ...prev,
        unlockedEndings: [...prev.unlockedEndings, prev.currentNodeId],
      };
    });
  }, [currentNode]);

  const setLanguage = (nextLanguage) => {
    setState((prev) => {
      if (nextLanguage !== "en" && nextLanguage !== "zh") return prev;

      const fallbackNodeId = createInitialState(nextLanguage).currentNodeId;
      const nextNodeId = isValidNode(nextLanguage, prev.currentNodeId)
        ? prev.currentNodeId
        : fallbackNodeId;

      const nextHistory = Array.isArray(prev.history)
        ? prev.history.filter((id) => isValidNode(nextLanguage, id))
        : [nextNodeId];

      return {
        ...prev,
        language: nextLanguage,
        currentNodeId: nextNodeId,
        history: nextHistory.length > 0 ? nextHistory : [nextNodeId],
      };
    });
  };

  const choose = (nextNodeId) => {
    setState((prev) => ({
      ...prev,
      currentNodeId: nextNodeId,
      history: [...prev.history, nextNodeId],
    }));
  };

  const goBack = () => {
    setState((prev) => {
      if (!prev.history || prev.history.length <= 1) {
        return prev;
      }

      const nextHistory = prev.history.slice(0, -1);
      const previousNodeId = nextHistory[nextHistory.length - 1];

      return {
        ...prev,
        currentNodeId: previousNodeId,
        history: nextHistory,
      };
    });
  };

  const restart = () => {
    setState((prev) => ({
      ...createInitialState(prev.language),
      unlockedEndings: prev.unlockedEndings,
    }));
  };

  const resetProgress = () => {
    setState((prev) => ({
      ...createInitialState(prev.language),
      unlockedEndings: [],
    }));
  };

  const canGoBack = state.history.length > 1;
  const totalEndings = getTotalEndingCount();
  const unlockedEndingCount = state.unlockedEndings.length;
  const progressPercent = getProgressPercent(unlockedEndingCount, totalEndings);

  const unlockedEndingLabels = state.unlockedEndings.map((endingId) => ({
    id: endingId,
    label: getEndingLabel(state.language, endingId),
    isCurrent: endingId === state.currentNodeId && isEndingNode(state.language, endingId),
  }));

  return {
    language: state.language,
    currentNode,
    currentNodeId: state.currentNodeId,
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
  };
}