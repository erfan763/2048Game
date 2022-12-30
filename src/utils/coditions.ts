export const canNotMoveUp = (
  data: number[][],
  setCanMoveUp: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const a = data.find((v, i) =>
    v.find((b, j) => i !== 4 && data[i][j] === data[i + 1][j])
  );
  const b = data.find((v, i) =>
    v.find(
      (b, j) =>
        i !== 4 &&
        i !== 3 &&
        data[i + 1][j] === 0 &&
        data[i][j] === data[i + 2][j]
    )
  );
  const c = data.find((v, i) =>
    v.find(
      (b, j) =>
        i !== 4 &&
        i !== 3 &&
        i !== 2 &&
        data[i + 1][j] === 0 &&
        data[i + 2][j] === 0 &&
        data[i][j] === data[i + 3][j]
    )
  );
  const d = data.find((v, i) =>
    v.find(
      (b, j) =>
        i === 0 &&
        data[i + 1][j] === 0 &&
        data[i + 2][j] === 0 &&
        data[i + 3][j] === 0 &&
        data[i][j] === data[i + 4][j]
    )
  );
  const e = data.find((v, i) =>
    v.find(
      (b, j) =>
        i !== 4 && i !== 3 && data[i + 1][j] === 0 && data[i + 2][j] !== 0
    )
  );
  const f = data.find((v, i) =>
    v.find(
      (b, j) =>
        i !== 4 &&
        i !== 3 &&
        i !== 2 &&
        data[i + 1][j] === 0 &&
        data[i + 2][j] === 0 &&
        data[i + 3][j] !== 0
    )
  );
  const g = data.find((v, i) =>
    v.find(
      (b, j) =>
        i === 0 &&
        data[i + 1][j] === 0 &&
        data[i + 2][j] === 0 &&
        data[i + 3][j] === 0 &&
        data[i + 4][j] !== 0
    )
  );

  if (!a && !b && !c && !d && !e && !f && !g) {
    setCanMoveUp(false);
  } else setCanMoveUp(true);

  console.log(a, b, c, d, e, f, g);
};
