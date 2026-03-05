window.BENCHMARK_DATA = {
  "lastUpdate": 1772744080227,
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
          "id": "16df19ef13f66e1aa40efa23715e7a474e22a97a",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-05T19:15:38Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/16df19ef13f66e1aa40efa23715e7a474e22a97a"
        },
        "date": 1772744079918,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 158811551,
            "unit": "ns/op\t      1000 commits\t    387570 ns/\t  32575049 ns/commit\t 124449141 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 158811551,
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
            "value": 387570,
            "unit": "ns/",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 32575049,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 124449141,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}