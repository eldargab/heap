var assert = require('assert')
var Heap = require('./heap')

var h = new Heap

h.init([5, 3, 2, 1, 10, 15])

assert.equal(h.pop(), 1)
assert.equal(h.pop(), 2)
assert.equal(h.pop(), 3)
assert.equal(h.pop(), 5)
assert.equal(h.pop(), 10)
assert.equal(h.pop(), 15)
assert.equal(h.pop(), null)


h.init([])

h.push(1)
h.push(2)
h.push(-1)
h.push(0)

assert.equal(h.pop(), -1)
assert.equal(h.pop(), 0)
assert.equal(h.pop(), 1)
assert.equal(h.pop(), 2)

console.log('Ok')