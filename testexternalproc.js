const externalproc = require('externalproc');
//const fileName = "c:\\work\\src\\node\\pythonslave.py"; 
//const fileName = "c:\\work\\src\\node\\nodeslave.js"; 
const fileName = "nodeslave.js"; 
//const fileName = "pythonslave.py"; 

const extproc = new externalproc(fileName, true);

// argv[0] is the process itself like node, python, java
// argv[1] is the file
// the real argument starts from argv[2]
const args = (process.argv.length > 2)? process.argv.slice(2) :
	                                ["This", "Is", "Defalt", "Module", "Test", "From", "me"];

extproc.process(args, result => console.log(result));


/** pythonslave.py
import sys

print("Here is pythonslave.py\n")
print("The argument passed to me:")

index = 0
for arg in sys.argv[1:]:
    index += 1
    print("{0}: {1}".format(index,arg))

sys.stdout.flush()
*/

/** nodeslave.js
const args = process.argv;
console.dir(`The program: ${args[1]}`);

for (let idx = 2; idx < args.length; idx++)
   console.log(`${idx-1} - ${args[idx]}`);
*/

