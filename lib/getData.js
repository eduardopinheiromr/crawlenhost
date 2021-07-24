const getData = async (snapshot) => {
  let results = [];

  await snapshot.forEach((doc) => {
    results.push(doc.data());
  });

  return results;
};

module.exports = getData;
