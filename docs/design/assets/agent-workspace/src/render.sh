#!/bin/sh
# Renders the agent-workspace mocks to PNG, light and dark, 1280x800.
# Usage: render.sh <capture-command> [mock ...]
# The capture command takes: web <url> --name <name> --viewport 1280x800 --dir <dir>
# (headless Chrome screenshot helper). Output lands next to this folder.
set -eu
capture=$1; shift
here=$(cd "$(dirname "$0")" && pwd)
out=$(dirname "$here")
tmp=$(mktemp -d)
mocks=${*:-a-agent-tabs b-login-needed c-login-status d-takeover e-watch f-linked-indicator g-identities h-account-link i-linked-view j-linked-takeover}
for mock in $mocks; do
  for theme in light dark; do
    url="file://$here/$mock.html"
    [ "$theme" = dark ] && url="$url#dark"
    "$capture" web "$url" --name "$mock-$theme" --viewport 1280x800 --dir "$tmp"
    cp "$tmp/$mock-$theme.png" "$out/$mock-$theme.png"
  done
done
rm -rf "$tmp"
