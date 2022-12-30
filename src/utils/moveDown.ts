export const moveDown = (
  data: number[][],
  setData: React.Dispatch<React.SetStateAction<number[][]>>,
  setCanMoveDown: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let copy = [...data];

  let modified = [
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
          setCanMoveDown(true);
        }
      } else setCanMoveDown(false);
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
            setCanMoveDown(true);
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
            setCanMoveDown(true);
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
            setCanMoveDown(true);
          }
        }
      }
      setData(copy);
    }
  }
};

export const updateDownMove = (
  data: number[][],
  setData: React.Dispatch<React.SetStateAction<number[][]>>,
  setCanMoveDown: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let copy = [...data];

  for (let i = data.length - 1; i < data.length && -1 < i; i--) {
    for (let j = data[i].length - 1; j < data[i].length && -1 < j; j--) {
      if (data[4][j] === 0 && copy[3][j] !== 0) {
        copy[4][j] = copy[3][j];
        copy[3][j] = copy[2][j];
        copy[2][j] = copy[1][j];
        copy[1][j] = copy[0][j];
        copy[0][j] = 0;
        // setCanMoveDown(true);
      }
      if (data[3][j] === 0 && copy[2][j] !== 0) {
        copy[3][j] = copy[2][j];
        copy[2][j] = copy[1][j];
        copy[1][j] = copy[0][j];
        copy[0][j] = 0;
        // setCanMoveDown(true);
      }
      if (data[2][j] === 0 && copy[1][j] !== 0) {
        copy[2][j] = copy[1][j];
        copy[1][j] = copy[2][j];
        copy[1][j] = 0;
        // setCanMoveDown(true);
      }
      if (data[1][j] === 0 && copy[0][j] !== 0) {
        copy[1][j] = copy[0][j];
        copy[0][j] = 0;
        // setCanMoveDown(true);
      }
      setData(copy);
    }
  }
};
