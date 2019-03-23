# NJQ
A small JQuery replacement for simple apps running on modern browsers

## Why?
I sometimes write simple web apps that need a simple, fast, and small library to perform simple operations that are often performed using JQuery. Although JQuery is impressive at supporting many different browsers and providing so much functionality, I sometimes need a more straightforward and faster library. NJQ is this library.

## Does it work on my browser?
Probably, but you can check out for yourself by visiting [this page](https://stefanovazzocell.github.io/NJQ/docs/).

## CDN

Starting from version *0.3.0* the library is now available by <a href="https://github.com/stefanovazzocell">Stefano's</a> CDN; the library is hosted under a <a href="https://rkt.one">domain</a> owned and operated by <a href="https://stefanovazzoler.com">Stefano Vazzoler</a> and protected by <a href="https://cloudflare.com">CloudFlare</a>. It should be pretty fast for small to medium project, but if you're expecting a considerably high load consider giving me a <a href="https://stefanovazzoler.com/contact-me/">heads-up</a> so I can prepare for it or consider hosting it yourself.

```html
<!-- Full version -->
<script src="https://cdn.rkt.one/njq/030/njq.js" integrity="sha384-sxakO0qjCIUSifXubQ4qnPaj67tIs8MYtS2Zh/nmTYyDRM/6g5r+2rO88RlJ14Rt" crossorigin="anonymous"></script>
```

```html
<!-- No Ajax (get/post) -->
<script src="https://cdn.rkt.one/njq/030/njq_na.js" integrity="sha384-7VCCj2vaV/th3tgUZ+N9hL7cyYN8bCfsQ+gUXDnTtQrA0/h9cZuZ17SiKuBVDKw3" crossorigin="anonymous"></script>
```

## What version should I choose?
A few versions are provided. Depending on what your needs are, you might prefer some compared to others.
Here's a handy chart:

| File            | ajax* |  size**  |
| --------------- |:-----:| -------- |
| njq###.min.js   | yes   | 2.1 KB   |
| njq###na.min.js | no    | 1.3 KB   |

`* if you need any ajax request (ajax(), post(), and get()) use this version`

`** size for the min file, version 0.3.0, not gzipped`

## How do I download it?
You can download this program at the [releases](https://github.com/stefanovazzocell/NJQ/releases/) page on Github.

**Warning:** Not recommended
For the latest updates, features, and fixes you can experiment with the raw development version; just save [this](https://raw.githubusercontent.com/stefanovazzocell/NJQ/master/src/njq.js) file.

## Versions
NJQ follows tentatively [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html).

### Changelog

**0.3.0**

- Added concatenation of functions
- `20%` smaller (`30%` smaller for **na** version)
- Removed `log` (no dev version)
- Renamed `isEmptyObject` to `emptyObj` and `encodeDataForURI` to `encodeUri`

**0.2.0**

Check GitHub commits