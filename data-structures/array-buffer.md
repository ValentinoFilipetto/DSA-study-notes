## Array buffer

An array buffer is like an array list but we are not using 0 as head and ".length" as tail; instead we have index-based head and index-based tail, something like:

```
[ _, _, _, H, ... , T, _, _, _ ]
```

So if we want to remove from the front we can just say that H = H + 1 and the previous value gets cleaned up; same thing happen for adding a value to the tail. So now push and pop, shift and unshift are all `O(1)` operations.

But what if we exceed the capacity of the array buffer? The cool thing here is that array buffers behave like rings, so if we exceed the capacity on the right we will end up... on the left! We can get the index on the other side with the module operator: `this.tail % len`. What happens when the tail exceeds the head? We need to resize.
