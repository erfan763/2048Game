import { Box, Button, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { bgcolor } from "../utils";
import { moveUp } from "../utils/moveUp";
import { moveDown } from "../utils/moveDown";
import { moveLeft } from "../utils/moveLeft";
import { moveRight } from "../utils/moveright";
import { gameOver } from "../utils/gameOver";
import { afterEveryMove, startGame } from "../utils/generateNumber";
import usePrevious from "../hooks/usePrevious";

export default function Main() {
  const [data, setData] = useState<number[][]>([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  const [isGameOver, setIsGameOver] = useState<boolean>(true);

  // const d = usePrevious(data);

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
  }, [data]);
  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode === 38) {
      const canMoveResp = moveUp(data, setData);
      const resp = gameOver(data);
      if (!resp && canMoveResp) {
        afterEveryMove(data, setData);
      }

      console.log("up arrow pressed");
    } else if (e.keyCode === 40) {
      const canMoveResp = moveDown(data, setData);
      const resp = gameOver(data);
      if (!resp && canMoveResp) {
        afterEveryMove(data, setData);
      }
      console.log("down arrow pressed");
    } else if (e.keyCode === 37) {
      const canMoveResp = moveLeft(data, setData);
      const resp = gameOver(data);
      if (!resp && canMoveResp) {
        afterEveryMove(data, setData);
      }
      console.log("left arrow pressed");
    } else if (e.keyCode === 39) {
      const canMoveResp = moveRight(data, setData);
      const resp = gameOver(data);
      if (!resp && canMoveResp) {
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
                    sx={{
                      animationName: "example",
                      animationDuration: "4s",
                    }}
                    color="#FFFFFF"
                    key={j}
                    borderRadius="10px"
                    m="2px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="75px"
                    height="100%"
                    fontWeight="700"
                    fontSize="16px"
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
        // disabled={!isGameOver}
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
      <Button
        disabled={!isGameOver}
        onClick={() => {}}
        sx={{ mt: 4 }}
        variant="contained"
      >
        Back
      </Button>
    </Box>
  );
}
