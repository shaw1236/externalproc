// Purpose: Node calling an external process 
// Author : Simon Li
// Date   : March 22, 2020
////////////////////////////////////////
'use strict';

class externalproc {
    constructor(fileName = "/home/uadmin/ttdata/indy-source/framework/framework.py", blog = false) {
        if (blog) console.log(`file: ${fileName}`);
        this.blog = blog;
        this.spawn = require("child_process").spawn;
        this.path = require('path').parse(fileName);
        if (this.path["ext"] != "" && !require('fs').existsSync(fileName)) 
	    throw new Error(`File ${fileName} doesn't exist`);
        
        switch(this.path["ext"]) {
	    case '.py'  :  
		this.path["bin"] = (process.platform === "win32")? "python" : "python3";
                break;
	    
            case '.js'  :  
		this.path["bin"] = "node";
                break;
 
            case '.class':  
		this.path["bin"] = "java";
                break;

            case '.awk':
                this.path["bin"] = "awk";
                break;
     
            case '.pl':
                this.path["bin"] = "perl";
                break;

            case '.go': 
		this.path["bin"] = "go run";
                break;

            // more
            case 'suffix':
                
            default:
                throw new Error(`The file type ${this.path["ext"]} is not supported`);
                break; 
        }
        if (blog)
           console.log(this.path);
    }

    // Launch the child process and catch the returns
    process(args, callback) {
        const currDir = process.cwd();
        if (this.blog) console.log(`Current folder: ${currDir}`);
        if (this.path["dir"] != "")
           process.chdir(this.path["dir"]);

        const aProcess = this.spawn(this.path["bin"], [this.path["base"], ...args]);
        aProcess.stdout.on('data', (data) => {
            // Do something with the data returned from the child process
            if (typeof callback != 'undefined') 
               callback("" + data);
            else if (this.blog)
                   console.log("\nData from external process:\n" + data);
        });
        if (this.path["dir"] != "")
           process.chdir(currDir);
    }
} 

module.exports = externalproc;

if (require.main === module) {
   let fileName = "c:\\work\\src\\node\\pythonslave.py"; 
   let extproc = new externalproc(fileName, true);
   //extproc.process(["This", "Is", "a", "Test"], result => console.log(result));
   extproc.process(["This", "Is", "another", "Test"]);    
}
