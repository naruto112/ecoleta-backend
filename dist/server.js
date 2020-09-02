"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

var _path = _interopRequireDefault(require("path"));

var _celebrate = require("celebrate");

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.default);
app.use("/uploads", _express.default.static(_path.default.resolve(__dirname, "..", "uploads")));
app.use((0, _celebrate.errors)());
app.listen(3333, () => {
  console.log("🚀 Server is running on port 3333");
});