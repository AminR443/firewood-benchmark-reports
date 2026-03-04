window.BENCHMARK_DATA = {
  "lastUpdate": 1772661915708,
  "repoUrl": "https://github.com/ava-labs/firewood",
  "entries": {
    "Replay 10K PR Commit": [
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
          "id": "aa5bfed5a97b2c6cdda8cedb4f1b956ecc71148c",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-04T21:13:53Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/aa5bfed5a97b2c6cdda8cedb4f1b956ecc71148c"
        },
        "date": 1772661915417,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 5395783367,
            "unit": "ns/op\t      1000 commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 5395783367,
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