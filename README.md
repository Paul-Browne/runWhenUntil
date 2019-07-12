# runWhenUntil

## run until

**run** a script at a rate of X times **perSecond** **until** a condition is met, or until the **for** timeout is reached

```javascript
runWhenUntil({
    run: function(){
        console.log("run forest run!!");
        if(Math.random() < 0.1){
            window.end = true;
        }
    },
    until: function(){
        if(window.end){
            return true;
        }else{
            return false;
        }
    },
    perSecond: 50,  // optional (default 20 times per second)
    for: 20         // optional (default 10 seconds)
})
```

## run when

**run** a script (once) **when** a condition is met (condition is tested X times **perSecond**) _or_ the script will not **run** if the **for** timeout is reached.

```javascript
runWhenUntil({
    run: function(){
        console.log("will run once only!");
    },
    when: function(){
        if(window.end){
            return true;
        }else{
            return false;
        }
    }
})
```

## run when until

**when** a condition is met **run** a script (once) _but_ the script won't fire if the **until** condition is met first. The rate at which the **when** condition is tested is X times **perSecond**. The **run** script will not fire if the **for** timeout is reached.

```javascript
runWhenUntil({
    run: function(){
        console.log("will run once only!");
    },
    when: function(){
        if(window.start){
            return true;
        }else{
            return false;
        }
    },
    until: function(){
        if(window.end){
            return true;
        }else{
            return false;
        }
    }
})
```

## just run

without an **until** method the **run** function will run until the **for** timeout is reached.

```javascript
runWhenUntil({
    run: function(){
        console.log("run forest run!!");
    }
})
```

**run** forever! (well, 24 hours)

```javascript
runWhenUntil({
    run: function(){
        console.log("run forest run!!");
    },
    for: 86400
})
```
