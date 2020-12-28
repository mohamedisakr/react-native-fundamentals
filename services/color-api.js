const axios = require("axios");
// import axios from "axios";

const url = "https://color-palette-api.kadikraman.now.sh/palettes";

getColors = async () => {
  const result = await fetch(url);
  const thePalettes = await result.json();
  return thePalettes;
};

const colors = getColors().then((colors) => colors);
// console.log(colors);

module.exports = { getColors };

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
