/*! tryUnless v1.1.0 | MIT License | github.com/paul-browne/tryUnless */ 
function tryUnless(args){
    var id = setInterval(function(){
        if(args.unless && args.unless()){
            clearInterval(id);
        }else{
            args.try();
        }
    }, (1000 / args.perSecond) || 50);
    (args.unless || args.for) && setTimeout(function(){
        clearInterval(id);
    }, (1000 * args.for) || 10000)
}
