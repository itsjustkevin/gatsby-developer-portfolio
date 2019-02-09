---
title: 'JS 30 Day 03 | Playing with CSS variables and JavaScript'
description: Third day of the js30 challenge by wes bos
date: '2019-02-08T0900'
image: Capture.PNG
---

# Day 3 - Playing with CSS Variables and JS

## Updating CSS variables by using JavaScript.

### What I learned:

#### querySelectorAll does not return an array

When I jump into the console to inspect what gets returned in my query, I see what looks like an array of all of the things that I selected. In fact, that is not what they are at all. What is actually returned is something called a **"NodeList."** This node list functions similar to an array, but does not have all of the standard methods that an array has. When I inspect the node list I notice that it has its own set of methods that apply to it. Some of the methods are:

- entries
- forEach
- item
- keys
- values

#### :root

The :root CSS selector in most cases the same as the html element. This is a pseudo-class that matches the root element of a tree reperesenting the document in html. A common use for this selector is declaring global variables in CSS.

```css
:root {
  --primary-font-color: #777;
  --secondsary-font-color: #000;
}
```

#### document.documentElement

This returns the root of the element of the document. When using HTML documents the root is HTML, this correlates with the **:root** CSS selector.

```javascript
document.documentElement.style.setProperty('--primary-font-color', '#888')
```
