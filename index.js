var wrap = require('wrap')
module.exports = function(el, wrapper) {
  return findTextNodes(el).map(function(node) {
    return wrap(node, wrapper.cloneNode())
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
