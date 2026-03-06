window.BENCHMARK_DATA = {
  "lastUpdate": 1772759616557,
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
          "id": "a6ee64d79d58e1a793d5da553a85063d33c5c317",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-05T19:15:38Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/a6ee64d79d58e1a793d5da553a85063d33c5c317"
        },
        "date": 1772759616256,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 154009034,
            "unit": "ns/op\t      1000 commits\t    380055 ns/\t  30539756 ns/commit\t 121748359 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 154009034,
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
            "value": 380055,
            "unit": "ns/",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 30539756,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 121748359,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}