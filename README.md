# tryUnless
keep **try**ing a function at X times **perSecond**, **unless** a condition is met, or **for** a certain time period!


Really simple utility script, use like

```javascript
tryUnless({
    try: function(){
        console.log("keep on trying!");
        if(Math.random() < 0.1){
            window.test = true;
        }
    },
    unless: function(){
        if(window.test){
            return true;
        }else{
            return false;
        }
    },
    perSecond: 50,  // optional (default 20 times per second)
    for: 20         // optional (default 10 seconds)
})
```

without an **unless** method the **try** function will run until the **for** timeout is reached.

```javascript
tryUnless({
    try: function(){
        console.log("this will run for 20 seconds!");
    },
    for: 20
})
```

without an **unless** method *and* without a **for** timeout the **try** function will run indefinitely.

```javascript
tryUnless({
    try: function(){
        console.log("this will run forever!");
    }
})
```
