window.BENCHMARK_DATA = {
  "lastUpdate": 1773256912758,
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
          "id": "2d871b88d53b0224e4363fa86092be22d574e38e",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-11T18:57:11Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/2d871b88d53b0224e4363fa86092be22d574e38e"
        },
        "date": 1773256912449,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 156453571,
            "unit": "ns/op\t      1000 commits\t    371686 ns/\t  33124783 ns/commit\t 121551623 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 156453571,
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
            "value": 371686,
            "unit": "ns/",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 33124783,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 121551623,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}