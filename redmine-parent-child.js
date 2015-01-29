// ==UserScript==
// @name         parent, child commit through redmine 
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       lanastasov
// @match        http://localhost:8080/redmine/projects/*/repository/revisions/*/diff
// @grant        none
// ==/UserScript==

// http://localhost:8080/redmine/projects/.*/repository/revisions/.*/?  -> in theory should work but it doesn't for me with 
// tempermonkey
(function() {
    
    var version = "0.0.2";
    var prev = "";
    var next = "";
    var url_ = window.location.href.split("/").splice(0,9).join("/");
    
    $.ajax({
        url: url_,
        type: 'get',
        success: function(data){
            var el = $( '<div></div>' );
            el.html(data);
            prev = $(".contextual a", el)[0].href;
            next = $(".contextual a", el)[1].href;	
        }
    });
    
    window.addEventListener("keydown", function(event) {
        // pageup
        if (event.keyCode == 33) {
            event.preventDefault();
            window.location.href = next + "/diff";
        }
    
        // pagedown
        if (event.keyCode == 34) {
            event.preventDefault();
            window.location.href = prev + "/diff";
        }
    })
})();
