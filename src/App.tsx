import { Box } from "@mui/material";
import { useMemo, useState } from "react";
import { afterEveryMove, bgcolor, startGame } from "./utils";
import { moveUp, updateUpMove } from "./utils/moveUp";
import { moveDown, updateDownMove } from "./utils/moveDown";
import { moveLeft, updateLeftMove } from "./utils/moveLeft";
import { moveRight, updateRightMove } from "./utils/moveright";

function App() {
  const [data, setData] = useState<number[][]>([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  useMemo(() => {
    const isAllZero = data.every((v, i) => v.every((d, j) => d === 0));
    if (isAllZero) {
      startGame(data, setData);
      startGame(data, setData);
    }
  }, []);

  // useMemo(() => {}, []);

  document.onkeydown = async (e) => {
    e = e || window.event;
    if (e.keyCode === 38) {
      await moveUp(data, setData);
      updateUpMove(data, setData);
      afterEveryMove(data, setData);
      console.log("up arrow pressed");
    } else if (e.keyCode === 40) {
      await moveDown(data, setData);
      updateDownMove(data, setData);
      afterEveryMove(data, setData);
      console.log("down arrow pressed");
    } else if (e.keyCode === 37) {
      await moveLeft(data, setData);
      updateLeftMove(data, setData);
      afterEveryMove(data, setData);
      console.log("left arrow pressed");
    } else if (e.keyCode === 39) {
      await moveRight(data, setData);
      updateRightMove(data, setData);
      afterEveryMove(data, setData);
      console.log("right arrow pressed");
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="387px" height="387px" borderRadius="10px" bgcolor="#CACFD2">
        {data?.map((v, i) => {
          return (
            <Box
              key={i}
              height="75px"
              m="2px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {v?.map((d, j) => {
                return (
                  <Box
                    bgcolor={bgcolor(d) || "unset"}
                    color="#FFFFFF"
                    key={j}
                    borderRadius="10px"
                    m="2px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="75px"
                    height="100%"
                  >
                    {d !== 0 ? d : ""}
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default App;
