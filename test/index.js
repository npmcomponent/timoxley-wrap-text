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
    it('can unwrap', function() {
      var wrapper = document.createElement('span')
      var unwrap = wrapText(el, wrapper)
      unwrap()
      assert.equal(el.outerHTML, '<p>Lorem ipsum</p>')
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
    it('can unwrap', function() {
      var wrapper = document.createElement('span')
      var unwrap = wrapText(el, wrapper)
      unwrap()
      assert.equal(el.innerHTML, '<li>Lorem</li><li>Ipsum</li>')
    })
  })
  describe('mixed inline elements', function() {
    var el
    beforeEach(function() {
      el = document.createElement('p')
      el.innerHTML = 'Lorem Ipsum, <strong>Dolar sit</strong> amet.'
    })
    it('takes an element and wraps the text in it with clone of supplied el', function() {
      var wrapper = document.createElement('span')
      wrapText(el, wrapper)
      assert.equal(el.innerHTML, '<span>Lorem Ipsum, </span><strong><span>Dolar sit</span></strong><span> amet.</span>')
    })
    it('can unwrap', function() {
      var wrapper = document.createElement('span')
      var unwrap = wrapText(el, wrapper)
      unwrap()
      assert.equal(el.innerHTML, 'Lorem Ipsum, <strong>Dolar sit</strong> amet.')
    })
  })
  describe('taking a NodeList instead of an element', function() {
    var el
    beforeEach(function() {
      el = document.createElement('ul')
      el.innerHTML = '<li>Lorem</li><li>Ipsum</li>'
    })
    it('wraps each matching element', function() {
      var wrapper = document.createElement('span')
      wrapText(el.querySelectorAll('li'), wrapper)
      console.log("el.innerHTML", el.innerHTML)
      assert.equal(el.innerHTML, '<li><span>Lorem</span></li><li><span>Ipsum</span></li>')
    })
    it('can unwrap', function() {
      var wrapper = document.createElement('span')
      var unwrap = wrapText(el.querySelectorAll('li'), wrapper)
      unwrap()
      assert.equal(el.innerHTML, '<li>Lorem</li><li>Ipsum</li>')
    })
  })
})
