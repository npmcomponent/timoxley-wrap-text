# wrap-text

  Wrap text nodes.

## Installation

    $ component install timoxley/wrap-text

## Example

```js
  var wrapText = require('wrap-text')
  var wrapper = document.createElement('span')

  // wrap the text in each paragraph with the wrapper
  wrapText(document.querySelectorAll('p'), wrapper) 
```

## License

  MIT
