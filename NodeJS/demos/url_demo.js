const url = require('url');

const myUrl = new URL('http://rastgelewebsitesi.com:8000/merhaba.html?id=123&status=aktif');
// serialized url
console.log(myUrl.href);
console.log(myUrl.toString());
// host (root domain)
console.log(myUrl.host);
// hostname (does not get port)
console.log(myUrl.hostname);
// pathname
console.log(myUrl.pathname);
// serialized query
console.log(myUrl.search);
// params object
console.log(myUrl.searchParams);
// add param
myUrl.searchParams.append('abc', '567');
console.log(myUrl.searchParams);
// loop through
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));