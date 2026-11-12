#!/bin/sh
# Renders the agent-workspace mocks to PNG, light and dark, 1280x800.
# Usage: render.sh <capture-command>
# The capture command takes: <url> --name <name> --viewport 1280x800 --dir <dir>
# (headless Chrome screenshot helper). Output lands next to this folder.
set -eu
capture=$1
here=$(cd "$(dirname "$0")" && pwd)
out=$(dirname "$here")
tmp=$(mktemp -d)
for mock in a-agent-tabs b-login-needed c-login-status d-takeover; do
  for theme in light dark; do
    url="file://$here/$mock.html"
    [ "$theme" = dark ] && url="$url#dark"
    "$capture" web "$url" --name "$mock-$theme" --viewport 1280x800 --dir "$tmp"
    cp "$tmp/$mock-$theme.png" "$out/$mock-$theme.png"
  done
done
rm -rf "$tmp"
