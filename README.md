# bit-encode

Low level bit encoder for buffers

```
npm install bit-encode
```

[![build status](http://img.shields.io/travis/mafintosh/bit-encode.svg?style=flat)](http://travis-ci.org/mafintosh/bit-encode)

## Usage

``` js
var bits = require('bit-encode')

var buf = Buffer([0])

console.log(bits.get(buf, 0)) // get first bit, returns false (0)

bits.set(buf, 0, true) // set first bit

console.log(bits.get(buf, 0)) // get first bit, returns true (1)
```

## API

#### `var bool = bits.get(buffer, index)`

Read the bit at index. A byte in the buffer contains 8 bits so index 0 would return the first bit in the first byte and index 8 would return the first bit in the second byte.

#### `var updated = bits.set(buffer, index, bool)`

Set the bit at index. Returns true if a bit was updated false otherwise.

## License

MIT
