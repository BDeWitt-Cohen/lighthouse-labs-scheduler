import { useState } from "react";

export default function useVisualMode(initial) {
//history => history === prev => prev
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {

    if (replace) {
      setHistory(history => [...history.slice(0, history.length - 1), newMode]);
    }
    else {
      setHistory(history => [...history, newMode]);
    }
  }

  const back = () => {
    setHistory(history => history.slice(0, history.length - 1));
  };

  return { mode: history[history.length - 1], transition, back };
}