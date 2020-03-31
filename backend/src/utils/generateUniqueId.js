const crypto = require("crypto"); // Pacote que vem com o Node.js

module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString("HEX");
};
