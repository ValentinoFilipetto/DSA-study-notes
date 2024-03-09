## ArrayList

The nice thing about arrays is that, because we allocate memory ahead of time, it is very easy snd efficient to inspect and scan that memory by using indexes, and in certain cases we can jump inside the array (e.g. for binary search). The shortcoming of arrays however is that they don't have push/pop operations, which is the strong part of linked lists. But linked lists struggle when it comes to scanning, because in that case the time will always be linear: we have to start from the first node and from that get the second value and so on.

Can we have array access with the ability to grow? We can with array lists.

Array lists have two parameters: _length_ and _capacity_. Length is the actual size of the elements contained in the array, while capacity is the maximum size the array can host.

[ 1, _ _ ]

In the example above the array list has length 1 and capacity 3.
This allows us to have

- An `index` property, based on _length_,
- A constant time _push_ operation, which increases the length and adds a new value, e.g. we can push 2 like so: [ 1, 2, _ ]. If we exceed capacity, we need to increase it! We can do this by, say, creating a new array list with doubled capacity and copy all the numbers in this new array. Now we can easily handle the push operation.
  You can probably do a simmetrical thing if you want to _reduce_ capacity, but this is not very common - it cam be useful if we work with devices with very low memory.
- A constant time _pop_ operation, which decreases the length and remove a value grabbed through length, e.g. we can remove 2 like so: [ 1, _ _ ]
- For the _enqueue_ operation we need to shift all the values to the right to free up a spot for the value we want to enqueue. So [ 1, 5, 2, _ ] becomes [ _, 1, 5, 2 ] and then we can place 3 in the front. This is a linear time operation, so usually we prefer using queues for this kind of operations.
- If we want to _dequeue_ we are also going to have a linear time operation involved.

So ArrayLists are very good with push and pop operations and not as good with dequeue and enqueue. JavaScript "arrays" are not arrays in the traditional sense (a fixed chunck of memory) but rather array lists, and this can be tested empirically if we try to perform any "shift" operation with a JavaScript array: we will see that the language performs really bad; in JavaScript we have built-in methods like `.shift()` and `.unshift()` that are the equivalent of `dequeue` and `enqueue`.
