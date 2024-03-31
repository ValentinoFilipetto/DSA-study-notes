## Maps

As usual, let us begin with some terminology:

- Load factor: the ratio between the amount of data points and the amount of storage e.g. if the amount of data is 7 and the amount of storage is 10, our load factor will be 7 / 10 = 0.7.
- Key: a value that is hashable and can be used to look up data. The hash has to be consistent.
- Value: a value that is associated with a key.
- Collision: when two keys map to the same cell.

In JavaScript, we can create hash maps of strings, because we can loop through the string and create the hash in some way, but we cannot assing unique hashes to objects, because if two objects contain the same key-value pairs, there is no way to tell the difference between the two, i.e. they will map to the same value!

Typically, hashing works like this: we have a hashing function `h(k) => number`, which takes a key as input and returns some sort of unique number. This number can be big or small, but we can, for instance, do a modulo (%) operation with it, and divide it by, say, the number of items in the storage. The resulting key will be stored together with the identified value in the following way: `[{K,V}]`. The problem though is that this will eventually produce identifiers that are not _unique_ (i.e. if % gives us the same number), but that is why we store the key _together with the value_, so that the value will give us the ability to discriminate when there is a collision. Then, to fetch a specific value, we need to first find the right "bucket" in constant time, and then - in linear time - go through the key-value pairs in the right bucket to find the one we need.
