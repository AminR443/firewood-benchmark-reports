window.BENCHMARK_DATA = {
  "lastUpdate": 1773701844168,
  "repoUrl": "https://github.com/ava-labs/firewood",
  "entries": {
    "Replay 10K PR": [
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
          "id": "b76ee5e3dbb59fd6f8b7c89bedca312d58d0b8a3",
          "message": "fix: script",
          "timestamp": "2026-03-14T12:43:45Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/b76ee5e3dbb59fd6f8b7c89bedca312d58d0b8a3"
        },
        "date": 1773642046834,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 155243805,
            "unit": "ns/op\t      1000 commits\t    394397 ns/\t  32297972 ns/commit\t 121218841 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 155243805,
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
            "value": 394397,
            "unit": "ns/",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 32297972,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 121218841,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      },
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
          "id": "30a28da3d98ae2eb8a86d9f0e4e0c7bb63c150f3",
          "message": "perf: change def persist to 25",
          "timestamp": "2026-03-14T12:43:45Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/30a28da3d98ae2eb8a86d9f0e4e0c7bb63c150f3"
        },
        "date": 1773645499580,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 132610894,
            "unit": "ns/op\t      1000 commits\t    356272 ns/\t  16082099 ns/commit\t 114905308 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 132610894,
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
            "value": 356272,
            "unit": "ns/",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 16082099,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 114905308,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      },
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
        "date": 1773701843763,
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