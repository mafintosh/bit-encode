exports.get = get
exports.set = set

function get (buf, index) {
  var byte = index >> 3
  var bit = index & 7
  return !!(buf[byte] & (128 >> bit))
}

function set (buf, index, val) {
  var byte = index >> 3
  var bit = index & 7
  var mask = 128 >> bit

  var b = buf[byte]
  var n = val ? b | mask : b & ~mask

  if (b === n) return false
  buf[byte] = n
  return true
}
