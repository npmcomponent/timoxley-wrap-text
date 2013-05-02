"use strict"

/**
 * Module dependencies
 */

var wrap = require('wrap')

/**
 * Wrap an element or elements with clones of wrapper.
 *
 * @param {Element|NodeList} el element or elements to wrap.
 * @param {Element} wrapper
 * @return {Function} unwrapping Function
 * @api public
 */

module.exports = function wrapTextNodes(el, wrapper) {
  if (el instanceof NodeList) return multi(el, wrapper)
  var wrappedEls = wrapText(el, wrapper)
  return function() {
    wrappedEls.map(function(el) {
      unwrap(el)
    })
  }
}

/**
 * Handling for NodeLists
 *
 * @param {NodeList} els
 * @param {Element} wrapper
 * @api private
 */

function multi(els, wrapper) {
  var unwraps = []
  for (var i = 0, l = els.length; i < l; i ++) {
    var el = els[i]
    unwraps.push(module.exports(el, wrapper))
  }
  return function() {
    unwraps.map(function(fn) {
      fn()
    })
  }
}

/**
 * Unwrap a node. Converts `el` to just its text content.
 *
 * @param {Element} el
 * @api private
 */

function unwrap(el) {
  el.outerHTML = el.innerText
}


/**
 * Wrap text nodes in `el` with `wrapper`.
 *
 * @param {Element} el Element to wrap
 * @param {Element} wrapper Element to wrap el with.
 * @return {Array} Array of wrapped elements.
 * @api private
 */

function wrapText(el, wrapper) {
  return findTextNodes(el).map(function(node) {
    wrap(node, wrapper.cloneNode())
    return node.parentNode
  })
}

/**
 * Recursively find all the text nodes in `el`
 *
 * @param {Element} el
 * @return {Array} An array of text nodes.
 * @api private
 */

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
