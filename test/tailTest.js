const assertEqual = require("../assertEqual");
const tail = require("../tail");

const evaluated = tail(["yoohoo", "yellow", "frame"]);
assertEqual(evaluated.length, 2);
assertEqual(evaluated[0], "yellow");
assertEqual(evaluated[1], "frame");

const otherWords = ["me", "flower", "pony"];
tail(otherWords);
assertEqual(otherWords.length, 3);
