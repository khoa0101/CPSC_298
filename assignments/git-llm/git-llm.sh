#!/bin/bash

XML_FILE="commit_prompts.xml"

if [ $# -eq 0 ]; then
    echo "Usage: git-llm <prompt_type>"
    exit 1
fi

TYPE=$1
MESSAGE=$(xmllint --xpath "//prompt[@type='$TYPE']/message/text()" $XML_FILE)

if [ -z "$MESSAGE" ]; then
    echo "No commit prompt found for type: $TYPE"
    exit 1
fi

git add .
git commit -m "$MESSAGE"