import fs from 'fs';

export class FileFunctions{

    CreateDirectory(directoryName:string):void{
        fs.mkdirSync("a",{recursive:true}); 
    }

    WriteFile(fileDirectory:string,content:string):void{
        fs.writeFile(fileDirectory, content, (err) => {if (err) throw err;}); 
    }

}
