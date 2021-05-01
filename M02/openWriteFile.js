var fs = require('fs');

fs.open("datamw.txt", "w+", function(err, file) {
    if(err) throw err;
    let data = "Kelas Mobile and Web Lanjutan 1";

    fs.writeFile(file, data, (err) => {
        if(err) throw err;
        console.log("Tersimpan!");
    });

    fs.readFile("datamw.txt", (err, temp) => {
        if(err) throw err;
        console.log(temp.toString("utf8"))
    });
}); 