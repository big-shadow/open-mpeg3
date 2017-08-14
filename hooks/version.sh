#!/bin/sh

cd /home/rw/Documents/GitHub-Repos/open-mpeg3/

node ./hooks/versioner.js $(git rev-list HEAD --count)
sleep 2s
git add ./package.json
