// problem statement
// count the number of alphabets in a string and store it somewhere

// extra info: can store only alphabets  in lowercase

let inputStr = "Hello boy how  are you doin ?";
function trackChar(inputStr) {
  // create a container to store the characters
  let resObj = {};
  // get the string and iterate over it
  for (var char of inputStr) {
    //check for each character and store it in the container
    char = char.toLowerCase();

    if (/[a-z0-9]/.test(char)) {
      // check if the char exists the increment the character's value by 1 else store 1

      if (resObj[char] > 0) {
        resObj[char]++;
      } else {
        resObj[char] = 1;
      }
    }
  }

  // return the container at the end
  return resObj;
}

trackChar(inputStr);
