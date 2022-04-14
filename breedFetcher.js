const request = require('request');
// const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function(error, response, body) {  

  // if an error exsists then print the "error" & details
    if (error) {
      // console.log("Error:", error);
      return callback(error, null)
    }
    const data = JSON.parse(body);
      const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    
    } else {
      callback("Breed not found!")
    } 
      //console.log("Breed not found.");
      //return;
   // data = the arrary, [0] = the first entry of the array whihc is an object, ["description"] = accessing the key in an object.
   
  });
};

module.exports = { fetchBreedDescription };

