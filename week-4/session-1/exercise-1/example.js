/** @format */

const quoteNode = document.getElementById("quote");
const buttonNode = document.getElementById("genButton");

var quoteList = [
  "Those who ask a question will look stupid for a minute, those who dont will be for a lifetime.",
  "Just as ores are found in the deppest mines, true strength often comes from the depths of struggle.",
  "You can own the world, but still end up alone!",
  "You will miss 100% of the ores you don't mine.",
  "Never waste your diamonds on a hoe",
];

function genQuote() {
  const rnd = Math.floor(Math.random() * quoteList.length);
  quoteNode.innerText = "Quote: " + quoteList[rnd];
}
