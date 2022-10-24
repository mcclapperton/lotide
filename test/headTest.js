const assertEqual = require("../assertEqual");
const head = require("../head");
assertEqual("b", head(["b", "c", "d"]));
