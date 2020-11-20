// get the initial commit
git rev-list --max-parents=0 HEAD
git rev-list HEAD | tail -n 1

// second method to see first several commits from within the borwser 
https://github.com/pomber/git-history/commits/master
// Click on Older
https://github.com/pomber/git-history/commits/master?after=651dd002e82a60e87ad685f5400b28dff4ed4f46+34&branch=master
// Change +34 with number of all commits (258 - 8) = +250 [this will show first 8 commits]
https://github.com/pomber/git-history/commits/master?after=651dd002e82a60e87ad685f5400b28dff4ed4f46+250&branch=master
