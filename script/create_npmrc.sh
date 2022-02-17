#!/bin/bash

NPMRC_FILE="./.npmrc"

echo "Preparing $NPMRC_FILE..."

curl -u${ARTIFACTORY_USERNAME}:${ARTIFACTORY_PASSWORD} "https://mdsol.jfrog.io/mdsol/api/npm/onex_design-npm-prod-local/auth/mdsol" > $NPMRC_FILE

echo 'git-tag-version=false' >> $NPMRC_FILE
echo ".npmrc created"
