export const startGame = (
  data: number[][],
  setData: React.Dispatch<React.SetStateAction<number[][]>>
) => {
  const randomNumber = [2, 4];
  const firstNumber = Math.floor(Math.random() * (4 + 1));
  const secondNumber = Math.floor(Math.random() * (4 + 1));
  const chooseRandomNumber = Math.floor(Math.random() * (1 + 1));
  let copy = [...data];
  copy[firstNumber][secondNumber] = randomNumber[chooseRandomNumber];
  setData(copy);
};

export const afterEveryMove = (
  data: number[][],
  setData: React.Dispatch<React.SetStateAction<number[][]>>
) => {
  let copy = [...data];
  const randomNumber = [2, 4];
  const chooseRandomNumber = Math.floor(Math.random() * (1 + 1));

  let result = false;

  do {
    const firstNumber = Math.floor(Math.random() * (4 + 1));
    const secondNumber = Math.floor(Math.random() * (4 + 1));
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (data[secondNumber][firstNumber] === 0) {
          // console.log(data[secondNumber][firstNumber]);

          copy[firstNumber][secondNumber] = randomNumber[chooseRandomNumber];
          result = true;
        }
      }
    }
  } while (!result);
  setData(copy);

  return result;
};

export const rightMove = (
  data: number[][],
  setData: React.Dispatch<React.SetStateAction<number[][]>>
) => {};
export const leftMove = (
  data: number[][],
  setData: React.Dispatch<React.SetStateAction<number[][]>>
) => {};

export const bgcolor = (value: number) => {
  if (value === 0) return "#FFFFFF";
  if (value === 2) return "#34568B";
  if (value === 4) return "#FF6F61";
  if (value === 8) return "#6B5B95";
  if (value === 16) return "#88B04B";
  if (value === 32) return "#F7CAC9";
  if (value === 64) return "#955251";
  if (value === 128) return "#B565A7";
  if (value === 256) return "#009B77";
  if (value === 512) return "#DD4124";
  if (value === 1024) return "#D65076";
  if (value === 2048) return "#45B8AC";
  if (value === 4098) return "#EFC050";
  if (value === 8196) return "#55B4B0";
};
