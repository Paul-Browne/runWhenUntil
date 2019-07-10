# tryUnless
keep **try**ing a function at an **interval** of X **unless** a condition is met, or a **timeout** of Y is reached!


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
    interval: 100,  // optional (default 50)
    timeout: 5000   // optional (default 10000)
})
```

