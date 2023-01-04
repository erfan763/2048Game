export const startGame = (
  data: number[][],
  setData: React.Dispatch<React.SetStateAction<number[][]>>
) => {
  const randomNumber = [2, 4];
  const firstNumber = Math.floor(Math.random() * 5);
  const secondNumber = Math.floor(Math.random() * 5);
  const chooseRandomNumber = Math.floor(Math.random() * 2);
  let copy = [...data];
  copy[firstNumber][secondNumber] = randomNumber[chooseRandomNumber];
  setData(copy);
};

export const afterEveryMove = (
  data: number[][],
  setData: React.Dispatch<React.SetStateAction<number[][]>>
) => {
  let copy = [...data];
  const randomNumber = [2, 4, 2, 2, 2];
  const chooseRandomNumber = Math.floor(Math.random() * 5);

  const d = data.filter((v, i) => v?.filter((b, j) => b === 0));
  console.log(d, "Hellooo");
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const firstNumber = Math.floor(Math.random() * 5);
      const secondNumber = Math.floor(Math.random() * 5);
      if (data[secondNumber][firstNumber] === 0) {
        copy[secondNumber][firstNumber] = randomNumber[chooseRandomNumber];
        setData(copy);
        return;
      }
    }
  }
};
