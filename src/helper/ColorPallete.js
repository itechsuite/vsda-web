export const Pallete = ["#f39c12", "#e24f43", "#27ae60"];

export const randomColor = () => {
  const number = randomNumber(0, 2);
  return Pallete[number];

  //   return Pallete[randomNumber(0, 2)];
};
const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
