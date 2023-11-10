const fs = require('fs'); //file system
const path = require('path');

//создает папку
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//
//   if (err) {
//     throw err;
//   }
//   console.log('Папка создана');
// });

const filePath = path.join(__dirname, 'test', 'test.txt');
//Создаем файл
// fs.writeFile(filePath, 'Hello Node \n', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Фаил создан');
// });

// //Дополняем содержимое
// fs.appendFile(filePath, 'Hello Again!!!!', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Фаил отредактирован');
// });

//Чтение файла
fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err;
  }
  //   const data = Buffer.from(content);
  //   console.log(data.toString());
  console.log(content);
});
