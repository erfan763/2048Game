export const moveUp = (
  data: number[][],
  setData: React.Dispatch<React.SetStateAction<number[][]>>
) => {
  let copy = [...data];

  let modified = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (i !== 4 && data[i][j] === data[i + 1][j]) {
        if (modified[i][j] === 0) {
          copy[i][j] = copy[i][j] + copy[i + 1][j];
          copy[i + 1][j] = 0;

          modified[i][j] = copy[i][j];
        }
      }
      if (i !== 4 && i !== 3 && data[i][j] === data[i + 2][j]) {
        if (data[i + 1][j] === 0) {
          if (modified[i][j] === 0) {
            copy[i][j] = copy[i][j] + copy[i + 2][j];
            copy[i + 2][j] = 0;
            modified[i][j] = copy[i][j];
          }
        }
      }
      if (i !== 4 && i !== 3 && i !== 2 && data[i][j] === data[i + 3][j]) {
        if (data[i + 1][j] === 0 && data[i + 2][j] === 0) {
          if (modified[i][j] === 0) {
            copy[i][j] = copy[i][j] + copy[i + 3][j];
            copy[i + 3][j] = 0;
            modified[i][j] = copy[i][j];
          }
        }
      }
      if (i === 0 && data[i][j] === data[i + 4][j]) {
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
      setData(copy);
    }
  }
};
export const updateUpMove = (
  data: number[][],
  setData: React.Dispatch<React.SetStateAction<number[][]>>
) => {
  let copy = [...data];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[0][j] === 0) {
        copy[0][j] = copy[1][j];
        copy[1][j] = copy[2][j];
        copy[2][j] = copy[3][j];
        copy[3][j] = copy[4][j];
        copy[4][j] = 0;
      }
      if (data[1][j] === 0) {
        copy[1][j] = copy[2][j];
        copy[2][j] = copy[3][j];
        copy[3][j] = copy[4][j];
        copy[4][j] = 0;
      }
      if (data[2][j] === 0) {
        copy[2][j] = copy[3][j];
        copy[3][j] = copy[4][j];
        copy[4][j] = 0;
      }
      if (data[3][j] === 0) {
        copy[3][j] = copy[4][j];
        copy[4][j] = 0;
      }
      setData(copy);
    }
  }
};
