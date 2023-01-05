import { useCallback, useMemo } from "react";

export const moveUp = (
  data: number[][],
  setData: React.Dispatch<React.SetStateAction<number[][]>>,
  setBackData: React.Dispatch<React.SetStateAction<number[][]>>
) => {
  let copy = [...data];

  const copy2 = copy.map((item) => item.slice());

  let modified = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  let checkModifier = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  // setBackData((prev) => [...prev, ...copy]);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (
        i !== 4 &&
        data[i][j] === data[i + 1][j] &&
        data[i][j] !== 0 &&
        data[i + 1][j] !== 0
      ) {
        if (modified[i][j] === 0) {
          copy[i][j] = copy[i][j] + copy[i + 1][j];
          copy[i + 1][j] = 0;

          modified[i][j] = copy[i][j];
        }
      }
      if (
        i !== 4 &&
        i !== 3 &&
        data[i][j] === data[i + 2][j] &&
        data[i][j] !== 0 &&
        data[i + 2][j] !== 0
      ) {
        if (data[i + 1][j] === 0) {
          if (modified[i][j] === 0) {
            copy[i][j] = copy[i][j] + copy[i + 2][j];
            copy[i + 2][j] = 0;
            modified[i][j] = copy[i][j];
          }
        }
      }
      if (
        i !== 4 &&
        i !== 3 &&
        i !== 2 &&
        data[i][j] === data[i + 3][j] &&
        data[i][j] !== 0 &&
        data[i + 3][j] !== 0
      ) {
        if (data[i + 1][j] === 0 && data[i + 2][j] === 0) {
          if (modified[i][j] === 0) {
            copy[i][j] = copy[i][j] + copy[i + 3][j];
            copy[i + 3][j] = 0;
            modified[i][j] = copy[i][j];
          }
        }
      }
      if (
        i === 0 &&
        data[i][j] === data[i + 4][j] &&
        data[i][j] !== 0 &&
        data[i + 4][j] !== 0
      ) {
        if (
          data[i + 1][j] === 0 &&
          data[i + 2][j] === 0 &&
          data[i + 3][j] === 0
        ) {
          if (modified[i][j] === 0) {
            copy[i][j] = copy[i][j] + copy[i + 4][j];
            copy[i + 4][j] = 0;
            modified[i][j] = copy[i][j];
          }
        }
      }
    }
  }
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[0][j] === 0 && copy[1][j] !== 0) {
        copy[0][j] = copy[1][j];
        copy[1][j] = copy[2][j];
        copy[2][j] = copy[3][j];
        copy[3][j] = copy[4][j];
        copy[4][j] = 0;
        modified[0][0] = 3;
      }
      if (data[1][j] === 0 && copy[2][j]! !== 0) {
        copy[1][j] = copy[2][j];
        copy[2][j] = copy[3][j];
        copy[3][j] = copy[4][j];
        copy[4][j] = 0;
        modified[0][0] = 5;
      }
      if (data[2][j] === 0 && copy[3][j] !== 0) {
        copy[2][j] = copy[3][j];
        copy[3][j] = copy[4][j];
        copy[4][j] = 0;
        modified[0][0] = 7;
      }
      if (data[3][j] === 0 && copy[4][j] !== 0) {
        copy[3][j] = copy[4][j];
        copy[4][j] = 0;
        modified[0][0] = 9;
      }
    }
  }

  if (JSON.stringify(modified) === JSON.stringify(checkModifier)) {
    setData(copy);
    return false;
  }
  setBackData((prev) => [...prev, ...copy2]);
  setData(copy);
  return true;
};
