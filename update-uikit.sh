#!/usr/bin/env bash

# safe bash settings
set -euo pipefail

cd uikit
git checkout main
git pull origin main

cd ..
git add uikit
