const db = require("../config/firebase");

const saveData = require("../lib/saveData");
const getData = require("../lib/getData");

module.exports = multipleQueryHandler = async (req, res) => {
  const collection = req.params.collection;
  const query = req.params.query.split(",");

  const queriesRef = await db.collection(collection);

  const snapshot = await queriesRef.where("query", "in", query).get();

  if (snapshot.empty) {
    return res.send({
      collection,
      query,
      error: "snapshot is empty",
      snapshot,
    });
  }

  const results = await getData(snapshot);

  res.send(...results);
};
