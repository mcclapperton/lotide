let forwards = process.argv.slice(2);

function pigLatin(forwards) {
  let backwards = "";

  for (let i = 0; (i = forwards.length); i++) {
    backwards += forwards[i];
  }
  backwards += forwards[0];
  return (backwards += forwards);
}

console.log(pigLatin("ello"));
