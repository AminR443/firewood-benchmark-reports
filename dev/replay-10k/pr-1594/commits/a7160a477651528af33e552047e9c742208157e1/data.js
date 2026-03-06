window.BENCHMARK_DATA = {
  "lastUpdate": 1772823339855,
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
          "id": "a7160a477651528af33e552047e9c742208157e1",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-06T11:55:19Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/a7160a477651528af33e552047e9c742208157e1"
        },
        "date": 1772823339514,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 167255196,
            "unit": "ns/op\t      1000 commits\t    380555 ns/\t  35101289 ns/commit\t 130328907 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 167255196,
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
            "value": 380555,
            "unit": "ns/",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 35101289,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 130328907,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}