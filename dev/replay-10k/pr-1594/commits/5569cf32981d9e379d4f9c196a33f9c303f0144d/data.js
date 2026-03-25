window.BENCHMARK_DATA = {
  "lastUpdate": 1774397569043,
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
          "id": "5569cf32981d9e379d4f9c196a33f9c303f0144d",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-24T21:47:08Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/5569cf32981d9e379d4f9c196a33f9c303f0144d"
        },
        "date": 1774397568594,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 105023091,
            "unit": "ns/op\t      1000 commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 105023091,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - commits",
            "value": 1000,
            "unit": "commits",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}