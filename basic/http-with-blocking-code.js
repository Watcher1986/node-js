const http = require('http');

const server = http.createServer((req, res) => {
  try {
    if (req.url === '/') {
      res.end('Welcome to our Home Page');
    }
    if (req.url === '/about') {
      // Blocking code !!!
      for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
          console.log(`${i} ${j}`);
        }
      }
      res.end('About Page');
    }
    console.log('request made');
    res.end('Error Page');
  } catch (error) {
    console.log(error);
    res.end('Error Page');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port: 3000...');
});
