# tryUnless
keep trying a function unless a condition is met for X times per second, give up after Y seconds


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

