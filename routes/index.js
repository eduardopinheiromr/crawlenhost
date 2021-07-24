const queryHandler = require("../api/queryHandler");
const collectionHandler = require("../api/collectionHandler");
// const multipleQueryHandler = require("../api/multipleQueryHandler");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Welcome to crawlenhost");
  });

  app.get("/image/:collection/:query", queryHandler);

  app.get("/type/:collection", collectionHandler);

  // app.get("/multiple/:collection/:query", multipleQueryHandler);
};
