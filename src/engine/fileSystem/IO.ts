const fs = require('fs.promises');


async function readFile(path : string) : Promise<string|null>{
    try {
        let fileContent : string = '';      
        await fs.readFile(path).then((result : string) => {fileContent = result});;
        return fileContent;
    } catch (error) {
        console.error(error);
        return null;
    }
} 

module.exports = {readFile};
