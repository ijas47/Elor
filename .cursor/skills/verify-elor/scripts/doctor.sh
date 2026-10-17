#!/usr/bin/env bash
set -uo pipefail
cd "$(git rev-parse --show-toplevel)"
STATE=.verify
fail() { echo "doctor: FAIL $1"; exit 1; }
[ -f "$STATE/server.pid" ] || fail "no instance launched from this checkout (no $STATE/server.pid). Run launch.sh."
PID=$(cat "$STATE/server.pid"); PORT=$(cat "$STATE/server.port")
ps -p "$PID" >/dev/null 2>&1 || fail "our server pid $PID is not running. Run cleanup.sh then launch.sh."
OWNER=$(ss -ltnpH "sport = :$PORT" 2>/dev/null | grep -o 'pid=[0-9]*' | head -1 | cut -d= -f2)
if [ -n "$OWNER" ]; then
  [ "$(ps -o sid= -p "$OWNER" | tr -d ' ')" = "$PID" ] || fail "port $PORT is served by pid $OWNER, which this checkout did not start"
fi
CODE=$(curl -s -o /dev/null -w '%{http_code}' "http://localhost:$PORT/")
[ "$CODE" = 200 ] || fail "GET / returned $CODE"
BUILT=$(stat -c %Y .next/BUILD_ID)
NEWEST=$(git ls-files -mo --exclude-standard app components lib | xargs -r stat -c %Y | sort -n | tail -1)
[ -z "$NEWEST" ] || [ "$BUILT" -ge "$NEWEST" ] || echo "doctor: WARN app/components/lib changed after the build. Run cleanup.sh and launch.sh to test your edits."
echo "doctor: OK pid $PID port $PORT build $(cat .next/BUILD_ID) commit $(git rev-parse --short HEAD)"
