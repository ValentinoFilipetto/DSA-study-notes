## Recursion

Recursion usually involves a function calling itself at a certain point of its execution.
A recursive function typically has two "stages":

- Base case, which is what makes the recursive process stop,
- Recursive step, when the function calls itself.

An example of a recursive function is the following:

```
function foo(n: number) {
    if (n === 1) {
       return 1;
    };

    n + foo(n - 1);

    return n;
}
```

In this function,

```
if (n === 1) {
    return 1;
};

```

is the base case, whereas

```
n + foo(n - 1);
```

is the recursive step.

This function manages to sum all the digits up to n, so for example `foo(5)` outputs 15 (i.e. 5 + 4 + 3 + 2 + 1).

When `foo` is executed, it progressively produces a stack trace containing all the `foo` calls; let's visualize this process for `foo(5)`:

| Function calls | Return value |
| -------------- | ------------ |
| `foo(5)`       | 5+           |
| `foo(4)`       | 4+           |
| `foo(3)`       | 3+           |
| `foo(2)`       | 2+           |
| `foo(1)`       | 1            |

When we reach `foo(1)` we finally stop recursing because we returned 1, and at that point, we climb up the returned values:

| Function calls | Return value |
| -------------- | ------------ |
| `foo(5)`       | 5+`10`       |
| `foo(4)`       | 4+`6`        |
| `foo(3)`       | 3+`3`        |
| `foo(2)`       | 2+`1`        |
| `foo(1)`       | 1            |

And we return n, that is, 15.

If we were to rewrite the code like so:

```
function foo(n: number) {
    if (n === 1) {
       return 1;
    };

    const out = n + foo(n - 1);

    console.log(out)

    return out;
}
```

We would see the following in the console:

```
3

6

10

15
```

But this means that there is still room for a further operation (a "post" operation) _after_ the recursion! In fact we can do something with the values we just printed. For example:

```
function foo(n: number) {
    if (n === 1) {
       return 1;
    };

    const out = n + foo(n - 1);

    console.log(out + 1)

    return out;
}
```

We would see the following in the console:

```
4

7

11

16
```

So, we can divide the recursive step into three separate steps:

- Pre-operation, in this case `n + ...`,
- Recursion, in this case `foo(n - 1)`,
- Post-operation, in this case `out + 1`.

This will become more and more important, especially when we do pathing, as we will see.
