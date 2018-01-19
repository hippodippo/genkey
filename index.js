function abcGen(caps=false) {
  var array = [];
  var startIndex = caps ? 65 : 98;
  var endIndex = caps ? 90 : 123 ;

  for (var y = startIndex; y < endIndex; y++) {
    array.push(String.fromCharCode(y));
  }
  return array;
}

function genKey(len, upcase=false) {
  var abc = upcase ? abcGen(upcase) : abcGen();
  var key = [];
  var length = upcase ? len+1 : len;

  for (var y = 0; y < length; y++) {
    key.push(abc[Math.floor(Math.random() * 27)]);
  }
  return key.join('');
}

module.exports = genKey;