// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/html',
//   });
//   res.end('<h1>Hello Node</h1>');
// });

// server.listen(3000, () => {
//   console.log('Server start');
// });

import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server start, port ${PORT}...`);
}); //запускаем серве
