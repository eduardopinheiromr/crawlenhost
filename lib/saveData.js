const { default: axios } = require("axios");
require("dotenv").config();

const scrapper = process.env.scrapper;

const saveData = async (query, db) => {
  const { data } = await axios.get(`${scrapper}${query}/10`);

  const savedAt = new Date().toLocaleString("pt-br");

  const newData = {
    ...data,
    savedAt,
  };

  //ADD TO FIREBASE
  await db.add({ ...newData });

  return newData;
};

module.exports = saveData;
