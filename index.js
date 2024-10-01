//Parses intake string into an array of strings
//Loops through the array of strings and assigns keys to an object
//
function parseFroyoInput(input) {
    parsedInput = input.split(",");
    let flavorCount = {};
  
    for (let i = 0; i < parsedInput.length; i++) {
      if (flavorCount[parsedInput[i]] == undefined) {
        flavorCount[parsedInput[i]] = 1;
      } else {
        flavorCount[parsedInput[i]]++;
      }
    }
    return flavorCount;
  }
  
  
  //Start of code
  //prompts user for input then shows a graph of what is inputted in console
  let froyoInput = prompt(
    "Enter a list of comma-separated froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  console.table(parseFroyoInput(froyoInput));
  