import { Box, Button, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { bgcolor } from "./utils";
import { moveUp, updateUpMove } from "./utils/moveUp";
import { moveDown, updateDownMove } from "./utils/moveDown";
import { moveLeft, updateLeftMove } from "./utils/moveLeft";
import { moveRight, updateRightMove } from "./utils/moveright";
import { gameOver } from "./utils/gameOver";
import { afterEveryMove, startGame } from "./utils/generateNumber";
import { canNotMoveUp } from "./utils/coditions";

function App() {
  const [data, setData] = useState<number[][]>([
    [2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0],
  ]);

  const [isGameOver, setIsGameOver] = useState<boolean>(true);
  const [canMoveUp, setCanMoveUp] = useState<boolean>(true);
  const [canMoveDown, setCanMoveDown] = useState<boolean>(true);
  const [canMoveRight, setCanMoveRight] = useState<boolean>(true);
  const [canMoveLeft, setCanMoveLeft] = useState<boolean>(true);

  useMemo(() => {
    const isAllZero = data.every((v, i) => v.every((d, j) => d === 0));
    if (isAllZero) {
      startGame(data, setData);
      startGame(data, setData);
    }
  }, [data]);

  useEffect(() => {
    const resp = gameOver(data);
    setIsGameOver(resp);

    console.log(canMoveUp, "up");
    console.log(canMoveDown, "down");
    console.log(canMoveRight, "right");
    console.log(canMoveLeft, "left");

    // const r = canNotMoveUp(data);
    // setDontMoveDown(r);
    // console.log(canNotMoveUp(data));
  }, [data]);

  document.onkeydown = async (e) => {
    e = e || window.event;
    if (e.keyCode === 38) {
      await moveUp(data, setData);
      updateUpMove(data, setData);
      canNotMoveUp(data, setCanMoveUp);
      const resp = gameOver(data);
      if (!resp && canMoveUp) {
        afterEveryMove(data, setData);
      }
      console.log("up arrow pressed");
    } else if (e.keyCode === 40) {
      await moveDown(data, setData, setCanMoveDown);
      updateDownMove(data, setData, setCanMoveDown);

      const resp = gameOver(data);
      if (!resp && canMoveDown) {
        afterEveryMove(data, setData);
      }
      console.log("down arrow pressed");
    } else if (e.keyCode === 37) {
      await moveLeft(data, setData, setCanMoveLeft);
      updateLeftMove(data, setData);

      const resp = gameOver(data);
      if (!resp && canMoveLeft) {
        afterEveryMove(data, setData);
      }
      console.log("left arrow pressed");
    } else if (e.keyCode === 39) {
      await moveRight(data, setData, setCanMoveRight);
      updateRightMove(data, setData);
      const resp = gameOver(data);
      if (!resp && canMoveRight) {
        afterEveryMove(data, setData);
      }
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
      flexDirection="column"
    >
      <Box
        width="387px"
        height="387px"
        borderRadius="10px"
        bgcolor="#CACFD2"
        position="relative"
      >
        {isGameOver && (
          <>
            <Box
              position="absolute"
              width="100%"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="10px"
              bgcolor="#000000"
              sx={{ opacity: 0.5 }}
            >
              <Typography sx={{ opacity: 1 }} color="#FFFFFF" fontSize="24px">
                Game Over
              </Typography>
            </Box>
            <Box
              position="absolute"
              width="100%"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="10px"
            >
              <Typography sx={{ opacity: 1 }} color="#FFFFFF" fontSize="24px">
                Game Over
              </Typography>
            </Box>
          </>
        )}
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
      <Button
        disabled={!isGameOver}
        onClick={() =>
          setData([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ])
        }
        sx={{ mt: 4 }}
        variant="contained"
      >
        Reset
      </Button>
    </Box>
  );
}

export default App;
