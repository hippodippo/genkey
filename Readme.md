# GenKey
A key generator for React List Components.

## Why
I mainly built genkey for when you are using an array when creating a React List Component, and you don't want to use the index for the key. Using the index for the key is considered [not a good idea](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318).

## Installation
```
yarn add genkey
```

## The Gist
```
import genkey from 'genkey';

...

let { names } = this.state;

let userNames = names.map(name => {
  return <h3 key={genkey()}>{name}</h3>;
});
```
Genkey accepts two optional arguments.
The first argument accepts a number to specify how long you want the keys to be (default length is 7).
The second argument accepts a boolean of either true or false (default is false). Passing in true will make genkey return keys with all caps.
Below genkey will generate keys that are all caps and have a length of 14 characters.
```
let { names } = this.state;

let userNames = names.map((name, index) => {
  return (
    return <h3 key={genkey(14, true)}>{name}</h3>;
  );
});
```
