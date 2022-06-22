#!/usr/bin/env sh

set -e

yarn run build

cd dist

echo 'www.amberkrynica.pl' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:JacekBujalski/motel.git master:gh-pages

cd -