# GenKey
A key generator for React List Components.

## Why
(Trying some different methods for genkey. Hold off on downloading please.)
I mainly built genkey for when you are using an array when creating a React List Component, and you don't want to use the index for the key. Using the index for the key is considered [not a good idea](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318).
Genkey takes your array and turns each element into an object with two properties, the id property containing the generated key, and the item property containing the original element in the array.

## Installation
```
yarn add genkey
```

## The Gist
```
import genkey from 'genkey';

...

let names = genkey(this.state.names);

let userNames = names.map(name => {
  return <h3 key={name.id}>{name.item}</h3>;
});
```
Genkey accepts one required argument and two optional arguments.
The first argument is the array you want to add generated keys to.
The second argument accepts a number to specify how long you want the keys to be (default length is 14).
The third argument accepts a boolean of either true or false (default is false). Passing in true will make genkey return keys with all caps.
Below genkey will generate keys that are all caps and have a length of 33 characters.
```
let names = genkey(this.state.names, 33, true);

let userNames = names.map(name => {
  return <h3 key={name.id}>{name.item}</h3>;
});
```
