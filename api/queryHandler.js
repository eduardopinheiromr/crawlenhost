const db = require("../config/firebase");

const saveData = require("../lib/saveData");
const getData = require("../lib/getData");

module.exports = queryHandler = async (req, res) => {
  const collection = req.params.collection;
  const query = req.params.query;

  const queriesRef = await db.collection(collection);

  const snapshot = await queriesRef.where("query", "==", query).get();

  if (snapshot.empty) {
    const data = await saveData(query, queriesRef);

    return res.send({ ...data });
  }

  const results = await getData(snapshot);

  res.send(...results);
};
