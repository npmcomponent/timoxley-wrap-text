# wrap-text

  Wrap text nodes.

## Installation

    $ component install timoxley/wrap-text

## Example

```js
  var wrapText = require('wrap-text')
  var wrapper = document.createElement('span')
  // wrap every text node with a span
  wrapText(document.querySelectorAll('p'), wrapper) 
```

## License

  MIT
