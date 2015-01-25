(function() {
	// crawl through revisions through childrens and parents
	// with page up and page down keyboard keys

	// example url on the local machine:
	// http://localhost:8080/redmine/projects/git-project/repository/revisions/84c5ae4492f36931205780f33a871af017085452/diff

	// this script could be uploaded to tempermonkey

	var url = "https://api.github.com/repos/lanastasov/Codekata/commits";
	var commits = "";
	$.getJSON( url, function(data) { commits = data });

	function NextCommit(commit, href, nextOrPrev) {
		var location = -1;
		var temp	 = "";
		for (var i = 0; i<commit.length; i++) {
			temp = href.split("/");
			console.log(commit[i].html_url.split("/")[6])
			if ( href.split("/")[8] == commit[i].html_url.split("/")[6] ) {
				location = i;
				break;
			}
		}

		temp[8] = commit[i+nextOrPrev].html_url.split("/")[6];

		return temp.join("/");
	}

	window.addEventListener("keydown", function(event) {
		// pageup
		if (event.keyCode == 33) {
			window.location.href = NextCommit(commits, window.location.href, -1);
		}

		// pagedown
		if (event.keyCode == 34) {
			window.location.href = NextCommit(commits, window.location.href, +1);
		}
	})
})();