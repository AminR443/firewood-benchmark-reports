window.BENCHMARK_DATA = {
  "lastUpdate": 1773701845220,
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
          "id": "2894c5335d1b814f70abd154c67d11ae85bea9b2",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-14T12:43:45Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/2894c5335d1b814f70abd154c67d11ae85bea9b2"
        },
        "date": 1773701844912,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 134029489,
            "unit": "ns/op\t      1000 commits\t    359827 ns/\t  16031138 ns/commit\t 116394191 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 134029489,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - commits",
            "value": 1000,
            "unit": "commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/",
            "value": 359827,
            "unit": "ns/",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 16031138,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 116394191,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}