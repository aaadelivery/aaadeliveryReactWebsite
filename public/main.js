const path = require("path")
const fs = require("fs")


const dirPathPages = path.join(__dirname, "../pages/")
console.log(dirPathPages);


const getDirectories = source =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const getFiles = source =>
  fs.readdirSync(source);

let directories = (getDirectories(dirPathPages));

let complete_json = {}
for (let dir_index  in directories ) {
    dir_path = path.join(dirPathPages, directories[dir_index]);
    files = getFiles(dir_path)

    dir_json = {}
    for ( let files_index in files ) { 
        var file_string = fs.readFileSync(`${dir_path}/${files[files_index]}`).toString();
        file_string = file_string.replace(/\\\\n/g,"\\n");
        var page_json = JSON.parse(file_string);
        dir_json[files[files_index]] = page_json
    }
    complete_json[directories[dir_index]] = dir_json
}

fs.writeFileSync("src/pages.json", JSON.stringify( complete_json));