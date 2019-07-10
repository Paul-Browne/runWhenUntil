/*! tryUnless v1.0.0 | MIT License | github.com/paul-browne/tryUnless */ 
function tryUnless(args){
    var id = setInterval(function(){
        if(args.unless && args.unless()){
            clearInterval(id);
        }else{
            args.try();
        }
    }, args.interval || 50);
    (args.unless || args.timeout) && setTimeout(function(){
        clearInterval(id);
    }, args.timeout || 10000)
}
