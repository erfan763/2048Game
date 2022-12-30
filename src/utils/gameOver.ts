export const gameOver = (data: number[][]) => {
  const haveZero = data?.map((v, i) => v?.filter((b, j) => b === 0));
  if (
    haveZero[0].length === 0 &&
    haveZero[1].length === 0 &&
    haveZero[2].length === 0 &&
    haveZero[3].length === 0 &&
    haveZero[4].length === 0
  ) {
    const r = data.find((v, i) =>
      v.find((b, j) => i !== 4 && data[i][j] === data[i + 1][j])
    );
    const b = data.find((v, i) =>
      v.find((b, j) => j !== 4 && data[i][j] === data[i][j + 1])
    );
    if (!r && !b) {
      return true;
    }
  }
  return false;
};
