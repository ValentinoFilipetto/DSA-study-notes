# Big O notation

Big O notation is a way to categorize algorithm's time and memory requirements based on the input. It is not meant to be an exact measure. The purpose of big O is to help us make decisions when it comes to an algorithmic problem, and pick the best possible solution.

For example, let us consider this code:

```
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }
    return sum;
}
```

The time complexity of it is `O(n)`, because the time it takes for the function to complete _grows linearly_ with the input size, i.e. if the input grow by 50% the time required will increase by 50%. To put it in another way, for each new character in the input string, one extra loop is required.

If we have a function like this:

```
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }
        for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }
    return sum;
}
```

We might be tempted to say that the complexity is `O(2N)`, because we have two for-loops. But this is not correct, because - when it comes to big O - we drop constants. The reason is that big O describes the upper bound of the growth of an algorithm, i.e. the worst case, and so - as the input grows - constants become more and more irrelevant in detecting the real complexity of an algorithm. Remember: we are not trying to get the _exact_ time.

A corollary of this is that even though an algorithm can be _theoretically_ faster than another one, it does not mean that it is always faster in practice. For example, the fact that `O(N)` is faster than `O(2^N)` does not mean that the latter cannot perform equally well for small inputs.

Another example is the following:

```
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
           sum += charCode;
        }
    }
    return sum;
}
```

The complexity of this algorithm is `O(N^2)`.

One last example is _constant time_, which means that the running time does not grow with the input. Tipically we have constant time when we have to perform an operation which does not involve loops, like overwriting a value in an array.

To sum up, important concepts:

- Growth is with respect to the input,
- Constants are dropped,
- Worst case is _usually_ the way we measure.
