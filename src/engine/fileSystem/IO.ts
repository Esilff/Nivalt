const fs = require('fs');
const path  = require('path');

async function readFile(path : string) : Promise<string>{
    try {
        let fileContent : string = '';
        await fs.readFile(path).then((result : string) => {fileContent = result});;
        return fileContent;
    } catch (error) {
        console.error(error);
        return '';
    }
} 
