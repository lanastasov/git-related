// get the initial commit
git rev-list --max-parents=0 HEAD
git rev-list HEAD | tail -n 1
