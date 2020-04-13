# externalproc

Utility External Process Call

# Insatllation

npm install externalproc --save

# Usage

const externalproc = require('externalproc');

const fileName = "c:\\work\\src\\node\\pythonslave.py"; 

const extproc = new externalproc(fileName);

extproc.process(["This", "Is", "a", "Test"], result => console.log(result));

# Appendix

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
