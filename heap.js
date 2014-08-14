module.exports = Heap

function defaultCompare(a, b) {
  return a - b
}

function Heap(compare){
  this.compare = compare || defaultCompare
  this.arr = []
}

Heap.prototype.peek = function(){
  return this.arr[0]
}

Heap.prototype.size = function() {
  return this.arr.length
}

Heap.prototype.push = function(v){
  var a = this.arr
    , compare = this.compare
    , pos = a.length
    , parent

  a.push(v)

  while(pos > 0) {
    parent = (pos - 1) >>> 1
    if (compare(a[parent], v) < 0) break
    a[pos] = a[parent]
    pos = parent
  }

  a[pos] = v
}

Heap.prototype.pop = function(){
  var a = this.arr
    , top = a[0]
    , poped = a.pop()

  if (a.length > 0) {
    siftDown(a, poped, 0, a.length - 1, this.compare)
  }

  return top
}

function siftDown(a, v, pos, last, compare) {
  var left
    , right
    , next

  while(true) {
    left = (pos << 1) + 1
    right = left + 1

    if (right <= last) {
      next = compare(a[right], a[left]) < 0
        ? compare(a[right], v) < 0 ? right : pos
        : compare(a[left], v) < 0 ? left : pos
    } else if (left == last) {
      next = compare(a[left], v) < 0 ? left : pos
    } else {
      next = pos
    }

    if (next == pos) break
    a[pos] = a[next]
    pos = next
  }

  a[pos] = v
}

Heap.prototype.resort = function() {
  var a = this.arr
    , compare = this.compare
    , last = a.length - 1
    , i = (last - 1) >>> 1

  if (a.length == 0) return

  while(i >= 0) {
    siftDown(a, a[i], i, last, compare)
    i--
  }
}

Heap.prototype.init = function(arr) {
  this.arr = arr
  this.resort()
}
