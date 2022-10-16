const reverse = function (forwards) {
  let backwards = " ";
  for (let i = forwards.length - 1; i >= 0; i--) {
    backwards += forwards[i];
  }
  for (let j = forwards.length - 1; j >= 0; j--) {
    backwards += forwards[j];
    return backwards;
  }
};
//make a loop to go through each word
//turn into an array
//reverse it
//turn back into string
//output
console.log(reverse("maris 1 ello"));
