# wrap-text

  Wrap text nodes.

## Installation

    $ component install timoxley/wrap-text

## Example

```js
  var wrapText = require('wrap-text')
  var wrapper = document.createElement('span')

  // Wrap text in each paragraph with the wrapper
  wrapText(document.querySelectorAll('p'), wrapper) 

```
### Example Input:
```html
<p>
  Lorem Ipsum, <strong>Dolar sit</strong> amet.
</p>
```
### Example Output:
```html
<p>
  <span>Lorem Ipsum, </span><strong><span>Dolar sit</span></strong><span> amet.</span>
</p>
```

## License

  MIT
