#!/usr/bin/env bash

# safe bash settings
set -euo pipefail

cd uikit
git checkout main
git pull origin main

latest_tag=$(git describe --tags --abbrev=0)

cd ..
git add uikit

old_version=$(grep -oP "uikit@(\d+\.\d+\.\d+)" templates/base.html | head -n 1)
new_version="uikit@${latest_tag#v}"

sed -i "s/${old_version}/${new_version}/g" templates/base.html
