//console.log("Merhaba");

// const person = require('./person');
// console.log(person.name);


// const Person = require('./person');
// const person1 = new Person('Yucel Celik',23);
// person1.greeting();
// =================================

// const Logger = require('./logger');
// const logger = new Logger();
// logger.on('message', data => console.log('Called Listener:', data));
// logger.log('Merhaba');
// logger.log('1');
// logger.log('345');
// ===================================

// npm run dev
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // if(req.url == '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }

    // if (req.url == '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }

    // if (req.url == '/api/users') {
    //     const users = [
    //         { name: 'Ahmet Mehmet', age: 40},
    //         { name: 'Mehmet Ahmet', age: 30}
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }
    // =======================

    // text/html
    // text/css
    // application/json

    // Dosya yolunu olsutur
    let filePath = path.join(
        __dirname,
        'public',
        req.url == '/' ? 'index.html' : req.url
    );

    let extname = path.extname(filePath);
    let contentType = 'text/html';
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code = 'ENONT') {
                // Sayfa bulunamadi
                fs.readFile(path.join(__dirname, 'public', '404.html'),
                (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                // Server err
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Basarili
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));