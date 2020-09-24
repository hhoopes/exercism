export const decodedValue = (resistorColors) => {
  return colorCode(resistorColors[0]) * 10 + colorCode(resistorColors[1]);
};

const colorCode = (color) => {
  return COLORS.indexOf(color);
};

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];