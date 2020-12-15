export type RGBAColor = [number, number, number, number?];

export type ColorRange = [
  RGBAColor,
  RGBAColor,
  RGBAColor,
  RGBAColor,
  RGBAColor,
  RGBAColor
];

interface StringKeyObject {
  [key:string]: number[][];
}
const colorRangeRed = [
  [255, 255, 178],
  [254, 217, 118],
  [254, 178, 76],
  [253, 141, 60],
  [240, 59, 32],
  [189, 0, 38]
];

const colorRangeBrown = [
  [255, 255, 212],
  [254, 227, 145],
  [254, 196, 79],
  [254, 153, 41],
  [217, 95, 14],
  [153, 52, 4]
];
const colorRangeBlue = [
  [255, 255, 204],
  [199, 233, 180],
  [127, 205, 187],
  [65, 182, 196],
  [44, 127, 184],
  [37, 52, 148]
];

 const colorRangeGreen = [
  [255, 255, 204],
  [217, 240, 163],
  [173, 221, 142],
  [120, 198, 121],
  [49, 163, 84],
  [0, 104, 55]
];

const colorRangeGray = [
  [247, 247, 247],
  [217, 217, 217],
  [189, 189, 189],
  [150, 150, 150],
  [99, 99, 99],
  [37, 37, 37]
];

export const ColorsObject :StringKeyObject = {
  drought: colorRangeBrown,
  dustHaze: colorRangeGray,
  earthquakes: colorRangeBrown,
  snow: colorRangeBlue,
  tempExtremes: colorRangeBrown,
  waterColor: colorRangeGray,
  manmade: colorRangeGreen,
  seaLakeIce: colorRangeBlue,
  landslides: colorRangeBrown,
  severeStorms: colorRangeBlue,
  wildfires: colorRangeRed,
  volcanoes: colorRangeRed,
  default: colorRangeGray
};
