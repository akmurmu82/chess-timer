import { useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Timer from "./components/Timer";
import { FaPlay, FaPause } from "react-icons/fa";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { LuCalendarClock } from "react-icons/lu";
import { AppContext } from "./context/AllContext";

function App() {
  const {
    isPlayerOneMove,
    isTimerPaused,
    setIsTimerPaused,
    isSoundOn,
    setIsSoundOn,
    setIsGameStarted,
  } = useContext(AppContext);

  function handleResetTimer() {
    setIsTimerPaused((prev) => !prev);
    setIsGameStarted((prev) => !prev);
  }

  function handlePauseAndPlay() {
    setIsTimerPaused((prev) => !prev);
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      <Box
        w={{ base: "100vw", lg: "30vw" }}
        h={"100vh"}
        bg={"#f3f3f3"}
        m="auto"
        border="1px solid"
      >
        <Timer isTimerRunning={!isPlayerOneMove} playerName={"Player 1"} />
        <Flex
          border="1px solid"
          bg={"#2b3745"}
          m={"auto"}
          h={"8vh"}
          justifyContent={"space-around"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Flex>
            <IconButton
              _hover={{ bg: "transparent" }}
              color="#fff"
              bg={"transparent"}
              mr={5}
              fontSize={30}
              onClick={handlePauseAndPlay}
              aria-label="play pause"
              icon={isTimerPaused ? <FaPlay /> : <FaPause />}
            />
            <IconButton
              _hover={{ bg: "transparent" }}
              color="#fff"
              bg={"transparent"}
              mr={5}
              fontSize={30}
              onClick={handleResetTimer}
              aria-label="reset button"
              icon={<GiAnticlockwiseRotation />}
            />
          </Flex>
          <Flex>
            <IconButton
              _hover={{ bg: "transparent" }}
              color="#fff"
              bg={"transparent"}
              mr={5}
              fontSize={30}
              aria-label="edit timer"
              icon={<LuCalendarClock />}
            />
            <IconButton
              _hover={{ bg: "transparent" }}
              color="#fff"
              bg={"transparent"}
              mr={5}
              fontSize={30}
              onClick={() => setIsSoundOn((prev) => !prev)}
              aria-label="speaker"
              icon={isSoundOn ? <HiMiniSpeakerWave /> : <HiMiniSpeakerXMark />}
            />
          </Flex>
        </Flex>
        <Timer isTimerRunning={isPlayerOneMove} playerName={"Player 2"} />
      </Box>
    </>
  );
}

export default App;
