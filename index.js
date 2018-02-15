function genAbc(caps=false) {
  var array = [];
  var startIndex = caps ? 65 : 98;
  var endIndex = caps ? 90 : 123 ;

  for (var y = startIndex; y < endIndex; y++) {
    array.push(String.fromCharCode(y));
  }
  return array;
}

function genKey(len, upcase) {
  var abc = upcase ? genAbc(upcase) : genAbc();
  var key = [];
  var length = upcase ? len+1 : len;

  for (var y = 0; y < length; y++) {
    key.push(abc[Math.floor(Math.random() * 27)]);
  }
  return key.join('');
}

function genObj({ array }, len=14, upcase=false) {
  var newArray = [];

  for (var y = 0; y < array.length; y++) {
    newArray.push({key: genKey(len, upcase), item: array[y]});
  }
  return newArray;
}


module.exports = genObj;
