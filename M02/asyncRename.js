const fs = require('fs');

fs.rename("mwpagi.json", "mwsore.json", (err) => {
    if(err) throw err;
    console.log("Berhasil mengganti nama!");
})