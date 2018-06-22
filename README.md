# NJQ
A small JQuery replacement for simple apps running on modern browsers

## Why?
I sometimes write simple web apps that need a simple, fast, and small library to perform simple operations that are often performed using JQuery. Although JQuery is impressive at supporting many different browsers and providing so much functionality, I sometimes need a more straightforward and faster library. NJQ is this library.

## Does it work on this browser?
Probably, but you can check out for yourself by visiting [this page](https://stefanovazzocell.github.io/NJQ/docs/).

## What version should I choose?
A few versions are provided. Depending on what your needs are, you might prefer some compared to others.
Here's a handy chart:

| File                | dev* | ajax** |
| ------------------- |:----:|:------:|
| njq_dev_###.min.js  | ✓    | ✓     |
| njq_prod_###.min.js | ✗    | ✓     |
| njq_d_na_###.min.js | ✓    | ✗     |
| njq_p_na_###.min.js | ✗    | ✗     |

_* if you need the `log()` operator (for testing) use this version_
_* if you need any ajax request (ajax(), post(), and get()) use this version_


## Versions
NJQ follows tentatively [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html).
