const express = require("express");
const app = express();
const port = 5000;

const middlewares = require("./middlewares");
const routes = require("./routes");

app.use(express.static("public"));

middlewares(app);

routes(app);

app.listen(port, () => {
  console.log("Listening on http://localhost:" + port);
});
