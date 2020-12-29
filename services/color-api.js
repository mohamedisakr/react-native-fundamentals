// const axios = require("axios");
// // import axios from "axios";

// const url = "https://color-palette-api.kadikraman.now.sh/palettes";

// getColors = async () => {
//   const result = await fetch(url);
//   const thePalettes = await result.json();
//   return thePalettes;
// };

// const colors = getColors().then((colors) => colors);
// // console.log(colors);

// module.exports = { getColors };

// async () => {
//   try {
//     const { data } = await axios.get(url);
//     // const data = await response.data;
//     console.log(data);
//     return data;
//     // const result = await response.data;
//     // // const colors = await result.json();
//     // return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

const COLORS = [
  { id: 0, colorName: "AliceBlue", hexCode: "#F0F8FF" },
  { id: 1, colorName: "AntiqueWhite", hexCode: "#FAEBD7" },
  { id: 2, colorName: "Aqua", hexCode: "#00FFFF" },
  { id: 3, colorName: "Aquamarine", hexCode: "#7FFFD4" },
  { id: 4, colorName: "Azure", hexCode: "#F0FFFF" },
  { id: 5, colorName: "Beige", hexCode: "#F5F5DC" },
  { id: 6, colorName: "Bisque", hexCode: "#FFE4C4" },
  { id: 7, colorName: "Black", hexCode: "#000000" },
  { id: 8, colorName: "BlanchedAlmond", hexCode: "#FFEBCD" },
  { id: 9, colorName: "Blue", hexCode: "#0000FF" },
  { id: 10, colorName: "BlueViolet", hexCode: "#8A2BE2" },
  { id: 11, colorName: "Brown", hexCode: "#A52A2A" },
  { id: 12, colorName: "BurlyWood", hexCode: "#DEB887" },
  { id: 13, colorName: "CadetBlue", hexCode: "#5F9EA0" },
  { id: 14, colorName: "Chartreuse", hexCode: "#7FFF00" },
  { id: 15, colorName: "Chocolate", hexCode: "#D2691E" },
  { id: 16, colorName: "Coral", hexCode: "#FF7F50" },
  { id: 17, colorName: "CornflowerBlue", hexCode: "#6495ED" },
  { id: 18, colorName: "Cornsilk", hexCode: "#FFF8DC" },
  { id: 19, colorName: "Crimson", hexCode: "#DC143C" },
  { id: 20, colorName: "Cyan", hexCode: "#00FFFF" },
  { id: 21, colorName: "DarkBlue", hexCode: "#00008B" },
  { id: 22, colorName: "DarkCyan", hexCode: "#008B8B" },
  { id: 23, colorName: "DarkGoldenRod", hexCode: "#B8860B" },
  { id: 24, colorName: "DarkGray", hexCode: "#A9A9A9" },
  { id: 25, colorName: "DarkGrey", hexCode: "#A9A9A9" },
  { id: 26, colorName: "DarkGreen", hexCode: "#006400" },
  { id: 27, colorName: "DarkKhaki", hexCode: "#BDB76B" },
  { id: 28, colorName: "DarkMagenta", hexCode: "#8B008B" },
  { id: 29, colorName: "DarkOliveGreen", hexCode: "#556B2F" },
  { id: 30, colorName: "Darkorange", hexCode: "#FF8C00" },
  { id: 31, colorName: "DarkOrchid", hexCode: "#9932CC" },
  { id: 32, colorName: "DarkRed", hexCode: "#8B0000" },
  { id: 33, colorName: "DarkSalmon", hexCode: "#E9967A" },
  { id: 34, colorName: "DarkSeaGreen", hexCode: "#8FBC8F" },
  { id: 35, colorName: "DarkSlateBlue", hexCode: "#483D8B" },
  { id: 36, colorName: "DarkSlateGray", hexCode: "#2F4F4F" },
  { id: 37, colorName: "DarkSlateGrey", hexCode: "#2F4F4F" },
  { id: 38, colorName: "DarkTurquoise", hexCode: "#00CED1" },
  { id: 39, colorName: "DarkViolet", hexCode: "#9400D3" },
  { id: 40, colorName: "DeepPink", hexCode: "#FF1493" },
  { id: 41, colorName: "DeepSkyBlue", hexCode: "#00BFFF" },
  { id: 42, colorName: "DimGray", hexCode: "#696969" },
  { id: 43, colorName: "DimGrey", hexCode: "#696969" },
  { id: 44, colorName: "DodgerBlue", hexCode: "#1E90FF" },
  { id: 45, colorName: "FireBrick", hexCode: "#B22222" },
  { id: 46, colorName: "FloralWhite", hexCode: "#FFFAF0" },
  { id: 47, colorName: "ForestGreen", hexCode: "#228B22" },
  { id: 48, colorName: "Fuchsia", hexCode: "#FF00FF" },
  { id: 49, colorName: "Gainsboro", hexCode: "#DCDCDC" },
  { id: 50, colorName: "GhostWhite", hexCode: "#F8F8FF" },
  { id: 51, colorName: "Gold", hexCode: "#FFD700" },
  { id: 52, colorName: "GoldenRod", hexCode: "#DAA520" },
  { id: 53, colorName: "Gray", hexCode: "#808080" },
  { id: 54, colorName: "Grey", hexCode: "#808080" },
  { id: 55, colorName: "Green", hexCode: "#008000" },
  { id: 56, colorName: "GreenYellow", hexCode: "#ADFF2F" },
  { id: 57, colorName: "HoneyDew", hexCode: "#F0FFF0" },
  { id: 58, colorName: "HotPink", hexCode: "#FF69B4" },
  { id: 59, colorName: "IndianRed", hexCode: "#CD5C5C" },
  { id: 60, colorName: "Indigo", hexCode: "#4B0082" },
  { id: 61, colorName: "Ivory", hexCode: "#FFFFF0" },
  { id: 62, colorName: "Khaki", hexCode: "#F0E68C" },
  { id: 63, colorName: "Lavender", hexCode: "#E6E6FA" },
  { id: 64, colorName: "LavenderBlush", hexCode: "#FFF0F5" },
  { id: 65, colorName: "LawnGreen", hexCode: "#7CFC00" },
  { id: 66, colorName: "LemonChiffon", hexCode: "#FFFACD" },
  { id: 67, colorName: "LightBlue", hexCode: "#ADD8E6" },
  { id: 68, colorName: "LightCoral", hexCode: "#F08080" },
  { id: 69, colorName: "LightCyan", hexCode: "#E0FFFF" },
  { id: 70, colorName: "LightGoldenRodYellow", hexCode: "#FAFAD2" },
  { id: 71, colorName: "LightGray", hexCode: "#D3D3D3" },
  { id: 72, colorName: "LightGrey", hexCode: "#D3D3D3" },
  { id: 73, colorName: "LightGreen", hexCode: "#90EE90" },
  { id: 74, colorName: "LightPink", hexCode: "#FFB6C1" },
  { id: 75, colorName: "LightSalmon", hexCode: "#FFA07A" },
  { id: 76, colorName: "LightSeaGreen", hexCode: "#20B2AA" },
  { id: 77, colorName: "LightSkyBlue", hexCode: "#87CEFA" },
  { id: 78, colorName: "LightSlateGray", hexCode: "#778899" },
  { id: 79, colorName: "LightSlateGrey", hexCode: "#778899" },
  { id: 80, colorName: "LightSteelBlue", hexCode: "#B0C4DE" },
  { id: 81, colorName: "LightYellow", hexCode: "#FFFFE0" },
  { id: 82, colorName: "Lime", hexCode: "#00FF00" },
  { id: 83, colorName: "LimeGreen", hexCode: "#32CD32" },
  { id: 84, colorName: "Linen", hexCode: "#FAF0E6" },
  { id: 85, colorName: "Magenta", hexCode: "#FF00FF" },
  { id: 86, colorName: "Maroon", hexCode: "#800000" },
  { id: 87, colorName: "MediumAquaMarine", hexCode: "#66CDAA" },
  { id: 88, colorName: "MediumBlue", hexCode: "#0000CD" },
  { id: 89, colorName: "MediumOrchid", hexCode: "#BA55D3" },
  { id: 90, colorName: "MediumPurple", hexCode: "#9370D8" },
  { id: 91, colorName: "MediumSeaGreen", hexCode: "#3CB371" },
  { id: 92, colorName: "MediumSlateBlue", hexCode: "#7B68EE" },
  { id: 93, colorName: "MediumSpringGreen", hexCode: "#00FA9A" },
  { id: 94, colorName: "MediumTurquoise", hexCode: "#48D1CC" },
  { id: 95, colorName: "MediumVioletRed", hexCode: "#C71585" },
  { id: 96, colorName: "MidnightBlue", hexCode: "#191970" },
  { id: 97, colorName: "MintCream", hexCode: "#F5FFFA" },
  { id: 98, colorName: "MistyRose", hexCode: "#FFE4E1" },
  { id: 99, colorName: "Moccasin", hexCode: "#FFE4B5" },
  { id: 100, colorName: "NavajoWhite", hexCode: "#FFDEAD" },
  { id: 101, colorName: "Navy", hexCode: "#000080" },
  { id: 102, colorName: "OldLace", hexCode: "#FDF5E6" },
  { id: 103, colorName: "Olive", hexCode: "#808000" },
  { id: 104, colorName: "OliveDrab", hexCode: "#6B8E23" },
  { id: 105, colorName: "Orange", hexCode: "#FFA500" },
  { id: 106, colorName: "OrangeRed", hexCode: "#FF4500" },
  { id: 107, colorName: "Orchid", hexCode: "#DA70D6" },
  { id: 108, colorName: "PaleGoldenRod", hexCode: "#EEE8AA" },
  { id: 109, colorName: "PaleGreen", hexCode: "#98FB98" },
  { id: 110, colorName: "PaleTurquoise", hexCode: "#AFEEEE" },
  { id: 111, colorName: "PaleVioletRed", hexCode: "#D87093" },
  { id: 112, colorName: "PapayaWhip", hexCode: "#FFEFD5" },
  { id: 113, colorName: "PeachPuff", hexCode: "#FFDAB9" },
  { id: 114, colorName: "Peru", hexCode: "#CD853F" },
  { id: 115, colorName: "Pink", hexCode: "#FFC0CB" },
  { id: 116, colorName: "Plum", hexCode: "#DDA0DD" },
  { id: 117, colorName: "PowderBlue", hexCode: "#B0E0E6" },
  { id: 118, colorName: "Purple", hexCode: "#800080" },
  { id: 119, colorName: "Red", hexCode: "#FF0000" },
  { id: 120, colorName: "RosyBrown", hexCode: "#BC8F8F" },
  { id: 121, colorName: "RoyalBlue", hexCode: "#4169E1" },
  { id: 122, colorName: "SaddleBrown", hexCode: "#8B4513" },
  { id: 123, colorName: "Salmon", hexCode: "#FA8072" },
  { id: 124, colorName: "SandyBrown", hexCode: "#F4A460" },
  { id: 125, colorName: "SeaGreen", hexCode: "#2E8B57" },
  { id: 126, colorName: "SeaShell", hexCode: "#FFF5EE" },
  { id: 127, colorName: "Sienna", hexCode: "#A0522D" },
  { id: 128, colorName: "Silver", hexCode: "#C0C0C0" },
  { id: 129, colorName: "SkyBlue", hexCode: "#87CEEB" },
  { id: 130, colorName: "SlateBlue", hexCode: "#6A5ACD" },
  { id: 131, colorName: "SlateGray", hexCode: "#708090" },
  { id: 132, colorName: "SlateGrey", hexCode: "#708090" },
  { id: 133, colorName: "Snow", hexCode: "#FFFAFA" },
  { id: 134, colorName: "SpringGreen", hexCode: "#00FF7F" },
  { id: 135, colorName: "SteelBlue", hexCode: "#4682B4" },
  { id: 136, colorName: "Tan", hexCode: "#D2B48C" },
  { id: 137, colorName: "Teal", hexCode: "#008080" },
  { id: 138, colorName: "Thistle", hexCode: "#D8BFD8" },
  { id: 139, colorName: "Tomato", hexCode: "#FF6347" },
  { id: 140, colorName: "Turquoise", hexCode: "#40E0D0" },
  { id: 141, colorName: "Violet", hexCode: "#EE82EE" },
  { id: 142, colorName: "Wheat", hexCode: "#F5DEB3" },
  { id: 143, colorName: "White", hexCode: "#FFFFFF" },
  { id: 144, colorName: "WhiteSmoke", hexCode: "#F5F5F5" },
  { id: 145, colorName: "Yellow", hexCode: "#FFFF00" },
  { id: 146, colorName: "YellowGreen", hexCode: "#9ACD" },
];

let colorsWithIds = COLORS.map((val, key) => ({
  id: key,
  colorName: val.colorName,
  hexCode: val.hexCode,
}));
// console.log(colorsWithIds);
colorsWithIds.forEach((item) => console.log(item));
