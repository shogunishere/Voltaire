const Url =
  'http://localhost:5000/api/wolfram?question=who%20is%20isaac%20newton';

// Fetching request
fetch(Url)
  .then(res => {
    console.log(JSON.parse(res));
  })
  .catch(error => {
    console.log('Error:' + error);
  });
