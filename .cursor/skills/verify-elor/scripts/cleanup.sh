#!/usr/bin/env bash
set -uo pipefail
cd "$(git rev-parse --show-toplevel)"
STATE=.verify
if [ -f "$STATE/server.pid" ]; then
  PID=$(cat "$STATE/server.pid")
  kill -TERM -- "-$PID" 2>/dev/null
  for i in $(seq 1 20); do ps -p "$PID" >/dev/null 2>&1 || break; sleep 0.5; done
  rm -f "$STATE/server.pid" "$STATE/server.port"
  echo "cleanup: stopped process group $PID"
else
  echo "cleanup: nothing running from this checkout"
fi
echo "cleanup: evidence kept in $STATE/evidence/"
