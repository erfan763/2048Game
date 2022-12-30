export const moveLeft = (
  data: number[][],
  setData: React.Dispatch<React.SetStateAction<number[][]>>,
  setCanMoveLeft: React.Dispatch<React.SetStateAction<boolean>>
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
      if (
        j !== 4 &&
        data[i][j] === data[i][j + 1] &&
        data[i][j] !== 0 &&
        data[i][j + 1] !== 0
      ) {
        if (modified[i][j] === 0) {
          copy[i][j] = copy[i][j] + copy[i][j + 1];
          copy[i][j + 1] = 0;

          modified[i][j] = copy[i][j];
          setCanMoveLeft(true);
        }
      } else setCanMoveLeft(false);
      if (
        j !== 4 &&
        j !== 3 &&
        data[i][j] === data[i][j + 2] &&
        data[i][j] !== 0 &&
        data[i][j + 2] !== 0
      ) {
        if (data[i][j + 1] === 0) {
          if (modified[i][j] === 0) {
            copy[i][j] = copy[i][j] + copy[i][j + 2];
            copy[i][j + 2] = 0;

            modified[i][j] = copy[i][j];
            setCanMoveLeft(true);
          }
        }
      }
      if (
        j !== 4 &&
        j !== 3 &&
        j !== 2 &&
        data[i][j] === data[i][j + 3] &&
        data[i][j] !== 0 &&
        data[i][j + 3] !== 0
      ) {
        if (data[i][j + 1] === 0 && data[i][j + 2] === 0) {
          if (modified[i][j] === 0) {
            copy[i][j] = copy[i][j] + copy[i][j + 3];
            copy[i][j + 3] = 0;

            modified[i][j] = copy[i][j];
            setCanMoveLeft(true);
          }
        }
      }

      if (
        j === 0 &&
        data[i][j] === data[i][j + 4] &&
        data[i][j] !== 0 &&
        data[i][j + 4] !== 0
      ) {
        if (
          data[i][j + 1] === 0 &&
          data[i][j + 2] === 0 &&
          data[i][j + 3] === 0
        ) {
          if (modified[i][j] === 0) {
            copy[i][j] = copy[i][j] + copy[i][j + 4];
            copy[i][j + 4] = 0;

            modified[i][j] = copy[i][j];
            setCanMoveLeft(true);
          }
        }
      }
      setData(copy);
    }
  }
};

export const updateLeftMove = (
  data: number[][],
  setData: React.Dispatch<React.SetStateAction<number[][]>>
) => {
  let copy = [...data];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][3] === 0 && data[i][4] !== 0) {
        copy[i][3] = copy[i][4];
        copy[i][4] = 0;
      }
      if (data[i][2] === 0 && data[i][3] !== 0) {
        copy[i][2] = copy[i][3];
        copy[i][3] = 0;
      }
      if (data[i][1] === 0 && data[i][2] !== 0) {
        copy[i][1] = copy[i][2];
        copy[i][2] = 0;
      }
      if (data[i][0] === 0 && data[i][1] !== 0) {
        copy[i][0] = copy[i][1];
        copy[i][1] = 0;
      }
      setData(copy);
    }
  }
};
