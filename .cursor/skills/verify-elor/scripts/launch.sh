#!/usr/bin/env bash
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
PORT="${1:-3210}"
STATE=.verify
mkdir -p "$STATE"
if [ -f "$STATE/server.pid" ] && ps -p "$(cat "$STATE/server.pid")" >/dev/null 2>&1; then
  echo "launch: an instance from this checkout is already running (pid $(cat "$STATE/server.pid")). Run cleanup.sh first." >&2
  exit 1
fi
if ss -ltn "sport = :$PORT" | grep -q LISTEN; then
  echo "launch: port $PORT is taken by another process. Pass a free port, for example launch.sh 3211" >&2
  exit 1
fi
[ -d node_modules ] || npm ci --no-audit --no-fund
ok=0
for attempt in 1 2 3; do
  if npx next build > "$STATE/build.log" 2>&1; then ok=1; break; fi
  if grep -q "next/font" "$STATE/build.log"; then echo "launch: Google Fonts fetch failed (attempt $attempt), retrying" >&2; else break; fi
done
[ "$ok" = 1 ] || { echo "launch: build failed, see $STATE/build.log" >&2; tail -20 "$STATE/build.log" >&2; exit 1; }
setsid nohup npx next start -p "$PORT" > "$STATE/server.log" 2>&1 &
echo $! > "$STATE/server.pid"
echo "$PORT" > "$STATE/server.port"
for i in $(seq 1 60); do
  if curl -fsS "http://localhost:$PORT/" 2>/dev/null | grep -q "<h1"; then
    echo "launch: ready at http://localhost:$PORT (pid $(cat "$STATE/server.pid"), commit $(git rev-parse --short HEAD))"
    exit 0
  fi
  sleep 1
done
echo "launch: server did not serve a page with an h1 within 60s, see $STATE/server.log" >&2
exit 1
