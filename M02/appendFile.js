const fs = require('fs');

fs.appendFile("mw.txt", "Kelas Mobile and Web!", function(err) {
    if(err) throw err;
    console.log("Berhasil Disimpan");
})

