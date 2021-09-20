// const { Console } = require('console');
const path = require('path');

// Dosya ismi
console.log(path.basename(__filename));

// Dosya yolu 
console.log(path.dirname(__filename));

// sadece dosyanin uzantisi
console.log(path.extname(__filename));

// spesifik olarak dosyanin kendisi
console.log(path.parse(__filename).base);
// dosya objesi olustur
console.log(path.parse(__filename));

// dosya yolunu birlestir
console.log(path.join(__dirname, 'test', 'merhaba.html'));