# Arrays

Arrays are contigous memory spaces.

In some (traditional) languages, the way we declare an array is

```
a = int[3]
```

which means that we want a contigous memory space called `a` that can host three integers. We can then do:

```
a[0]
```

which is a way to get the first integer; if our type is in 32 bits (or 4 bytes), we will get the first 4 bytes into the array (remember that a byte consists of 8 adjacent binary digits called bits, i.e. 0s and 1s).

Given this, the operation of _insertion_ of a value into an array is just overwriting a value that already occupies that space of memory. When it comes to _deletion_, it means overwriting the value we want to overwrite with `0`. This can be understood better if we think about JavaScript `ArrayBuffer`, in that this code

```
const a = new ArrayBuffer(6);
```

outputs this:

```
<00 00 00 00 00 00>;
```

which are 6 bytes that can be overwritten.

The bottom line is that _traditional arrays_ have a fixed size and therefore they cannot grow, so there is no `push` or `pop`. Which does not mean we cannot use it: JavaScript does some further operation to allow us to use them. We will pretend than JavaScript actually has arrays and only use the `.length` property.
