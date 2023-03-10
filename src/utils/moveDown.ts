export const moveDown = (
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

  for (let i = data.length - 1; i < data.length && -1 < i; i--) {
    for (let j = data[i].length - 1; j < data[i].length && -1 < j; j--) {
      if (
        i !== 4 &&
        data[i][j] === data[i + 1][j] &&
        data[i][j] !== 0 &&
        data[i + 1][j] !== 0
      ) {
        if (modified[i][j] === 0) {
          copy[i + 1][j] = copy[i][j] + copy[i + 1][j];
          copy[i][j] = 0;

          modified[i + 1][j] = copy[i + 1][j];
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
            copy[i + 2][j] = copy[i][j] + copy[i + 2][j];
            copy[i][j] = 0;

            modified[i + 2][j] = copy[i + 2][j];
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
            copy[i + 3][j] = copy[i][j] + copy[i + 3][j];
            copy[i][j] = 0;

            modified[i + 3][j] = copy[i + 3][j];
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
            copy[i + 4][j] = copy[i][j] + copy[i + 4][j];
            copy[i][j] = 0;

            modified[i + 4][j] = copy[i + 4][j];
          }
        }
      }
    }
  }
  for (let i = data.length - 1; i < data.length && -1 < i; i--) {
    for (let j = data[i].length - 1; j < data[i].length && -1 < j; j--) {
      if (data[4][j] === 0 && copy[3][j] !== 0) {
        copy[4][j] = copy[3][j];
        copy[3][j] = copy[2][j];
        copy[2][j] = copy[1][j];
        copy[1][j] = copy[0][j];
        copy[0][j] = 0;
        modified[0][0] = 3;
      }
      if (data[3][j] === 0 && copy[2][j] !== 0) {
        copy[3][j] = copy[2][j];
        copy[2][j] = copy[1][j];
        copy[1][j] = copy[0][j];
        copy[0][j] = 0;
        modified[0][0] = 5;
      }
      if (data[2][j] === 0 && copy[1][j] !== 0) {
        copy[2][j] = copy[1][j];
        copy[1][j] = copy[2][j];
        copy[1][j] = 0;
        modified[0][0] = 7;
      }
      if (data[1][j] === 0 && copy[0][j] !== 0) {
        copy[1][j] = copy[0][j];
        copy[0][j] = 0;
        modified[0][0] = 9;
      }
    }
  }
  console.log(JSON.stringify(modified) === JSON.stringify(checkModifier));
  if (JSON.stringify(modified) === JSON.stringify(checkModifier)) {
    setData(copy);
    return false;
  }
  setBackData((prev) => [...prev, ...copy2]);
  setData(copy);
  return true;
};
