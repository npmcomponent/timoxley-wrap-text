var wrap = require('wrap')
module.exports = function(el, wrapper) {
  var wrappedEls = wrapText(el, wrapper)
  return function() {
    wrappedEls.map(function(el) {
      unwrap(el)
    })
  }
}

function unwrap(el) {
  el.outerHTML = el.innerText
}

function wrapText(el, wrapper) {
  return findTextNodes(el).map(function(node) {
    wrap(node, wrapper.cloneNode())
    return node.parentNode
  })
}

function findTextNodes(el, results) {
  results = results || []
  if (el.nodeType === document.TEXT_NODE) {
    results.push(el)
  }
  for (var i = 0, l = el.childNodes.length; i < l; i++) {
    var v = el.childNodes[i];
    findTextNodes(v, results)
  }
  return results
}
