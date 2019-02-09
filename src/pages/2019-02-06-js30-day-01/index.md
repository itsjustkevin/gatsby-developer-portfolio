---
title: 'JS 30 Day 01 | JavaScript Drum Kit'
description: First day of the js30 challenge by wes bos
date: '2019-02-06T0900'
image: Capture.PNG
---

# Day 1 - JavaScript Drum Kit

## A drum kit made using JavaScript and CSS

## What I learned:

### The HTML data-\* attribute

This is an attribute that I have never used before in html. Taking a look through [Mozilla Developer Network](https://developer.mozilla.org).

the data attribute is used to describe things that have no real visual representation. I could use this to describe something like the meta-data of a blog post.

```html
<article
  id="2019-07-02-first-post"
  data-tag="tutorial"
  data-words="400"
></article>
```

I could take this and access it with javascript by accessing the elements "dataset" property which has a property of the name that is after "data-"

```javascript
const blogPost = document.querySelector('#2019-07-02-first-post')

blogPost.dataset.tag // "tutorial"
blogPost.dataset.words // "400"
```

In this project, data was stored as a key to describe which sounds got played with which key. The keys and sounds were later associated by using the data attributes.

#### Classlist

In jQuery the way to access and add a class to an element, I would use:

```javascript
$('p')
  .removeClass('myClass noClass')
  .addClass('yourClass')
```

In vanilla JavaScript, I would access an element by selecting it then utilizing the .classList and .add or .remove properties to add or remove a class to an element.

```javascript
key.classList.add('playing')
```
