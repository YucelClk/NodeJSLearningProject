const os = require('os');
// platform tipi
console.log(os.platform());
// cpu arch
console.log(os.arch());
// cpu cekirdek bilgisi
console.log(os.cpus());
// bos hafiza
console.log(os.freemem());
// toplam hafiza
console.log(os.totalmem());
// kullanıcı dosya yolu
console.log(os.homedir());
// calisma suresi
console.log(os.uptime());