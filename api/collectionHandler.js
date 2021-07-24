const db = require("../config/firebase");

const getData = require("../lib/getData");

module.exports = collectionHandler = async (req, res) => {
  const collection = req.params.collection;

  const collectionRef = await db.collection(collection);

  const snapshot = await collectionRef.get();

  if (snapshot.empty) {
    return res.send({
      message: "There was no collection with this name: " + collection,
    });
  }

  const results = await getData(snapshot);

  return res.send(results);
};
