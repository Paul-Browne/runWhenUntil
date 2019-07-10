/*! runWhenUntil v1.2.0 | MIT License | github.com/paul-browne/runWhenUntil */ 
function runWhenUntil(args){
    var id = setInterval(function(){
        var _when = args.when && args.when();
        var _until = args.until && args.until();
        if(!args.when){
            if( _until ){
                clearInterval(id);
            }else{
                args.run();
            }
        }else{
            if( _when ){
                args.run();
            }
            if( _when || _until ){
                clearInterval(id);
            }
        }
    }, (1000 / args.perSecond) || 50);
    setTimeout(function(){
        clearInterval(id);
    }, (1000 * args.for) || 10000)
}
