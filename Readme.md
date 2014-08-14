#Heap

[Binary heap](http://en.wikipedia.org/wiki/Binary_heap) data structure

##Installation

via component

```
component install eldargab/heap
```

##Examples

```javascript
var Heap = require('heap')
var h = new Heap(function compare(a, b) {
  return a - b
})

h.push(5)
h.push(0)
h.push(10)

h.pop() // => 0
h.pop() // => 5
h.pop() // => 10

h.init([5, 2, 3, 1, 4]) // will modify array in-place and use it as a storage
h.pop() // => 1

h.peek() // => 2
h.size() // => 4

h.resort() // When you have mutable objects,
           // call this to restore heap property after changes
```

##License

MIT