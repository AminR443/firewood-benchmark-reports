window.BENCHMARK_DATA = {
  "lastUpdate": 1773645500909,
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
          "id": "30a28da3d98ae2eb8a86d9f0e4e0c7bb63c150f3",
          "message": "perf: change def persist to 25",
          "timestamp": "2026-03-14T12:43:45Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/30a28da3d98ae2eb8a86d9f0e4e0c7bb63c150f3"
        },
        "date": 1773645500612,
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
      }
    ]
  }
}