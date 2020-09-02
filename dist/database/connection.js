"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connection = (0, _knex.default)({
  client: "sqlite3",
  connection: {
    filename: _path.default.resolve(__dirname, "database.sqlite")
  },
  useNullAsDefault: true
});
var _default = connection;
exports.default = _default;