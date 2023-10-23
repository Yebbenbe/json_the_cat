const request = require('request');
const breedName = process.argv[2];

// api url with breed as query param
const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

// sending request to api url
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(body);
    console.log('Parsed Response Data:', data);
  }
});
