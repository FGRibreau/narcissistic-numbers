narcissitic-number
==================


Quoting wikipedia

> An n-digit number that is the sum of the nth powers of its digits is called an n-narcissistic number. It is also sometimes known as an Armstrong number, perfect digital invariant (Madachy 1979), or plus perfect number. Hardy (1993) wrote, "There are just four numbers, after unity, which are the sums of the cubes of their digits: 153=1^3+5^3+3^3,  370=3^3+7^3+0^3, 371=3^3+7^3+1^3, and 407=4^3+0^3+7^3. These are odd facts, very suitable for puzzle columns and likely to amuse amateurs, but there is nothing in them which appeals to the mathematician." Narcissistic numbers therefore generalize these "unappealing" numbers to other powers (Madachy 1979, p. 164). [Wolfram](http://mathworld.wolfram.com/NarcissisticNumber.html)

```
npm i narcissistic-numbers
```

# usage

```
const isNarcissisticNumber = require('./isNarcissisticNumber');
const number = 153;
const {
    is, explanation
  } = isNarcissisticNumber(number);

console.log(`${number} ${is ? 'is' : 'is not'} a narcissistic number because "${explanation}"`);
// 153 is a narcissistic number because "153 = 1^3 5^3 3^3"
```

# demo

```bash
$ node run
Listing Narcissistic numbers...
0 = 0^1
1 = 1^1
2 = 2^1
3 = 3^1
4 = 4^1
5 = 5^1
6 = 6^1
7 = 7^1
8 = 8^1
9 = 9^1
153 = 1^3 5^3 3^3
370 = 3^3 7^3 0^3
371 = 3^3 7^3 1^3
407 = 4^3 0^3 7^3
1634 = 1^4 6^4 3^4 4^4
8208 = 8^4 2^4 0^4 8^4
9474 = 9^4 4^4 7^4 4^4
54748 = 5^5 4^5 7^5 4^5 8^5
92727 = 9^5 2^5 7^5 2^5 7^5
93084 = 9^5 3^5 0^5 8^5 4^5
548834 = 5^6 4^6 8^6 8^6 3^6 4^6
1741725 = 1^7 7^7 4^7 1^7 7^7 2^7 5^7
4210818 = 4^7 2^7 1^7 0^7 8^7 1^7 8^7
9800817 = 9^7 8^7 0^7 0^7 8^7 1^7 7^7
9926315 = 9^7 9^7 2^7 6^7 3^7 1^7 5^7
24678050 = 2^8 4^8 6^8 7^8 8^8 0^8 5^8 0^8
24678051 = 2^8 4^8 6^8 7^8 8^8 0^8 5^8 1^8
[...]
```
