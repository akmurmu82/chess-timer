import { Flex, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AllContext";

function Timer({ isTimerRunning, playerName }) {
  // const [moves, setMoves] = useState(0);
  // const [minutes, setMinutes] = useState(2);
  // const [seconds, setSeconds] = useState(0);
  const [timerState, setTimerState] = useState({
    minutes: 2,
    seconds: 0,
    moves: 0,
  });
  const moveSound = new Audio("../../public/move.mp3"); // Ensure this path is correct
  // moveSound.play();
  // const timeUpSound = new Audio("/assets/timeup.mp3");

  const { isGameStarted, setIsGameStarted, togglePlayer } =
    useContext(AppContext);

  console.log(playerName, isGameStarted, isTimerRunning);

  useEffect(() => {
    if (!isGameStarted) return;
    if (!isTimerRunning) return;

    const timerId = setInterval(() => {
      setTimerState((prev) => {
        let { minutes, seconds } = prev;
        if (minutes === 0 && seconds === 0) {
          // timeUpSound.play();
          clearInterval(timerId);
        } else if (seconds === 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        } else {
          return { ...prev, seconds: seconds - 1 };
        }
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isGameStarted, isTimerRunning, timerState]);

  function handleClick() {
    if (!isGameStarted) {
      setIsGameStarted(!isGameStarted);
    }
    togglePlayer();
    moveSound.play();
    setTimerState((prev) => ({ ...prev, moves: prev.moves + 1 }));
  }

  return (
    <VStack
      bg={isGameStarted && isTimerRunning ? "#42b72a" : "#b7cbd4"}
      color="#fff"
      onClick={handleClick}
      h={"46%"}
    >
      <Flex>
        <Text>Moves: {timerState.moves}</Text>
        <Text>Player Name: {playerName}</Text>
      </Flex>
      <Text fontSize={{ base: "xl", lg: "150px" }}>
        {timerState.minutes}:{timerState.seconds < 10 ? `0${timerState.seconds}` : timerState.seconds}
      </Text>
    </VStack>
  );
}

export default Timer;
