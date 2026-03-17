window.BENCHMARK_DATA = {
  "lastUpdate": 1773706287984,
  "repoUrl": "https://github.com/ava-labs/firewood",
  "entries": {
    "Replay 10K PR Compare": [
      {
        "commit": {
          "author": {
            "name": "ava-labs",
            "username": "ava-labs"
          },
          "committer": {
            "name": "ava-labs",
            "username": "ava-labs"
          },
          "id": "f128fbe512b80781ff9240a30d4503f386d7b642",
          "message": "feat: new summary",
          "timestamp": "2026-03-14T12:43:45Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/f128fbe512b80781ff9240a30d4503f386d7b642"
        },
        "date": 1773706287659,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog - s/op",
            "value": 0.132075602,
            "unit": "s/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - commits",
            "value": 1000,
            "unit": "commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - s/",
            "value": 0.000348652,
            "unit": "s/",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - s/commit",
            "value": 0.016010261,
            "unit": "s/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - s/propose-on-db",
            "value": 0.114484076,
            "unit": "s/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}