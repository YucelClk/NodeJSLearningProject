const fs = require('fs');
const path = require('path');
// // klasor olustur
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Dosya olustu');});
// // dosya olusturup yaz
// fs.writeFile(path.join(__dirname, '/test', 'merhaba.txt'), 
//     'test dosyasi', 
//     err => {
//         if (err) throw err;
//         console.log('dosyaya yazildi');
//         // yaziya ekle
//         fs.appendFile(
//             path.join(__dirname, '/test', 'merhaba.txt'),
//             ' 12345',
//             err => {
//                 if (err) throw err;
//                 console.log('dosyaya yazi eklendi');});});
// // dosyayi oku
// fs.readFile(path.join(__dirname, '/test', 'merhaba.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);});

// dosya ismini degistir
fs.rename(
    path.join(__dirname, '/test', 'merhaba.txt'), 
    path.join(__dirname, '/test', 'merhaba 123.txt'), 
    err => {
        if (err) throw err;
        console.log('dosya ismi degisti');
    }
);