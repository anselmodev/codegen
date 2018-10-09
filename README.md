
# codeGen

A small module that generate numerical code.


## Installation

`npm install codegen`

## Generate normal code

const numFormatter = require('codegen');

const newCode = numFormatter.set(6); 
`example for 6 character limitation`

console.log(newCode);

> Output should be "416315"


## Generate unique code

const numFormatter = require('codegen');

const newCode = numFormatter.setUnic(8); 
`// example for 8 character limitation`

console.log(newCode);

> Output should be "11652853"


## Contributing
Anselmo Lima - ( anselmodev.com )