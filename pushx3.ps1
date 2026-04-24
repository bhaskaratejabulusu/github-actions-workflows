git add .
git commit -m "concurrency test push"
git push origin concurrency-test
git checkout master
git merge concurrency-test
git push origin master
git checkout concurrency-test