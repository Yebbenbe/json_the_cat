const {fetchBreedDescription} = require('./breedFetcher');
const breedName = process.argv[2];

// calling fetchBreedDescription function
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error: ' + error);
  } else {
    console.log(desc);
  }
});