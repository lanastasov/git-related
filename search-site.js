javascript:(
function(){
    var s=window.getSelection().toString();
    if(s){
        var i=s;
    }else{
        var i=prompt('Search Site:  '+location.hostname,'');
    }
    if(i==null){
        return;
    }else{
        u='https://www.google.com/search?q='+encodeURIComponent(i)+' site:'+location.hostname;
    }
    window.open(u);
})();
