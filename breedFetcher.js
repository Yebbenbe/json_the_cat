const request = require('request');

// sending request to api url
const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      
      // if no data is returned
      if (data.length === 0) {
        callback('Breed not found', null);

      } else {
        callback(null, data[0].description);
      }
    
    }
  
  });
};

module.exports = {fetchBreedDescription};