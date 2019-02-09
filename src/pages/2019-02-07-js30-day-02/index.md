---
title: 'JS 30 Day 02 | CSS and JS Clock'
description: Second day of the js30 challenge by wes bos
date: '2019-02-07T0900'
image: Capture.png
---

# Day 2 - CSS and JavaScript Clock

## A clock made from CSS and JavaScript.

### What I learned:

#### transform-origin (CSS)

transform-origin moves the point of the transformation of an object. The concrete example used here is the hands of the clock. Normally if we used transform origin, the object-would rotate around the center axis. The concept is demonstrated below with the > o < being the point of rotation.

##### transfrom-origin: 50%

```css
.hand {
  transfrom-origin: 50%; /* 50% the default */
}
/*
   =====o=====
*/
```

##### transfrom-origin: 0%

```css
.hand {
  transfrom-origin: 0%;
}
/*
   o==========
*/
```

##### transfrom-origin: 100%

```css
.hand {
  transfrom-origin: 100%;
}
/*
   ==========o
*/
```

#### Accessing styles through JavaScript

Coming from jQuery, I would deal with CSS with something like:

```javascript
$('#bgcolor').mouseleave(function() {
  var bodyColor = $(this).attr('style')
  $('body').attr('style', bodyColor)
})
```

only recently have I discovered the way to access these properties with vanilla JavaScript. In this project, I learned that I could access the Date method, then correlate the degrees with the seconds with basic math and transform the second hand position based on the current time.

```javascript
const now = new Date()

const seconds = now.getSeconds()
const secondsDegrees = (seconds / 60) * 360 + 90
secondHand.style.transform = `rotate(${secondsDegrees}deg)`
```
