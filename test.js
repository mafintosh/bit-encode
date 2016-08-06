var tape = require('tape')
var bits = require('./')

tape('basic get', function (t) {
  var zeros = Buffer([0])
  var ones = Buffer([255])

  for (var i = 0; i < 8; i++) {
    t.same(bits.get(zeros, i), false)
    t.same(bits.get(ones, i), true)
  }

  t.end()
})

tape('set + get', function (t) {
  var buf = Buffer([0])

  t.same(bits.get(buf, 0), false)
  bits.set(buf, 0, true)
  t.same(bits.get(buf, 0), true)

  t.same(bits.get(buf, 1), false)
  bits.set(buf, 1, true)
  t.same(bits.get(buf, 1), true)

  t.same(bits.get(buf, 7), false)
  bits.set(buf, 7, true)
  t.same(bits.get(buf, 7), true)

  // validate all
  t.same(bits.get(buf, 0), true)
  t.same(bits.get(buf, 1), true)
  t.same(bits.get(buf, 2), false)
  t.same(bits.get(buf, 3), false)
  t.same(bits.get(buf, 4), false)
  t.same(bits.get(buf, 5), false)
  t.same(bits.get(buf, 6), false)
  t.same(bits.get(buf, 7), true)

  t.end()
})

tape('set + get inverse', function (t) {
  var buf = Buffer([255])

  t.same(bits.get(buf, 0), true)
  bits.set(buf, 0, false)
  t.same(bits.get(buf, 0), false)

  t.same(bits.get(buf, 1), true)
  bits.set(buf, 1, false)
  t.same(bits.get(buf, 1), false)

  t.same(bits.get(buf, 7), true)
  bits.set(buf, 7, false)
  t.same(bits.get(buf, 7), false)

  // validate all
  t.same(bits.get(buf, 0), false)
  t.same(bits.get(buf, 1), false)
  t.same(bits.get(buf, 2), true)
  t.same(bits.get(buf, 3), true)
  t.same(bits.get(buf, 4), true)
  t.same(bits.get(buf, 5), true)
  t.same(bits.get(buf, 6), true)
  t.same(bits.get(buf, 7), false)

  t.end()
})
