/*! runWhenUntil v1.2.1 | MIT License | github.com/paul-browne/runWhenUntil */ 
function runWhenUntil(args){
    var id = setInterval(function(){
        var _until = args.until && args.until();
        if(args.when){
            if( args.when() ){
                args.run();
            }
            if( args.when() || _until ){
                clearInterval(id);
            }
        }else{
            if( _until ){
                clearInterval(id);
            }else{
                args.run();
            }
        }
    }, (1000 / args.perSecond) || 50);
    setTimeout(function(){
        clearInterval(id);
    }, (1000 * args.for) || 10000)
}
