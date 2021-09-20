const http = require('http');

http.createServer((req, res) => {
    // Write response
    res.write('Merhaba ben Yucel');
    res.end()
})
.listen(5000, () => console.log('Server calisiyor'));
// Ctrl + C