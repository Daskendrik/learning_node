const os = require('os');
console.log('Операционная система ', os.platform());
console.log('Архитектура процессора ', os.arch());
console.log('Процессора ', os.cpus());
console.log('Свободная память ', os.freemem());
console.log('Всего память ', os.totalmem());
console.log('Домашняя директория ', os.homedir());
console.log('Включен ', os.uptime());
