import { useState } from "react";

//Custom hook to deal with the stack of actions done by the user, used in index.js
export default function useVisualMode(initial) {

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
};