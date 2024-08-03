import { createContext, useState } from "react";

export const AppContext = createContext();

function AllContextProvider({ children }) {
  const [isPlayerOneMove, setIsPlayerOneMove] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  function togglePlayer() {
    setIsPlayerOneMove((prev) => !prev);
  }

  const value = {
    isPlayerOneMove,
    togglePlayer,
    isSoundOn,
    setIsSoundOn,
    isTimerPaused,
    setIsTimerPaused,
    isGameStarted,
    setIsGameStarted,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AllContextProvider;
