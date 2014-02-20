*This repository is a mirror of the [component](http://component.io) module [timoxley/wrap-text](http://github.com/timoxley/wrap-text). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/timoxley-wrap-text`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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
