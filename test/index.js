"use strict"

var assert = require('timoxley-assert')
var wrapText = require('wrap-text')

describe('wrapping text', function() {
  describe('simple case', function() {
    var el
    beforeEach(function() {
      el = document.createElement('p')
      el.innerText = 'Lorem ipsum'
    })
    it('takes an element and wraps the text in it with clone of supplied el', function() {
      var wrapper = document.createElement('span')
      wrapText(el, wrapper)
      assert.equal(el.outerHTML, '<p><span>Lorem ipsum</span></p>')
    })
  })
  describe('list case', function() {
    var el
    beforeEach(function() {
      el = document.createElement('ul')
      el.innerHTML = '<li>Lorem</li><li>Ipsum</li>'
    })
    it('takes an element and wraps the text in it with clone of supplied el', function() {
      var wrapper = document.createElement('span')
      wrapText(el, wrapper)
      assert.equal(el.innerHTML, '<li><span>Lorem</span></li><li><span>Ipsum</span></li>')
    })
  })
})
