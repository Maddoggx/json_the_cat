const request = require('request');
const breedName = process.argv[2]
const breedFetcher = (name) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + name, function(error, response, body) {  

  // if an error exsists then print the "error" & details
    if (error) {
      console.log("Error:", error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Breed not found.");
      return;
    } 
   // data = the arrary, [0] = the first entry of the array whihc is an object, ["description"] = accessing the key in an object.
   // console.log(data[0]["description"]);
   
  });
};
breedFetcher(breedName);
//console.log(breedName);