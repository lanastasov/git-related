// ==UserScript==
// @name         page up, page down to crawl through the commits
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://localhost:8080/redmine/projects*
// @grant        none
// ==/UserScript==

// github v3 -> pagination
// you have 60 requests for 1 hours limited per ip
// every time you go to the next commit the page is reloaded 
// and multiple requests are made depending on the number of commits in the project (if > 100)

(function() {
    
    const version = "0.0.1";
    
	var user = "ManageIQ";
    var repo = "trollop";
    var pag  = "?page=-pageNumber-&per_page=100";
	
    var url_api = "https://api.github.com/repos/ManageIQ/trollop/commits?page=-pageNumber-&per_page=100";
    	url_api = "https://api.github.com/repos/" + user + "/" + repo + "/commits" + pag;
    
    var commits    = [];
    var parents    = [];
    var page       = 1;
    
	(function GetCommits(page, url) {
        url = url.replace("-pageNumber-", page);
        $.getJSON( url, function(data) { 
          
            commits = commits.concat(data); 
            parents = commits[commits.length-1].parents;
            
        }).done( function() {
    		if (JSON.stringify(parents) !== '[]') {
                page += 1;
                GetCommits(page, url_api);
            }
        });
    })(1, url_api);
	
	function NextCommit(commit, href, nextOrPrev) {
		var location = -1;
		var temp	 = "";
		for (var i = 0; i<commit.length; i++) {
			temp = href.split("/");
			if ( href.split("/")[8] == commit[i].html_url.split("/")[6] ) {
				location = i;
				break;
			}
		}

        try {
            if (commit[i+nextOrPrev].html_url == ""){};
        } catch(err) {
            console.log("err: Requested revision not available to the script");
            console.log("commit number=", i);
            console.log("all commits count=", commit.length);
        }
        
		temp[8] = commit[i+nextOrPrev].html_url.split("/")[6];
	
		return temp.join("/");
	}

	window.addEventListener("keydown", function(event) {
		// pageup
		if (event.keyCode == 33) {
            event.preventDefault();
			window.location.href = NextCommit(commits, window.location.href, -1);
		}

		// pagedown
		if (event.keyCode == 34) {
            event.preventDefault();
			window.location.href = NextCommit(commits, window.location.href, +1);
		}
	})
})();