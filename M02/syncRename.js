const fs = require('fs');

try {
    fs.renameSync("mwsore.json", "mwpagi.json");
    console.log("Berhasil mengganti nama!");
} catch(err) {
    console.log(err);
}