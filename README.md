# Numerical code generator (Ver 0.1.1)

A small module that generate numerical code.
*( No dependencies )*
  
## Installation

`npm install numerical-code-generator`

or

`yarn add numerical-code-generator`

## Generate normal code

const numFormatter = require('numerical-code-generator');

const newCode = numFormatter.set(6);

`example for 6 character limitation`


console.log(newCode);


> Output should be "416315"
  
  
## Generate unique code

*Numeric code generated randomly from Date().getTime()*

const numFormatter = require('numerical-code-generator');

const newCode = numFormatter.setUnic(8);

`// example for 8 character limitation`
  
console.log(newCode);

> Output should be "11652853"

## Contributing

Anselmo Lima - ( anselmodev.com )